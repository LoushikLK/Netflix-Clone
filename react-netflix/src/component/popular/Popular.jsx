import React from "react";
import Containerslide from "../maincontainer/Containerslide";
import Maincontainer from "../maincontainer/Maincontainer";

function Popular() {
  let API_KEY = "api_key=023e7fa152989334a68b0ed2985b5fb8";
  let upcomingmovies = `
  https://api.themoviedb.org/3/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  let upcomingmovies2 = `
  https://api.themoviedb.org/3/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=2&with_watch_monetization_types=flatrate`;

  let upcomingtv = `https://api.themoviedb.org/3/discover/tv?${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
  let upcomingtv2 = `https://api.themoviedb.org/3/discover/tv?${API_KEY}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;

  let populartrend = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;
  return (
    <>
      <div className="bg-dark">
        <Maincontainer url={populartrend} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Discover new Movies</h2>
        <Containerslide url={upcomingmovies} />
        <Containerslide url={upcomingmovies2} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Discover new Tv Shows</h2>
        <Containerslide url={upcomingtv} />
        <Containerslide url={upcomingtv2} />
      </div>
    </>
  );
}

export default Popular;
