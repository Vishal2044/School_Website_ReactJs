// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Home from "../HomePage";
import About from "../AboutPage";
import KumarChatralay from "../Kumarchatra";
import Gmdc from "../GmdcSchool";
import Ba from "../Ba";
import Bsc from "../Bsc";
import Contact from "../Contact";
import AsharamShala from "../Ashramshala";
import GirlsHostel from "../Girlshostel";
import AsharamShalaSchool from "../AshramshalaSchool";
import ScienceSchool from "../ScienceShool";
import StudentResults from "../StudentResult";
import Gallery from "../Gallery";
import AdmissionEnquiry from "../AdmisonEnq";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {


  return (
    <div>      
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="KumarChatralay">
          <KumarChatralay />
        </section>

        <section id="Gmdc">
          <Gmdc />
        </section>

        <section id="Ba">
          <Ba />
        </section>

        <section id="Bsc">
          <Bsc />
        </section>

        <section id="AsharamShala">
          <AsharamShala />
        </section>

        <section id="AsharamShalaSchool">
          <AsharamShalaSchool />
        </section>

        <section id="GirlsHostel">
          <GirlsHostel />
        </section>

        <section id="ScienceSchool">
          <ScienceSchool />
        </section>

        <section id="StudentResults">
          <StudentResults />
        </section>

        <section id="Gallery">
          <Gallery />
        </section>

        <section id="AdmissionEnquiry">
          <AdmissionEnquiry />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
