import React from "react";

// import mobile from "../assets/mobile image.png";
import android from "../assets/app-badge/PLAY STORE.png";
import apple from "../assets/app-badge/app-store.png";
import banner from "../assets/bgdownload.jpg";
import Fade from "react-reveal/Fade";
import "../App.css";

const Download = () => {
  return (
    <>
        <Fade bottom>
        <div className="download-img">
          <div
            className="container-fluid dowmload-image"
            style={{ padding: "0" }}
          >
            <img className="banner-img" src={banner} alt="" />
            <div className="centered-text">
              <h2 className="">Download Now</h2>
              <div className="download-paragraph">
                <p className="title-paragraph">
                  No matter your goal—whether it's weight loss, muscle gain, or
                  simply leading a healthier lifestyle—Diet steps is your partner
                  in achieving it. Join us today and experience the
                  transformation!
                </p>
              </div>
              <div className="app-badge">
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.codeox.dietst"
                    target="_blank" rel="noreferrer"
                  >
                    <img src={android} alt="android" />
                  </a>
                </div>

                <div>
                <a
                    href="https://apps.apple.com/in/app/dietsteps/id6642712698"
                    target="_blank" rel="noreferrer"
                  >
                  <img src={apple} alt="apple" />
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="banner-mobile"  style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      width: '100%',
      height: '550px', 
    }}      >
           <div className="content-download">
            <h2 className="download-head">Download Now</h2>
          <div className="download-paragraph">
            <p className="title-paragraph">
              No matter your goal—whether it's weight loss, muscle gain, or
              simply leading a healthier lifestyle—Nutricc is your partner in
              achieving it. Join us today and experience the transformation!
            </p>
          </div>
          <div className="app-badge">
          <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.codeox.dietst"
                    target="_blank" rel="noreferrer"
                  >
                    <img src={android} alt="android" />
                  </a>
                </div>

            <div>
            <a
                    href="https://apps.apple.com/in/app/dietsteps/id6642712698"
                    target="_blank" rel="noreferrer"
                  >
                  <img src={apple} alt="apple" />
                  </a>
                  </div>
            </div>
          </div>
        </div>
      </Fade>  
    </>
  );
};

export default Download;
