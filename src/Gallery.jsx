import React from "react";
import "./css/Home.css";
import gmdcgate from "./assets/gmdcgate.jpg";
import kumarcht from "./assets/kumarchat.jpg";
import gmdc from "./assets/mayursec.png";
import yogao from "./assets/yogao.jpg";
import yogas from "./assets/yogas.jpg";
import college from "./assets/collegeimg.jpg";
import Footer from "./components/Footer";
import Modal from "./components/Model";
// import Navbar from "./components/Navbar";
// import Images from "./components/images.jsx";

class Gallery extends React.Component {
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
      <div className="body">
        {/* Navbar */}
        <div className="App">{/* <Navbar /> */}</div>

        <p className="trusti text-center">
          <h1>Gallery</h1>
        </p>
        <hr />

        <div className="image-container">
          <img
            src={gmdcgate}
            alt="Image 1"
            className="gallery-image"
            onClick={() => this.handleImageClick(gmdcgate)}
          />
          <img
            src={kumarcht}
            alt="Image 2"
            className="gallery-image"
            onClick={() => this.handleImageClick(kumarcht)}
          />
          <img
            src={gmdc}
            alt="Image 3"
            className="gallery-image"
            onClick={() => this.handleImageClick(gmdc)}
          />
        </div>
        <div className="image-container">
          <img
            src={yogao}
            alt="Image 1"
            className="gallery-image"
            onClick={() => this.handleImageClick(yogao)}
          />
          <img
            src={yogas}
            alt="Image 2"
            className="gallery-image"
            onClick={() => this.handleImageClick(yogas)}
          />
          <img
            src={college}
            alt="Image 3"
            className="gallery-image"
            onClick={() => this.handleImageClick(college)}
          />
        </div>

        <br />
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

export default Gallery;
