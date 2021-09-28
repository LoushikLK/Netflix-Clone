import React, { useState, useEffect } from "react";
import "./maincontainer.css";
import defaultimg from "../../image/defaultimg/videoicon.jpg";

const Containerslide = (props) => {
  const [apidata, setApidata] = useState([]);

  const imageurl = "https://image.tmdb.org/t/p/w500";

  const url = props.url;

  const getapidata = async () => {
    const response = await fetch(url);

    const data = await response.json();

    // console.log(data);
    setApidata(data.results);

    // console.log(data.results);
  };

  function savetomylist(name, id) {
    let listitem = {
      name: name,
      objectid: id,
    };

    let mylistitem = [];

    let data = JSON.parse(localStorage.getItem("mylist"));

    // console.log(data);

    if (data === null || undefined || "") {
      console.log("hi no movie here");

      localStorage.setItem("mylist", JSON.stringify([listitem]));

      return;
    }
    // console.log(data.concat(listitem));

    mylistitem = data.concat(listitem);

    // console.log(mylistitem);
    localStorage.setItem("mylist", JSON.stringify(mylistitem));
    console.log(id);
  }

  useEffect(() => {
    getapidata();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="main-card ">
        {apidata.length > 0 &&
          apidata.map((value, index) => {
            return (
              <div
                className="movie-card mx-2 bg-dark rounded my-3"
                style={{ height: "21rem", width: "17rem" }}
                key={index}
              >
                <img
                  src={
                    value.poster_path === undefined ||
                    value.poster_path === null
                      ? defaultimg
                      : imageurl + value.poster_path
                  }
                  alt="Content"
                  className="rounded-top img-fluid img-thumbnail"
                />

                <div className=" card-details  bg-dark rounded-bottom pt-3 ">
                  <div className="movie-title d-flex  justify-content-center my-2 fw-bold">
                    <span className="text-primary fw-bold text-center">
                      {value.title === undefined
                        ? value.original_name
                        : value.title}
                    </span>
                  </div>
                  <div className=" justify-content-center d-flex">
                    <a
                      className="btn btn-outline-info fw-bold watch-detail mx-2"
                      style={{ width: "45%" }}
                      id={index}
                      href={`/showdetail/${
                        value.title === undefined ? value.name : value.title
                      }`}
                    >
                      More Info
                    </a>
                    <button
                      id={index}
                      className="btn btn-outline-info fw-bold watch-detail"
                      onClick={(e) => {
                        value.title === undefined
                          ? savetomylist(value.original_name, value.id)
                          : savetomylist(value.title, value.id);
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Mylist"
                    >
                      +
                    </button>
                  </div>

                  <div className="movie-title d-flex  justify-content-center my-2 fw-bold">
                    <span className="text-info">
                      <span className="text-warning fst-italic">
                        Release Date :{" "}
                      </span>
                      {value.release_date
                        ? value.release_date
                        : value.first_air_date}
                    </span>
                  </div>
                  <div className="d-flex mx-3">
                    <span className="text-warning fst-italic fw-bold">
                      Audience Type :
                      <span className="watch-catagorie text-light fw-bold  mx-2">
                        👁‍🗨{value.adult ? "18+" : " Everyone"}
                      </span>
                    </span>
                  </div>
                  {/* <div className="watch-theme">
                    <ul>
                      <li>{value.genre_ids[0]}</li>
                      <li>{value.genre_ids[1]}</li>
                      <li>{value.genre_ids[2]}</li>
                    </ul>
                  </div> */}
                  <div className="star">
                    <div
                      className="rating"
                      style={{ width: `${value.vote_average * 10}%` }}
                    >
                      <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Containerslide;
