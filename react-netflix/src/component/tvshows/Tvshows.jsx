import React from "react";
import Containerslide from "../maincontainer/Containerslide";
import Maincontainer from "../maincontainer/Maincontainer";

function Tvshows() {
  let API_KEY = "api_key=023e7fa152989334a68b0ed2985b5fb8";
  let latesturl = `https://api.themoviedb.org/3/tv/on_the_air?${API_KEY}&language=en-US&page=1`;
  let arrivingtodayurl = `https://api.themoviedb.org/3/tv/airing_today?${API_KEY}&language=en-US&page=1`;
  let populartvshowsurl = `https://api.themoviedb.org/3/tv/popular?${API_KEY}&language=en-US&page=1`;

  let topratedtvshow = `https://api.themoviedb.org/3/tv/top_rated?${API_KEY}&language=en-US&page=1`;
  return (
    <>
      <div className="bg-dark">
        <Maincontainer url={populartvshowsurl} />
      </div>

      <div className="bg-dark m-5 ">
        <h2 className="fw-bold text-light">Latest TV shows on Netflix</h2>
        <Containerslide url={latesturl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">New Arrive TV shows</h2>
        <Containerslide url={arrivingtodayurl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Popular TV Show</h2>
        <Containerslide url={populartvshowsurl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Top Rated TV series</h2>
        <Containerslide url={topratedtvshow} />
      </div>
    </>
  );
}

export default Tvshows;
