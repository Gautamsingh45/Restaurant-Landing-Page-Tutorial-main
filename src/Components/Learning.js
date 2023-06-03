import React from "react";
import PickMeals from "../Assets/christina-wocintechchat-com-ivF9IZSDML0-unsplash.jpg";
import ChooseMeals from "../Assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import DeliveryMeals from "../Assets/jorge-ramirez-anT-7GmycsY-unsplash.jpg";

const Learning = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Full Stack Developer",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Data Science",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "internet of thing (IOT)",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Industrial Training</p>
        <h1 className="primary-heading">Industrial Training</h1>
        <p className="primary-text">
        Industrial training institutes (ITI) and industrial training centers 
        (ITC) are post-secondary schools in India constituted under the Directorate General of Training (DGT), 
        Ministry of Skill Development and Entrepreneurship, Union Government, to provide training in various trades.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
