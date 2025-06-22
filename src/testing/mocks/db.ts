import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

const models = {
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
    password: String,
    roles: String,
  },
};

export const db = factory(models);

export type Model = keyof typeof models;

export const loadDb = async () => {
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
    password: faker.internet.password(),
    roles: JSON.stringify(['admin']),
  });

  Array.from({ length: 15 }).forEach(() => {
    db.user.create({
      id: crypto.randomUUID(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      roles: JSON.stringify(['user']),
    });
  });

  await persistDb('user');
};

export const resetDb = () => {
  window.localStorage.clear();
};
