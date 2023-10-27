import React from "react";


const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster} />
            </div>
            <div>
                <p>{movie.Type}</p>
                <p>{movie.Title}</p>
            </div>
        </div>
    )
}

export default MovieCard;