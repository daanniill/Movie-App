import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import { getPopularMovies, searchPopularMovies } from "../sevices/api";
import "../css/Home.css"

function Home() {
    // first parameter defines a state, the other defines the function to update the state
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch= async (e) => {
        e.preventDefault() // stops from refreshing the page
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchPopularMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch(err) {
            console.log(err)
            setError("Failed to load movies...")
        }
        finally {
            setLoading(false)
        }

        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}


        {loading ? (<div className="loading">Loading...</div>
        ) : (
        <div className="movies-grid"> {/* .map() dynamically renders an array of values. Iterate over single value of movies arrray and passes it into movie card. You need to define a key as well.*/}
            {movies.map((movie) => 
                <MovieCard movie={movie} key={movie.id}/>
            )}
        </div>
        )}
    </div>
}

export default Home