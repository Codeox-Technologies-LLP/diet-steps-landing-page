import React from "react";
import PersonalizedMealPlans from "../assets/icons/Group 105 -c.png";
import EasytoFollowDailyMeal from "../assets/icons/Group 9.png";
import DeliciousandDiverseRecipes from "../assets/icons/Group 104.png";
import TrackYourProgress from "../assets/icons/Group 106.png";
import CommunitySupport from "../assets/icons/Group 107.png";
import { Fade } from "react-reveal";


const About = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor:'#f3f3f3',display:'flex',justifyContent:'center'}}>
      <div className="custom-container">
      <div className="header" style={{ backgroundColor:'#f3f3f3'}}>
        <h2 className="title">Welcome To Diet Steps</h2>
        <div className="sub-title">
          <h4>Discover the Power of Personalized Nutrition!</h4>
        </div>
        <div className="main-head">
          <p className="title-paragraph">
            Every individual is unique, and so are their dietary needs. At
            Diet Steps, we believe that the key to a healthier and happier life
            starts with the food you consume. It's not about short-term diets,
            but long-term lifestyle changes.
          </p>
        </div>
      </div>

      <Fade bottom>
        <section className="container">
          <div className="feature">
            <div className="row">
              <div className="col-lg-4 col-md-6 feature-item">
                <div className="">
                  <div className="feature-img">
                    <img src={PersonalizedMealPlans} alt="icon" />
                  </div>
                  <div>
                    <h4>Personalized Meal Plans</h4>
                  </div>
                  <div className="feature-para">
                    <p className="">
                      Our algorithm considers your goals, preferences, and
                      dietary restrictions to create the perfect meal plan for
                      you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 feature-item ">
                <div className="feature-box">
                  <div className="feature-img">
                    <img src={EasytoFollowDailyMeal} alt="icon" />
                  </div>
                  <div>
                    <h4>Easy to Follow Daily Meal</h4>
                  </div>
                  <div className="feature-para">
                    <p className="">
                      No more guesswork! Get daily meal suggestions right at
                      your fingertips.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 feature-item">
                <div className="feature-box">
                  <div className="feature-img">
                    <img src={DeliciousandDiverseRecipes} alt="icon" />
                  </div>
                  <div>
                    <h4>Delicious and Diverse Recipes</h4>
                  </div>
                  <div className="feature-para">
                    <p className="">
                      From comfort foods to exotic cusines, Enjoy a wide range
                      of tasty and nutritious dishes.
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
              <div
                className="col-lg-4 col-md-6 feature-item"
                style={{ marginTop: "5%" }}
              >
                <div className="feature-box">
                  <div className="feature-img">
                    <img src={TrackYourProgress} alt="icon" />
                  </div>
                  <div>
                    <h4>Track Your Progress</h4>
                  </div>
                  <div className="feature-para">
                    <p className="">
                      Monitor your dietary habits, Nutrient intake, and Health
                      improvements all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 feature-item">
                <div className="feature-box">
                  <div className="feature-img">
                    <img src={CommunitySupport} alt="icon" />
                  </div>
                  <div>
                    <h4>Community Support</h4>
                  </div>
                  <div className="feature-para">
                    <p className="">
                      Join our supportive community of like- minded individuals
                      on their journey to better health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>


      </div>
    </div>
  );
};

export default About;
