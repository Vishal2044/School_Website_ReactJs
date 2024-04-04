import React from "react";
import "./css/Home.css";
import science1 from "./assets/gmdcgate.jpg";
import science2 from "./assets/college.jpg";
import science3 from "./assets/collegeimg.jpg";
import college from "./assets/college.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class Science extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}
        <img src={college} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Science School for Standarad 11 and 12</h1>
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
            Established to cater specifically to students in grades 11 and 12
            pursuing science education, the Science School has been a
            distinguished institution since its inception. While the exact
            number of students may vary, it typically hosts a substantial
            population of learners dedicated to the sciences. Founded in 2012,
            the school has been committed to providing quality education in
            science-related fields. The facility encompasses several classrooms
            equipped with advanced laboratory equipment and technology to
            facilitate practical learning experiences. In addition to academic
            resources, the Science School offers specialized facilities such as
            science laboratories, research areas, libraries stocked with
            scientific literature, and computer labs. Eligibility is typically
            limited to students in grades 11 and 12 with a keen interest in
            scientific studies, ensuring a focused and dedicated learning
            environment for those passionate about pursuing careers in science,
            technology, engineering, and mathematics (STEM) fields.
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

export default Science;
