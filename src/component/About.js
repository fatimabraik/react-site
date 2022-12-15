import React, { useState } from "react";
import img from "./images/dent 2.jpg";
import "../css/AboutStyle.css";
import imgAbout from "./images/dent 1.webp";

const About = () => {
  const [data1, setShowData1] = useState(false);
  const show1 = () => setShowData1(true);
  const cache1 = () => setShowData1(false);
  const Result1 = () => {
    return (
      <div>
        <p >Diagnosis of diseases affecting the mouth, whether in its hard
           components such as teeth and jawbones, or soft tissues such as gums and tongue,
           Periodically cleaning the teeth of patients and visitors Treating patients’ teeth by performing surgeries, extracting teeth and using the necessary medical tools Preparing fillings, installing braces, 
           dentures and bridges Treating gum disease</p>
      </div>
    );
  };
  const [data, setShowData] = useState(false);
  const show = () => setShowData(true);
  const cache = () => setShowData(false);
  const Result = () => {
    return (
      <div>
        <p>This center, consisting of four levels, is fully equipped for therapeutic and surgical health services.
           It also includes an emergency department, Al-Nahar Hospital, medical examination units for children and adults,
            units for oral and dental surgery and for specialized examination, a laboratory for the manufacture of dentures,
             in addition to a library and rooms for training and awareness courses. And all the necessary examinations, whether before or accompanying the treatment,
              are carried out on the spot, thanks to a radiological examination unit that has advanced equipment. Some devices have been adapted to suit people with special needs, as well as children.</p>
      </div>
    );
  };

  return (
    <>
      <div className="mainContainer">
        <div className="aboutContainer">
          <img src={img} alt=""></img>
          <div className="aboutText">
            <h2>about us</h2>
            <p>
              DR LUX, Graduated from the Heigher institue of DENSTISTRY in RABAT
              SPECIALIZING IN {" "}
            </p>
            {data1 ? <Result1 /> : null}
            {!data1 ? (
              <button className="btnContainer" onClick={show1}>
                READ MORE
              </button>
            ) : (
              <button className="btnContainer" onClick={cache1}>
                {" "}
                READ LESS
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mainAbout">
        <div className="mainText">
          <div className="pText">
            <p>
              our dental office, is a medical space reserved for oral health but
              also for the improvement or restoration of the smile,
            </p>
            {data ? <Result /> : null}
            {!data ? (
              <button className="btnContainer" onClick={show}>
                READ MORE
              </button>
            ) : (
              <button className="btnContainer" onClick={cache}>
                READ LESS
              </button>
            )}
          </div>
          <div className="mainImg">
            <img src={imgAbout}></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
