import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  dbName: 'event_postgress',
  password: 'postgres',
  user: 'postgres',
  host: 'localhost',
  port: 5432,

  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],

  debug: true,
});
