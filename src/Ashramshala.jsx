import React from "react";
import "./css/Home.css";
import ashramshala from "./assets/ashramshala.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";
import ashramshalaimg from "./assets/ashramshala.jpg";
import gmdcgate from "./assets/gmdcgate.jpg";
import hostelimg from "./assets/ashram_shala_school.jpg";
class Asharamshala extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}

        <img src={ashramshala} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Asharam Shala Hostel for Stardard 1 to 7 Boys</h1>
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
            Asharam Shala, a revered educational institution, has been nurturing
            the minds of students since its establishment in 2012. The
            facility caters to a significant number of students, providing them
            with a conducive environment for learning and personal growth. With
            a commendable number of rooms available, Asharam Shala ensures that
            each student has access to comfortable accommodation. The
            institution prides itself on offering a range of facilities,
            including well-equipped classrooms, libraries, sports facilities,
            and recreational spaces, fostering holistic development among its
            students. Eligibility typically extends to students from various
            backgrounds and academic pursuits, aiming to create a diverse and
            inclusive learning community. Committed to excellence in education
            and student welfare, Asharam Shala stands as a beacon of knowledge
            and opportunity for aspiring learners.
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

export default Asharamshala;
