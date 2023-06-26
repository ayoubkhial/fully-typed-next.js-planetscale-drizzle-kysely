import { InferModel } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const movies = mysqlTable('movies', {
	id: serial('id').primaryKey(),
	title: varchar('title', { length: 256 }).notNull(),
	releaseYear: int('releaseYear'),
	rating: int('rating').default(1),
});

export type Movie = InferModel<typeof movies>;
