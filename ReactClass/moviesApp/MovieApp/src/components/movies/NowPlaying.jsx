import {useGetNowPlayingMoviesQuery} from "../../service/movieAPI.jsx";

const NowPlaying = () => {

    const data = useGetNowPlayingMoviesQuery()

    return (
        <div>Now Playing</div>
    )
}

export default NowPlaying;