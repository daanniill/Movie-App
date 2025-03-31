import './App.css'
import MovieCard from "./components/MovieCard"

function App() { // An example of a component, any function in JS that returns some kind of JSX code
  // Can only return one parent element
  const movieNumber = 2;

  return (
    <> {/* A fragment, kind of an empty html tag, basically makes it so u can return multiple root elements */}
      
      {/* Conditional statement, if movieNumber == 1, then display first movie, else display the second one */}
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "My Film", release_date: "2025"}}/>
      ) : (
        <MovieCard movie={{title: "New Film", release_date: "2026"}}/>
      )}  

      {/* Could also use shortcircuiting from js to do the following */}
      {movieNumber === 1 && <MovieCard movie={{title: "My Film", release_date: "2025"}}/>}
    </>
  );
}

export default App
