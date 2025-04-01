import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
    const {favorites} = useMovieContext()

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid"> {/* .map() dynamically renders an array of values. Iterate over single value of movies arrray and passes it into movie card. You need to define a key as well.*/}
                    {favorites.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2>No favorites Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
}

export default Favorites