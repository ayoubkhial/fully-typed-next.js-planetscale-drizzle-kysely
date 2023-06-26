import { Movie } from '@/lib/schema';

const getMovies = async (): Promise<Movie[]> => {
	try {
		const response = await fetch(`http://localhost:3000/api/movies`, {
			next: { revalidate: 3600 },
		});
		const movies: Movie[] = await response.json();
		return movies;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default async function Home() {
	const movies = await getMovies();
	return (
		<main>
			<div className="container">
				<div className="table">
					<div className="table-header">
						<div className="header__item">Title</div>
						<div className="header__item">Release year</div>
						<div className="header__item">Rating</div>
					</div>
					<div className="table-content">
						{movies.map((movie) => (
							<div className="table-row">
								<div className="table-data">{movie.title}</div>
								<div className="table-data">{movie.releaseYear}</div>
								<div className="table-data">{movie.rating}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
