import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!movies) return;

	const mainMovie = movies[0];

	const { original_title, overview, id } = mainMovie;
	const {title, original_language, release_date, vote_average} = mainMovie;

	return (
		<div className="pt-[32%] sm:pt-[20%] md:pt-0 bg-black">
			<VideoTitle title={original_title} overview={overview} movieId={id} description={[id, title, original_language, overview, release_date, vote_average]}/>
			<VideoBackground movieId={id}/>
		</div>
	);
};

export default MainContainer;
