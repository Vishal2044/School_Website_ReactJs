import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {/* Close button */}
          <button className="close-button" onClick={this.props.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
          {/* Display the image */}
          <img src={this.props.image} alt="Modal Image" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
