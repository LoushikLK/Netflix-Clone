import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./maincontainer.css";

const Detailinfo = () => {
  const [apidata, setApidata] = useState([]);

  const param = useParams();

  let API_KEY = "api_key=023e7fa152989334a68b0ed2985b5fb8";

  // console.log(param.id);
  // const url =
  //   `https://api.themoviedb.org/3/movie/${param.id}?${API_KEY}&language=en-US` ||
  //   `https://api.themoviedb.org/3/tv/${param.id}?${API_KEY}&language=en-US`;

  const url = `
  https://api.themoviedb.org/3/search/multi?${API_KEY}&language=en-US&query=${param.id}&page=1`;
  const getapidata = async () => {
    const response = await fetch(url);

    const data = await response.json();

    // console.log(data.results[0]);
    setApidata(data.results[0]);

    // console.log(data.poster_path);
  };
  // console.log(apidata);

  useEffect(() => {
    getapidata();
  }, [param]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="container-fluid detail-container ">
        <div className="detail-img">
          <img
            src={`https://image.tmdb.org/t/p/w500${apidata.poster_path}`}
            alt="Poster"
            className="img-fluid"
          />
        </div>
        <div className="detail-box bg-dark p-4">
          <div className="main-title text-center fw-bold my-4">
            <h1 className="text-warning">
              {apidata.title === undefined
                ? apidata.original_name
                : apidata.title}{" "}
              {""}(
              {apidata.release_date !== undefined
                ? apidata.release_date
                : apidata.first_air_date}
              )
            </h1>
          </div>
          <div className="release-detail">
            <span className="text-warning border border-info rounded-pill p-1">
              {apidata.adult ? "18+" : "PG-13"}
            </span>
            {apidata.genres &&
              apidata.genres.map((item, index) => {
                return (
                  <span
                    className="text-warning rounded-pill border border-info p-1 mx-2 "
                    key={index}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
          <div className="release-detail my-4">
            <span className="text-warning mx-4">{apidata.release_date}</span>
            <span className="text-warning mx-4">{apidata.runtime} min</span>
            <span className="text-warning mx-4">
              Lang -{" "}
              <span className="text-warning">{apidata.original_language}</span>
            </span>
          </div>

          <div className="detail-overview text-light text-start my-3 ">
            {apidata.overview}
          </div>
          <div className="popularity">
            <div className="star">
              <div
                className="rating"
                style={{ width: `${apidata.vote_average * 10}%` }}
              >
                <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
              </div>
            </div>
          </div>
          <div className="text-center text-light">
            Total Vote - <span className="text-info">{apidata.vote_count}</span>
          </div>
          <div className="info-btn">
            <button
              className="btn btn-outline-info fw-bold watch-detail mx-2"
              style={{ width: "25%" }}
            >
              Add to Mylist
            </button>
            <a
              className="btn btn-outline-info fw-bold watch-detail mx-2"
              style={{ width: "25%" }}
              href={apidata.homepage}
            >
              Visit to official site
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailinfo;
