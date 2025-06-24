import { factory, primaryKey } from '@mswjs/data';

const models = {
  plan: {
    id: primaryKey(String),
    name: String,
    price: Number,
    duration: String,
  },
};

export const db = factory(models);

export type Model = keyof typeof models;

export const seedDb = async () => {
  [
    { id: 'PLAN-1', name: 'Basic', price: 10, duration: 'monthly' },
    { id: 'PLAN-2', name: 'Pro', price: 25, duration: 'monthly' },
    { id: 'PLAN-3', name: 'Enterprise', price: 99, duration: 'yearly' },
  ].forEach((plan) => db.plan.create(plan));
};
