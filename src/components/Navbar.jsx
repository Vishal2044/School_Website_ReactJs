import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import Contact from "../Contact";
import AsharamShala from "../Ashramshala";
import GirlsHostel from "../Girlshostel";
import AsharamShalaSchool from "../AshramshalaSchool";
import ScienceSchool from "../ScienceShool";
import StudentResults from "../StudentResult";
import Gallery from "../Gallery";
import AdmissionEnquiry from "../AdmisonEnq";
import KumarChatralay from "../Kumarchatra";
import Gmdc from "../GmdcSchool";
import Ba from "../Ba";
import Bsc from "../Bsc";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="body">
          <nav className="navbar">
            <div className="logo">
              <Link to="/">MAYUR EDUCATION CAMPUS</Link>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">
                  <h4>Home</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutPage">
                  <h4>About</h4>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="dropdown-toggle">
                  <h4>Our Hostel</h4>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/KumarChatralay">
                      <h4>Kumar Chatralay</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/AsharamShala">
                      <h4>Asharam Shala</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/GirlsHostel">
                      <h4>Girls Hostel</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle">
                  <h4>Our School</h4>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/AsharamShalaSchool">
                      <h4>Ashram Shala</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/Gmdc">
                      <h4>GMDC</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/ScienceSchool">
                      <h4>Science School</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle">
                  <h4>Our College</h4>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/Ba">
                      <h4>Bachelor of Arts</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/Bsc">
                      <h4>Bachelor of Science</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle">
                  <h4>Achievements</h4>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/StudentResults">
                      <h4>Student Results</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/Gallery">
                      <h4>Gallery</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle">
                  <h4>Contact Us</h4>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/AdmissionEnquiry">
                      <h4>Admission Enquiry</h4>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/Contact">
                      <h4>Contact</h4>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/KumarChatralay" element={<KumarChatralay />} />
            <Route
              path="/AsharamShalaSchool"
              element={<AsharamShalaSchool />}
            />
            <Route path="/Gmdc" element={<Gmdc />} />
            <Route path="/GirlsHostel" element={<GirlsHostel />} />
            <Route path="/Ba" element={<Ba />} />
            <Route path="/AsharamShala" element={<AsharamShala />} />
            <Route path="/ScienceSchool" element={<ScienceSchool />} />
            <Route path="/Bsc" element={<Bsc />} />
            <Route path="/StudentResults" element={<StudentResults />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/AdmissionEnquiry" element={<AdmissionEnquiry />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Navbar;
