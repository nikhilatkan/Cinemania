import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_MOVIE_DETAILS_API } from "../../api/getMovieDetails.api";
import { TMDB_IMAGE_URL } from "../../utils/constant-urls";
import "./MovieDetailsComponent.css"
import { dateToYearConverter, durationConverter } from "../../utils/converter";
import { GET_MOVIE_CREDITS_API } from "../../api/getMovieCredits.api";

const MovieDetailsComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movieData, setMovieData] = useState();
    const [movieCredits, setMovieCredits] = useState();

    useEffect(() => {
        async function getMovieDetails() {
            const res = await GET_MOVIE_DETAILS_API(searchParams.get('id'));
            setMovieData(res.data);
            const credits = await GET_MOVIE_CREDITS_API(searchParams.get('id'));
            setMovieCredits(credits.data);
        }

        getMovieDetails();
    }, [])
    console.log(("movieData", movieData));
    return (

        <div>
            {movieData && (
                <div>
                    <div className="backdrop-img-container">
                        <img className="backdrop-img" src={`${TMDB_IMAGE_URL}${movieData.backdrop_path}`} />
                    </div>
                    <div className="movie-details-container">
                        <div className="poster-img-container">
                            <img className="poster-img" src={`${TMDB_IMAGE_URL}${movieData.poster_path}`} />
                        </div>
                        <div className="right-side-details-container">
                            <div className="movie-name">
                                <span className="movie-name-title">{movieData.title}</span> <span className="movie-name-year">{`(${dateToYearConverter(movieData.release_date)})`}</span>
                            </div>
                            <div className="movie-categories">
                                <div className="release-date">{movieData.release_date}</div>
                                <div className="dot-separator"> • </div>
                                <div className="genres-container">{movieData.genres.map((genre) => (<span className="genres">{genre.name}</span>))}</div>
                                <div className="dot-separator"> • </div>
                                <div className="duration">{durationConverter(movieData.runtime)}</div>
                            </div>
                            <div className="movie-tagline">{movieData.tagline}</div>
                            <div className="overview-container">
                                <h3 className="overview-text">Overview</h3>
                                <div className="movie-overview">{movieData.overview}</div>
                            </div>
                        </div>
                    </div>
                    {movieCredits && (
                        <div className="movie-cast-container">
                            <h3 className="movie-cast-title">Top Billed Cast</h3>
                            <div className="cast-scroller">
                                {movieCredits.cast.slice(0, 6).map((cast) => (
                                    <div className="cast-card">
                                        <a className="cast-card-image-anchor" href="">
                                            <div className="cast-card-image-container">
                                                <img className="cast-img" src={`${TMDB_IMAGE_URL}${cast.profile_path}`} />
                                            </div>
                                        </a>
                                        <div className="cast-details">
                                            <a href="">{cast.name}</a>
                                            <div className="cast-character">{cast.character}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MovieDetailsComponent;