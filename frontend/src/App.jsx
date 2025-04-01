import './css/App.css'
import MovieCard from "./components/MovieCard"
import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'


function App() { // An example of a component, any function in JS that returns some kind of JSX code
  // Can only return one parent element

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
