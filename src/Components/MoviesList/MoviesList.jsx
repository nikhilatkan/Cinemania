import React, { useEffect, useState } from "react";
import { GET_ALL_MOVIES_API } from "../../api/getAllMovies.api";
import "./MoviesList.css";
import { TMDB_IMAGE_URL } from "../../utils/constant-urls";

const MoviesList = () => {

    const [movieList, setMovieList] = useState({});

    useEffect(() => {
        async function fetchMoviesList() {
            const res = await GET_ALL_MOVIES_API();
            setMovieList(res.data);
        }
        fetchMoviesList();
    }, [])

    return (
        <div>
            <div>
                <div className="movie-poster-container">
                    {Object.keys(movieList).length != 0 && movieList.results.length > 0 && movieList.results.map((items, key) => (
                        <div key={key} className="movie-poster-wrapper">
                            <img className="movie-poster" src={`${TMDB_IMAGE_URL}${items.poster_path}`} alt="Movie" />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;