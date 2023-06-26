import type { Config } from 'drizzle-kit';

export default {
	schema: './lib/schema.ts',
	out: './drizzle',
	connectionString:
		'mysql://nmjnels4tzc20t7b72e6:pscale_pw_988JyWahahLD5yhYhqxeN4oxiYD8MRD5COcbW38pWWt@aws.connect.psdb.cloud/movies?ssl={"rejectUnauthorized":true}',
} satisfies Config;
