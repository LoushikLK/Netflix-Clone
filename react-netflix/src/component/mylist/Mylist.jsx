import React, { useState, useEffect } from "react";
import defaultimg from "../../image/defaultimg/videoicon.jpg";

function Mylist() {
  const [apidata, setApidata] = useState([{}]);

  const imageurl = "https://image.tmdb.org/t/p/w500";

  // console.log(`value  ${props.value}`);

  // console.log(mylist[0].name);

  const getmylist = async () => {
    try {
      const mylist = JSON.parse(localStorage.getItem("mylist"));

      // console.log(mylist);

      mylist.map(async (value, index) => {
        let url = `https://api.themoviedb.org/3/search/multi?api_key=023e7fa152989334a68b0ed2985b5fb8&language=en-US&query=${value.name}&page=1&include_adult=true`;

        const response = await fetch(url);

        const data = await response.json();

        // console.log(data);
        // console.log(data.results[0]);

        let listdata = data.results[0];

        console.log(listdata);

        setApidata([...apidata, apidata.push(listdata)]);
      });
    } catch (error) {
      // console.log(error);
      setApidata([]);
    }
  };

  // console.log(apidata.length);
  // console.log(mylisturl);

  useEffect(() => {
    getmylist();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container-fluid mx-5">
        <h1 className="text-center text-info">My List</h1>

        <div className="main-card d-flex flex-row  flex-wrap justify-content-center">
          {apidata.length > 0 &&
            apidata.map((value, index) => {
              if (value.gender !== undefined) {
                return (
                  <div
                    className="movie-card mx-2 bg-dark rounded my-3"
                    style={{ height: "21rem", width: "17rem" }}
                    key={index}
                  >
                    <img
                      src={
                        value.profile_path === undefined ||
                        value.profile_path === null
                          ? defaultimg
                          : imageurl + value.profile_path
                      }
                      alt="Content"
                      className="rounded-top img-fluid img-thumbnail"
                    />

                    <div className=" card-details  bg-dark rounded-bottom pt-3 ">
                      <div className=" justify-content-center">
                        <div className="btn btn-info fw-bold watch-detail">
                          {value.name}
                        </div>
                      </div>
                      <div className="d-flex mx-3">
                        <span className="text-warning fst-italic fw-bold">
                          Known For :
                          <span className="watch-catagorie text-light fw-bold  mx-2">
                            👁‍🗨{value.known_for_department}
                          </span>
                        </span>
                      </div>
                      <div className="movie-title d-flex  justify-content-center my-2 fw-bold">
                        <div className="text-info">
                          <span className="text-warning fst-italic">
                            Noteable Work :{" "}
                          </span>
                          {value.known_for.map((item, index) => {
                            return (
                              <div className="movie-name">
                                {index + 1 + "."}
                                {item.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
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
                        href={`/showdetail/${value.id}`}
                      >
                        More Info
                      </a>
                    </div>
                    <div className="movie-title d-flex  justify-content-center my-2 fw-bold">
                      {/* <span className="text-primary">{value.title}</span> */}
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
                      {/* <span className="text-center border border-danger text-light">
                      Genres :
                    </span> */}
                      <span className="text-warning fst-italic fw-bold">
                        Audience Type :
                        <span className="watch-catagorie text-light fw-bold  mx-2">
                          👁‍🗨{value.adult ? "18+" : "Everyone"}
                        </span>
                      </span>
                    </div>
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
      </div>
    </>
  );
}

export default Mylist;
