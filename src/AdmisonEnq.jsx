// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./css/Home.css";
import Footer from "./components/Footer";

const ContactForm = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwXZWFGjtUAJCzdt03br5mf7bW47asLPyRPABmO65F48i0A7Wa6zRlFeIMxq9dxFxvE/exec";
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Message sent successfully");
        setTimeout(function () {
          setMessage("");
        }, 3000);
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="body">
      <div className="App">
        {/* <Navbar /> */}

        {/* add admission form */}
        <div className="App">
          <form onSubmit={handleSubmit} className="horizontal-form">
            {/* Student Details */}
            <div className="form-row">
              <label>
                First Name:
                <input type="text" name="fname" required />
              </label>
              <label>
                Second Name:
                <input type="text" name="sname" required />
              </label>
              <label>
                Last Name:
                <input type="text" name="lname" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Gender:
                <select name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                </select>
              </label>
              <label>
                Date of Birth:
                <input type="date" name="dob" required />
              </label>
              <label>
                Admission Standard:
                <input type="text" name="admissionStandard" required />
              </label>
            </div>

            {/* Parent Details */}
            <div className="form-row">
              <label>
                Parent First Name:
                <input type="text" name="parentFname" required />
              </label>
              <label>
                Parent Last Name:
                <input type="text" name="parentLname" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Mobile Number:
                <input type="tel" name="mobile" required />
              </label>
              <label>
                Education:
                <input type="text" name="education" required />
              </label>
              <label>
                Address:
                <textarea name="address" required></textarea>
              </label>
            </div>

            {/* Submit Button */}
            <button className="sbtn" type="submit">
              Submit
            </button>
          </form>
          <p id="message">{message}</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
