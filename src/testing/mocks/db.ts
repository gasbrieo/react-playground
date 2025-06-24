import { factory } from '@mswjs/data';

const models = {};

export const db = factory(models);

export type Model = keyof typeof models;

export const seedDb = async () => {};
