import React from "react";
import "./css/Home.css";
import ashramshalaimg from "./assets/ashramshala.jpg";
import gmdcgate from "./assets/gmdcgate.jpg"; 
import hostelimg from "./assets/yogao.jpg";
import ashramshala from "./assets/ashramshala.jpg";
// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";

class GirlsHostel extends React.Component {
  render() {
    return (
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>
        {/* Navbar */}

        <img src={ashramshala} className="kumarchatra" alt="" />

        <hr />

        <p className="trusti text-center">
          <h1>Asharam Shala for Stardard 1 to 7 Girls</h1>
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
            Asharam Shala Girls Hostel is a renowned institution dedicated to
            providing accommodation for female students. Established in 2015,
            it has been a cornerstone in supporting the educational endeavors of
            numerous young women. The hostel accommodates a significant number
            of students, offering comfortable living spaces conducive to
            academic success and personal growth. With a substantial number of
            rooms available, each resident enjoys privacy and a conducive
            environment for study and relaxation. The hostel provides essential
            facilities such as well-equipped study areas, communal spaces,
            laundry facilities, and round-the-clock security, ensuring the
            safety and well-being of its residents. Eligibility typically
            extends to female students pursuing education in various fields,
            fostering a supportive and empowering environment for womens
            education. Committed to providing a nurturing and conducive living
            environment, Asharam Shala Girls Hostel stands as a pillar of
            support for aspiring female scholars.
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

export default GirlsHostel;
