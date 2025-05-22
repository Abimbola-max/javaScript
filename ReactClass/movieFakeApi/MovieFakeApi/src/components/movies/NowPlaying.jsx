import {useGetNowPlayingMoviesQuery} from "../../service/movieAPI.jsx";
import MovieCard from "../../reuseable/MovieCard.jsx"

const NowPlaying = () => {

    const data = useGetNowPlayingMoviesQuery()
    console.log(data)
    return (
        <div>
            <MovieCard data={data}/>
        </div>
    )
}

export default NowPlaying;