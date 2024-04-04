import React from "react";
import "./css/Home.css";
import mayur1 from "./assets/mayur1.jpg";
import dlsspara from "./assets/dlss-para.jpg";
import ashramshala from "./assets/ashramshala.jpg";
import mapimg from "./assets/mapimg.jpg";
import kumarchat from "./assets/kumarchat.jpg";
import gmdcschool from "./assets/gmdcschool.jpg";
import collegeimg from "./assets/collegeimg.jpg";
// import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import Images from "./components/images.jsx";
import Modal from "./components/Model";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedImage: null,
    };
  }

  handleImageClick = (image) => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };
  render() {
    return (
      // NAVBAR
      <div className="body">
        <div className="App">{/* <Navbar /> */}</div>
        {/* NAVBAR */}

        <img src={mayur1} className="mayur1" alt="" />

        <div className="vertical-boxes">
          <div className="box">
            <img src={dlsspara} className="dlsspara" alt="" />
            <p>SPORT</p>
            <p>
              The district-level sports school in Saurashtra Devbhumi Kalyanpur
              district cultivates budding athletes with top-notch training and
              coaching, fostering talent for national and international success.
            </p>
          </div>
          <div className="box">
            <img src={mapimg} className="mapimg" alt="" />
            <p>EVENTS </p>
            <p>
              The school celebrates diversity with Yoga, Republic Day,
              Independence Day, and spirited sports events, fostering unity and
              healthy competition among students.
            </p>
          </div>
          <div className="box">
            <img src={ashramshala} className="asshramshala" alt="" />
            <p>FACILITES</p>
            <p>
              Our school boasts modern classrooms, labs, and sports grounds. The
              hostel ensures safety with spacious rooms, nutritious meals, and
              constant supervision.
            </p>
          </div>
        </div>

        <div className="container">
          <p className="right-image">
            <img
              src={kumarchat}
              alt="Image 1"
              className="kumarchat"
              onClick={() => this.handleImageClick(kumarchat)}
            />
          </p>
          <p className="left-paragraph">
            <h2>Boys Hostel</h2>
            Explore the vibrant Boys Hostel! Established in 2005, it
            accommodates 600 students across 64 rooms. Facilities include study
            areas, recreational spaces, and round-the-clock security. Open to
            male students enrolled in school programs. Experience comfort and
            camaraderie at Boys Hostel!
          </p>
        </div>

        <div className="container">
          <p className="left-paragraph">
            <h2>GMDC School</h2>
            Discover GMDC School, nurturing minds since its establishment in
            1987. Catering to students from 4 to grade 12, it boasts a student
            body of 1000+ learners. Equipped with modern classrooms,
            laboratories, sports facilities, and a well-stocked library, it
            ensures holistic development. Eligible for enrollment are students
            from all backgrounds seeking quality education and personal growth.
          </p>
          <p className="right-image">
          <img
              src={gmdcschool}
              alt="Image 1"
              className="kumarchat"
              onClick={() => this.handleImageClick(gmdcschool)}
            />
          </p>
        </div>

        <div className="container">
          <p className="right-image">
          <img
              src={collegeimg}
              alt="Image 1"
              className="kumarchat"
              onClick={() => this.handleImageClick(collegeimg)}
            />
          </p>
          <p className="left-paragraph">
            <h2>DLSS</h2>
            District Level Sport School established in 2017, with a vibrant
            student body of 100+ learners spanning from 3 to grade 12. The
            campus offers modern facilities including spacious classrooms,
            well-equipped science and computer labs, a library, and sports
            facilities. Eligible students from all backgrounds seeking quality
            education and personal development are welcome. Sports enthusiasts
            can engage in football, basketball, cricket, and athletics at DLSS.
          </p>
        </div>

        <Images />

        {this.state.showModal && (
          <Modal
            image={this.state.selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
        {/* FOOTER */}
        <div className="App">
          <Footer />
        </div>
        {/* FOOTER */}
      </div>
    );
  }
}

export default Home;
