import { queryBuilder } from '@/lib/planetscale';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (_: NextRequest) => {
	const movies = await queryBuilder.selectFrom('movies').selectAll().execute();
	return NextResponse.json(movies);
};

export { GET };
