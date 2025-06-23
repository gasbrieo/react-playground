import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

import { UserRole, UserStatus } from '@/types/users';

const models = {
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
    createdAt: String,
    accountBalance: Number,
    status: String,
    roles: String,
  },
};

export const db = factory(models);

export type Model = keyof typeof models;

export const loadDb = async () => {
  window.localStorage.clear();
  return Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));
};

export const storeDb = async (data: string) => {
  window.localStorage.setItem('msw-db', data);
};

export const persistDb = async (model: Model) => {
  const data = await loadDb();
  data[model] = db[model].getAll();
  await storeDb(JSON.stringify(data));
};

export const initializeDb = async () => {
  const database = await loadDb();

  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, unknown>) => {
        model.create(entry);
      });
    }
  });
};

export const seedDb = async () => {
  if (db.user.count() > 0) return;

  db.user.create({
    id: crypto.randomUUID(),
    name: 'admin',
    email: 'admin@localhost.com',
    createdAt: faker.date.past({ years: 2 }).toISOString(),
    accountBalance: parseFloat(faker.finance.amount({ min: 0, max: 10000, dec: 2 })),
    status: UserStatus.ACTIVE,
    roles: JSON.stringify([UserRole.ADMINISTRATOR]),
  });

  Array.from({ length: 5 }).forEach(() => {
    db.user.create({
      id: crypto.randomUUID(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      createdAt: faker.date.past({ years: 2 }).toISOString(),
      accountBalance: parseFloat(faker.finance.amount({ min: 0, max: 10000, dec: 2 })),
      status: faker.helpers.arrayElement(Object.values(UserStatus)),
      roles: JSON.stringify(
        faker.helpers.arrayElements([UserRole.EDITOR, UserRole.VIEWER], {
          min: 1,
          max: 3,
        }),
      ),
    });
  });

  await persistDb('user');
};

export const resetDb = () => {
  window.localStorage.clear();
};
