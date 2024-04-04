import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Footer from "./components/Footer";
// import './css/Home.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz48WGASbFlqVnJ6yBSYqHcagqahyPxxnqe3g4sjshze0F2yWApzbMIUXlxOtde4NCaQA/exec";
    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        alert("Message sent successfully");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div>
      <div></div>
      <p
        style={{
          backgroundColor: "white",
          fontWeight: "bold",
          color: "blue",
          textAlign: "center",
          fontSize: "17px",
        }}
      >
        {new Date().toLocaleString()}
      </p>
      <div className="contact-left">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
          <input
            type="text"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            required
          />
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn2">
            Submit
          </button>
          <span id="msg"></span>
        </form>
      </div>
      <GoogleMap />
    </div>
  );
}

function GoogleMap() {
  const center = { lat: 22.1279009, lng: 69.29011289299052 };
  const zoom = 12;

  return (
    <div
      style={{
        height: "400px",
        width: "40%",
        marginTop: "50px",
        marginLeft: "700px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-2HQszGeckQu1Xd2AmidkBTSzE6r2nA0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default ContactForm;
