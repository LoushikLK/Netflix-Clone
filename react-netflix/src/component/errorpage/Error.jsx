import React from "react";
import "./error.css";

function Error() {
  return (
    <div className="container-fluid error-page d-flex flex-column justify-content-center">
      <h1 className="text-center text-light my-3 ">Lost Your Way?</h1>
      <h4 className="text-center text-light fw-bold my-5">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </h4>
      <div className="d-flex justify-content-center ">
        <a href="/" className="btn mx-2 main-btn btn-outline-primary my-5">
          Netflix Home
        </a>
      </div>
    </div>
  );
}

export default Error;
