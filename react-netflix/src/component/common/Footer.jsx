import React from "react";
import twitter from "../../image/footer/twitter2.png";
import github from "../../image/footer/githublogo.png";
import instagram from "../../image/footer/instagram.png";

const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);
  return (
    <>
      <footer className="footer container-fluid d-flex flex-column align-items-center mt-5">
        <p className=" text-light">Follow Me On Socials.</p>
        <div className="footer__social my-3">
          <a href="https://github.com/LoushikLK" className=" mx-2">
            <img
              src={github}
              className="img-fluid bg-light rounded-circle p-1"
              alt="socials"
            />
          </a>
          <a
            href="https://www.instagram.com/god____of___thunder/"
            className=" mx-2"
          >
            <img
              src={instagram}
              className="img-fluid bg-light rounded-circle p-1"
              alt="socials"
            />
          </a>
          <a href="https://twitter.com/LoushikGiri1" className=" mx-2">
            <img
              src={twitter}
              className="img-fluid bg-light rounded-circle p-1"
              alt="socials"
            />
          </a>
        </div>
        <p className="text-light">
          &#169; {date} copyright LK | all right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
