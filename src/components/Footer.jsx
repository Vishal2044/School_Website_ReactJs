// eslint-disable-next-line no-unused-vars
import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <footer className="vertical-footer">
        <div className="footer-content">
          <nav className="menu">
            <a href="../Kumarchatra">Kumar Chatralay</a>
            <a href="../Ashramshala">Asharam Shala</a>
            <a href="../Girlshostel">Girls Hostel</a>
          </nav>

          <nav className="menu">
            <a href="../Ashramshala">Asharam Shala</a>
            <a href="../GmdcSchool">GMDC School</a>
            <a href="../ScienceSchool">Science School</a>
          </nav>

          <nav className="menu">
            <a href="../Ba">BA</a>
            <a href="../Bsc">BSC</a>
          </nav>
          <nav className="menu">
            <a href="../StudentResult">Student Results</a>
            <a href="../Gallery">Gallery</a>
            <a href="../AdmisonEqn">Admission Enquiry</a>
            <a href="../Contact">Contact Now</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="logof">
            <h1>MAYUR EDUCATION CAMPUS</h1>
          </div>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/mayur_education_campus_nandana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="icon" alt="" />
            </a>
            <a
              href="https://www.facebook.com/mayursankul.nandana?locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="ficon" alt="" />
            </a>
          </div>
        </div>
        <section id="copy-right">
          <div className="copy-right-sec">
            <i className="fa-solid fa-copyright"></i> © 2024 All Rights Reserved{" "}
            <a href="#">MAYUR EDUCATION CAMPUS</a>
          </div>
        </section>
      </footer>
      {/* End Navigation Bar */}
    </div>
  );
};

export default Footer;
