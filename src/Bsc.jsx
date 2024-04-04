import React from "react";
import "./css/Home.css";
import science1 from "./assets/gmdcgate.jpg";
import science2 from "./assets/college.jpg";
import science3 from "./assets/collegeimg.jpg";
import college from "./assets/college.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class Bsc extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}
        <img src={college} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Bachelor of Science College</h1>
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
            The Shri RS Kandoriya College offers Bachelor of Science programs,
            catering to a diverse student populace. Established in 2019, the
            college has flourished into an educational institution with a
            substantial student body pursuing various scientific disciplines.
            Its infrastructure encompasses numerous classrooms, laboratories,
            and research facilities, providing ample space for academic
            endeavors. Additionally, the college offers essential amenities such
            as libraries, computer labs, and sports facilities to support
            overall student development. Eligibility criteria typically include
            meeting academic prerequisites set forth by the college and
            fulfilling any specific requirements outlined for admission to the
            Bachelor of Science program. Committed to fostering scientific
            inquiry and innovation, Shri RS Kandoriya College aims to cultivate
            a dynamic learning environment that empowers students to excel in
            their chosen fields of study.
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

export default Bsc;
