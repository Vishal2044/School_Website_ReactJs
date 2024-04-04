import React from "react";
import "./css/Home.css";
import gmdc1 from "./assets/gmdcgate.jpg";
import gmdc2 from "./assets/mayur3.png";
import gmdc3 from "./assets/mayursec.png";
import mayursec from "./assets/mayur1.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class Gmdcschool extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}

        <img src={mayursec} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>GMDC School for Stardard 8 to 12 </h1>
        </p>

        <hr />

        <div className="image-container">
          <img src={gmdc1} alt="Image 1" className="gallery-image" />
          <img src={gmdc2} alt="Image 2" className="gallery-image" />
          <img src={gmdc3} alt="Image 3" className="gallery-image" />
        </div>

        <hr />

        <div className="container">
          <p className="about">
            GMDC School, catering to students from grades 8 to 12, has
            established itself as a prominent educational institution since its
            inception. With a significant student population, the school
            provides quality education to a diverse group of learners. The
            institution was established in 1992, aiming to offer comprehensive
            academic and extracurricular programs. GMDC School boasts numerous
            classrooms equipped with modern amenities, ensuring a conducive
            learning environment. Additionally, the school provides facilities
            such as laboratories, libraries, sports facilities, and computer
            rooms, facilitating holistic development among students. Eligibility
            extends to students in grades 8 to 12, regardless of their
            background or academic standing, fostering an inclusive learning
            community. Committed to nurturing young minds and fostering academic
            excellence, GMDC School stands as a beacon of education and
            opportunity for students seeking holistic growth and success.
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

export default Gmdcschool;
