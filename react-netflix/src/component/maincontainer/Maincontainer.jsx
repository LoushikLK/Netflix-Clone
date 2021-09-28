import React, { useState, useEffect } from "react";
import "./maincontainer.css";
import playbtn from "../../image/maincontainer/play-button.png";
import infobtn from "../../image/maincontainer/info.png";

const Maincontainer = (props) => {
  const [maincontent, setMaincontent] = useState("");

  const getapidata = async () => {
    const url = props.url;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setMaincontent(data.results[0]);
  };

  useEffect(() => {
    getapidata();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section
        className="container-fluid maincontainer d-flex align-content-start justify-content-center flex-column px-5"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${maincontent.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-uppercase text-light box-shadow">
          {maincontent.original_name
            ? maincontent.original_name
            : maincontent.original_title}
        </h1>
        <p className="fs-4 text-light box-shadow">{maincontent.overview}</p>
        <div className="button-place mt-2">
          <a
            className="btn btn-light mx-2 main-btn"
            href={`https://www.youtube.com/results?search_query=${
              maincontent.title === undefined
                ? maincontent.original_name
                : maincontent.title
            }+trailer`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={playbtn}
              alt="Play"
              style={{ height: "1.25rem", paddingRight: ".5rem" }}
            />
            Play
          </a>
          {/* <div
            className="btn  mx-2 main-btn"
            style={{ backgroundColor: "#ffffff6e" }}
          >
            <img
              src={infobtn}
              alt="Info"
              style={{ height: "1.25rem", paddingRight: "0.5rem" }}
            />
            More Info
          </div> */}
          <a
            className="btn  mx-2 main-btn"
            style={{ backgroundColor: "#ffffff6e" }}
            href={`/showdetail/${maincontent.id}`}
          >
            <img
              src={infobtn}
              alt="Info"
              style={{ height: "1.25rem", paddingRight: "0.5rem" }}
            />
            More Info
          </a>
        </div>
      </section>

      <div className="container-fluid"></div>
    </>
  );
};

export default Maincontainer;
