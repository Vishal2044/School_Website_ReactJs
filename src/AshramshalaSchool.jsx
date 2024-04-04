import React from "react";
import "./css/Home.css";
import ashramshalaimg from "./assets/ashramshala.jpg";
import gmdcgate from "./assets/gmdcgate.jpg";
import hostelimg from "./assets/ashram_shala_school.jpg";
import ashramshalaschool from "./assets/ashram_shala_school.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class Ashramshalaschool extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}
        <img src={ashramshalaschool} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Asharam Shala School for Stardard 1 to 7 Boys</h1>
        </p>

        <hr />

        <div className="image-container">
          <img src={ashramshalaimg} alt="Image 1" className="gallery-image" />
          <img src={gmdcgate} alt="Image 2" className="gallery-image" />
          <img src={hostelimg} alt="Image 3" className="gallery-image" />
        </div>

        <hr />

        <div className="container">
          <p className="about">
            Asharam Shala School, a renowned educational institution, has been
            shaping young minds since its establishment in 2008. With a
            considerable student body, the school provides quality education to
            a diverse population of learners. The campus boasts a sufficient
            number of classrooms, ensuring an optimal student-teacher ratio for
            effective learning. In addition to academic facilities, Asharam
            Shala School offers a range of amenities including libraries,
            laboratories, sports facilities, and extracurricular programs,
            fostering holistic development among its students. Eligibility
            extends to students from various backgrounds and age groups,
            providing an inclusive learning environment. Committed to excellence
            in education and student welfare, Asharam Shala School stands as a
            beacon of knowledge and opportunity for aspiring learners, preparing
            them for success in both academic and personal pursuits.
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

export default Ashramshalaschool;
