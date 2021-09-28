import React from "react";
import Containerslide from "../maincontainer/Containerslide";
import Maincontainer from "../maincontainer/Maincontainer";

function Home() {
  let API_KEY = "api_key=023e7fa152989334a68b0ed2985b5fb8";
  let trendingurl = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;
  let popularmovieurl = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=1`;
  let populartvshowsurl = `https://api.themoviedb.org/3/tv/popular?${API_KEY}&language=en-US&page=1`;

  let maincontainerurl = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}&language=en-US&page=1S`;
  return (
    <>
      <div className="bg-dark">
        <Maincontainer url={maincontainerurl} />
      </div>

      <div className="bg-dark m-5 ">
        <h2 className="fw-bold text-light">Popular on Netflix</h2>
        <Containerslide url={trendingurl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">Popular Movies</h2>
        <Containerslide url={popularmovieurl} />
      </div>
      <div className="bg-dark m-5">
        <h2 className="fw-bold text-light">TV Drama</h2>
        <Containerslide url={populartvshowsurl} />
      </div>
    </>
  );
}

export default Home;
