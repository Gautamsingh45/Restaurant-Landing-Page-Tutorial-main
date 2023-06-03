import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/4322025.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          BLOCKCEPT.AI
        </h1>
        <p className="primary-text">
        Blockcept Technology Private Limited is an unlisted private company incorporated on 10 November, 2022. It is classified as a private limited company and is located in ,
        
         Madhya Pradesh. It's authorized share capital is INR 1.00 lac and the total paid-up capital is INR 1.00 lac.
The current status of Blockcept Technology Private Limited is - Active.

Details of the last annual general meeting of Blockcept Technology Private Limited are not available. The company is yet to submit its first full-year financial statements to the registrar.
        </p>
        <p className="primary-text">
        Blockcept Technology Private Limited has two directors -Shubham Kadam and Rekha Gupta .

The Corporate Identification Number (CIN) of Blockcept Technology Private Limited is U72900MP2022PTC063341. The registered office of Blockcept Technology Private Limited is at C/O SHRI JAWAHARLAL GUPTA NEAR NEW JAISTAMBH,NARMADAPURAM BHOPAL Bhopal , Madhya Pradesh.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
