import React from "react";

import "../css/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="row ro1">
        <div className="col section1">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/596/029/small_2x/hand-with-blood-droplet-symbol-for-donation-blood-for-charity-concept-in-cartoon-illustration-vector.jpg"
            alt=".."
          />
        </div>
        <div className="col section2">
          <h4>You don't always have to be a doctor to SAVE someone's LIFE!</h4>
          <p>
            Donating just a pint (almost 470 ml) of blood will not make much of
            a difference in your life but that one pint can save up to three
            lives! So roll up your sleeves and contribute proactively in this
            noble cause.
          </p>
          <p>
            Blood donation is a great gesture to help the needy people or those
            who are in need of the blood. There are many health issues, which
            remain silent until it is in a late stage. We do not easily notice
            the early warning signs of health conditions such as hypertension,
            cancer, diabetes, kidney problems, and so on. If you want to become
            a donor, then it is your responsibility to take care of yourself and
            ensure that you are not spreading any disease.
          </p>
        </div>
      </div>
      <div className="section001">
        <h1>Some of camp</h1>
        <div className="row">
          <div className="col">
            <img
              src="https://www.iiitb.ac.in/includefiles/newsevents/blooddonationcamp1.jpg"
              style={{ height: "300px", width: "350px" }}
            ></img>
            <img
              src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/06/14/Pictures/blood-donation-camp-at-iehe_06c40a76-322c-11e6-a1a7-3aade94c5b51.jpg"
              style={{ height: "329px", width: "337px" }}
            ></img>
          </div>
          <div className="col">
            <img
              src="https://www.rrdch.org/rrdch/wp-content/uploads/2018/09/DSC_6784.jpg"
              style={{ width: "500px" }}
            ></img>
            <img
              src="https://assets.thehansindia.com/h-upload/2020/06/16/977276-blood-donation-camp.webp"
              style={{ height: "303px", width: "340px" }}
            ></img>
          </div>
          <div className="col">
            <img
              src="https://i0.wp.com/orissadiary.com/wp-content/uploads/2021/02/Donation-Camp.pdf.jpg?fit=556%2C345&ssl=1"
              style={{ width: "203" }}
            ></img>
            <img
              src="https://c.ndtvimg.com/2019-05/mvtvi0h_blood-donation_625x300_30_May_19.jpg"
              style={{ width: "463px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
