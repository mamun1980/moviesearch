import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
import "./App.css";



const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c10d6f08'

    const searchmovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchmovie({searchTerm});
    }, [searchTerm])

    return (
        <div className="app">
            <h1>MovieWorld!</h1>
            <div className="search">
                <input className="search" placeholder="Search for a movie" value={searchTerm} 
                    onChange={(e)=>{setSearchTerm(e.target.value)}} 
                />
                <button onClick={() => searchmovie(searchTerm)}>search</button>
            </div>

            <div className="container">
                {movies.map((movie) => <MovieCard movie={movie}/>)}
            </div>
        </div>
    );
}

export default App;
