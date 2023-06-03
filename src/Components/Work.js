import React from "react";
import PickMeals from "../Assets/web-app-development.png";
import ChooseMeals from "../Assets/web-hosting-with-with-users-developers-using-webhost-servers-data-storage-database-remote-access-fla.png";
import DeliveryMeals from "../Assets/imagesonsite.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Application Development",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Web Hosting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Onsite Support",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">Services</h1>
        <p className="primary-text">
        A service-based company is the one that provides customers, clients the ultimate solution to their requirements or a service to another company. The service offered by the company is intangible and can be provided in the form of skills, amenities, and expertise
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

export default Work;
