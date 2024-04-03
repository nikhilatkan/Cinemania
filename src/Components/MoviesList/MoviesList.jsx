import React, { useContext, useEffect, useState } from "react";
import { GET_ALL_MOVIES_API } from "../../api/getAllMovies.api";
import "./MoviesList.css";
import { TMDB_IMAGE_URL } from "../../utils/constant-urls";
import { createSearchParams, useNavigate } from "react-router-dom";
import AppContext from "../../AppContainer/context";
import GET_SEARCHED_MOVIES_API from "../../api/getSearchedMovies.api";

const MoviesList = () => {

    const [movieList, setMovieList] = useState({});
    const navigate = useNavigate();
    const context = useContext(AppContext);

    useEffect(() => {
        if (context.state === "") {
            async function fetchMoviesList() {
                const res = await GET_ALL_MOVIES_API();
                setMovieList(res.data);
            }
            fetchMoviesList();
        } else {
            async function fetchSearchedMovies() {
                const res = await GET_SEARCHED_MOVIES_API(context.state);
                setMovieList(res.data);
            }
            fetchSearchedMovies();

        }
    }, [context.state])

    // useEffect(() => {
    //     async function fetchMoviesList() {
    //         const res = await GET_ALL_MOVIES_API();
    //         setMovieList(res.data);
    //     }
    //     fetchMoviesList();
    // }, [])

    const handleMovieDetails = (params) => {
        navigate({
            pathname: "/details",
            search: createSearchParams({
                id: params
            }).toString()
        });
    }

    return (
        <div>
            <div>
                <div className="movie-poster-container">
                    {Object.keys(movieList).length != 0 && movieList.results.length > 0 && movieList.results.map((items, key) => (
                        <div key={key} className="movie-poster-wrapper">
                            <img className="movie-poster" src={`${TMDB_IMAGE_URL}${items.poster_path}`} alt="Movie" onClick={() => handleMovieDetails(items.id)} />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;