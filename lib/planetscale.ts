import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Kyselify } from 'drizzle-orm/kysely';
import { movies } from './schema';

interface Database {
	movies: Kyselify<typeof movies>;
}

export const queryBuilder = new Kysely<Database>({
	dialect: new PlanetScaleDialect({
		url: process.env.DATABASE_URL,
	}),
});
