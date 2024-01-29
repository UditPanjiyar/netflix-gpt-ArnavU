import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);
  
	return (
		<div>
			<iframe
				className="w-screen aspect-video h-full" 
				src={`https://www.youtube.com/embed/${trailerKey}?si=akN7OVsggAFHp0XC&autoplay=1&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
