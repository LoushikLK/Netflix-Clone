import React from "react";
import Containerslide from "../maincontainer/Containerslide";
import Maincontainer from "../maincontainer/Maincontainer";

function Movies() {
  let API_KEY = "api_key=023e7fa152989334a68b0ed2985b5fb8";
  let latesturl = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}&language=en-US&page=1`;
  let upcomingmovies = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&language=en-US&page=1`;
  let popularmovie = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=1`;

  let topratedmovie = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=1`;
  return (
    <>
      <div className="bg-dark">
        <Maincontainer url={popularmovie} />
      </div>

      <div className="bg-dark m-5 ">
        <h2 className="fw-bold text-light">Latest Movies on Netflix</h2>
        <Containerslide url={latesturl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Popular Movies </h2>
        <Containerslide url={popularmovie} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Top Rated Movies</h2>
        <Containerslide url={topratedmovie} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Upcoming and new Movies</h2>
        <Containerslide url={upcomingmovies} />
      </div>
    </>
  );
}

export default Movies;
