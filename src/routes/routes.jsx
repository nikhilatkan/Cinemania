import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME_ROUTE_PATH, MOVIE_DETAILS_PATH } from "./routes-constants";
import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";

const Router = () => {

    return (
        <Routes>
            <Route
                path={HOME_ROUTE_PATH}
                element={<Home />}
            />
            <Route
                path={MOVIE_DETAILS_PATH}
                element={<MovieDetails />}
            />
        </Routes>
    )
}

export default Router;