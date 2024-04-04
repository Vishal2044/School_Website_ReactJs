import React from "react";
import "./css/Home.css";
import ncc from "./assets/ncc.png";
import dlss from "./assets/dlss.png";
import mayurlogo from "./assets/mayurlogo.png";
import kumarchatra from "./assets/kumarchat.jpg";
import gmdcgate from "./assets/gmdcgate.jpg"; 
import hostelimg from "./assets/ashram_shala_school.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

class Kumarchatralay extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}

        <img src={kumarchatra} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Kumar Chatralay</h1>
        </p>

        <hr />

        <div className="image-container">
          <img src={kumarchatra} alt="Image 1" className="gallery-image" />
          <img src={gmdcgate} alt="Image 2" className="gallery-image" />
          <img src={hostelimg} alt="Image 3" className="gallery-image" />
        </div>

        <hr />

        <div className="container">
          <p className="about">
            Mayur Kumar Chatralay serves as a vital hub for students,
            accommodating a substantial population within its premises. Since
            its establishment in 2008, it has been a cornerstone in providing
            students with a comfortable and supportive living environment. The
            facility boasts an impressive number of rooms, ensuring that each
            resident has ample space for study and relaxation. In addition to
            comfortable living quarters, the institution offers convenient
            canteen facilities, catering to the nutritional needs of its
            residents. With a transparent fee structure, Mayur Kumar Chatralay
            strives to make quality accommodation affordable for all students.
            Eligibility typically extends to individuals actively pursuing
            academic pursuits, fostering a dynamic and diverse community.
            Committed to student well-being, the institution goes beyond mere
            lodging, offering a range of amenities and support services to
            enhance the overall student experience.
          </p>
        </div>

        <div className="image-container">
          <img src={ncc} className="foo-logo" alt="" />
          <img src={dlss} className="foo-logo" alt="" />
          <img src={mayurlogo} className="foo-logo" alt="" />
        </div>

        {/* FOOTER */}
        <div className="App">
          <Footer />
        </div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Kumarchatralay;
