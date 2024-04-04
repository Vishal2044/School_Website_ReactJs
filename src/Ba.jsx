import React from "react";
import "./css/Home.css";
import science1 from "./assets/gmdcgate.jpg";
import science2 from "./assets/college.jpg";
import science3 from "./assets/collegeimg.jpg";
import college from "./assets/college.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class Ba extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}
        <img src={college} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Bachelor of Arts College</h1>
        </p>

        <hr />

        <div className="image-container">
          <img src={science1} alt="Image 1" className="gallery-image" />
          <img src={science2} alt="Image 2" className="gallery-image" />
          <img src={science3} alt="Image 3" className="gallery-image" />
        </div>

        <hr />

        <div className="container">
          <p className="about">
            The Shri RS Kandoriya College offers Bachelor of Arts programs,
            providing education to a diverse student body. Established in 2019,
            the college has grown to accommodate a significant number of
            students across various disciplines. Its infrastructure boasts
            numerous rooms equipped for lectures, seminars, and other academic
            activities. Additionally, the college provides essential facilities
            such as libraries, laboratories, and recreational spaces to support
            holistic student development. Eligibility criteria typically include
            meeting academic requirements set by the college and adhering to any
            specific guidelines outlined for admission to the Bachelor of Arts
            program. With a commitment to excellence in education, Shri RS
            Kandoriya College strives to nurture the intellectual growth and
            personal development of its students, fostering a conducive
            environment for learning and exploration.
          </p>
        </div>

        <Images />
        {/* FOOTER */}
        <div className="App">
          <Footer />
        </div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Ba;
