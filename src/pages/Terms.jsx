import React from "react";

import "../App.css";

import mobile from "../assets/dietcup.png";
import img from "../assets/dietcup.png";
import Navbar from "../compoments/navbar/Navbar";
import Footer from "../compoments/footer/Footer";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div>
        <Navbar />
      </div>
      <div
        className="container-fluid desktop-heroimg"
        style={{
          padding: "0",
          position: "relative",
          backgroundColor: "#f3f3f3",
        }}
      >
        <div style={{ position: "relative" }}>
          <img className="termshero-img" src={img} alt="Terms Hero" />
          <h1 className="heading1"> Terms & Conditions </h1>
        </div>
      </div>
      <div className=" mobile-heroimg">
        <div className="">
          <img className="hero-img" src={mobile} alt="" />

          <div></div>
        </div>
      </div>

      <div
        className="container-fluid about"
        style={{
          marginTop: "6%",
          marginBottom: "6%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f3f3f3",
        }}
      >
        <div className=" custom-container ">
          <h1 className="title">Terms & Conditions</h1>

          <ul>
            <li>
              <h4>Article One : </h4>
            </li>
          </ul>

          <ul>
            <li>
              The first party (the company) provides the scheduled meals
              according to the package chosen by the second party (the
              subscriber), and they are delivered once a day according to the
              days scheduled for each package. The Subscriber acknowledges that
              he authorizes the Company to select the items. The parties
              acknowledge that the rates for each package are in Kuwaiti Dinars,
              paid in full, digitally, before the beginning of the subscription.
            </li>
          </ul>

          <ul>
            <li>
              <h4>Article II - Contract : </h4>
            </li>
          </ul>

          <ul>
            <li>
              The Subscriber's payment of the subscription amount shall be
              deemed as acceptance of these terms and conditions, and its terms
              shall be effective and binding from the moment of completion of
              payment. The Company reserves the right to change the terms and
              conditions at any time, without the need to notify or obtain the
              consent of the subscriber.
            </li>
          </ul>

          <ul>
            <li>
              <h4>Article III - Balance : </h4>
            </li>
          </ul>

          <ul>
            <li>
              Delivery made the next day is calculated from the balance and
              cannot be reversed.
            </li>
          </ul>
          <ul>
            <li>
              Delivery made the next day is calculated from the balance and
              cannot be reversed.
            </li>
          </ul>
          <ul>
            <li>
              The maximum period for postponing the beginning of the
              subscription is one month and is calculated as a subscription
              freeze.
            </li>
          </ul>

          <ul>
            <li>
              <h4>Article IV - Cancellation : </h4>
            </li>
          </ul>

          <ul>
            <li>
              The first party (the company) grants the second party (the
              subscriber) the right to cancel his subscription within the first
              three days from the beginning of the subscription, with a refund
              of the subscription amount after deducting the value of the meals
              that were delivered or are supposed to be delivered the next day
              after the cancellation request, in addition to deducting a fixed
              cancellation fee at a rate of 5% of the subscription value, and an
              amount of 1 dinar as a transfer commission.
            </li>
          </ul>

          <ul>
            <li>
              The fixed cancellation fee and transfer commission will be waived
              only if the cancellation request is made before the start of the
              subscription, i.e. if the first meal is delivered more than 24
              hours after the time of the cancellation request.
            </li>
          </ul>

          <ul>
            <li>
              The subscriber is not entitled to receive any amount if the
              cancellation is requested after 3 days have passed since the
              beginning of the subscription.
            </li>
          </ul>

          <ul>
            <li>
              <h4>Article V - Change of Subscription Type : </h4>
            </li>
          </ul>

          <ul>
            <li>
              The company grants the subscriber the right to request to change
              the type of subscription, its duration and the number of meals,
              with the return of the difference in financial value from the
              first party to the second or vice versa, only within the first 3
              days from the beginning of the subscription.
            </li>
          </ul>
          <ul>
            <li>
              After this period, the subscription type can be changed only in
              the following cases, without any refund to the subscriber:
            </li>
          </ul>

          <ul>
            <li>
              From subscription packages or vice versa (in the event of
              switching from weight reduction to muscle building, the company
              has the right to request payment of the difference in financial
              value).
            </li>
          </ul>

          <ul>
            <li>
              It is possible to request to reduce the number of items, but the
              subscriber is not entitled to claim a refund of the financial
              value of the canceled dishes if the request is made after 3 days
              from the beginning of the subscription.
            </li>
          </ul>

          <ul>
            <li>
              It is not required that the required changes be implemented
              immediately , and the first party (the company) has the right to
              take the required period to implement the change, which is usually
              at least 72 hours, and sometimes it may be another period.
            </li>
          </ul>

          <ul>
            <li>
              <h4>Article VI - Health considerations : </h4>
            </li>
          </ul>

          <ul>
            <li>
              The Company is not responsible for any health complications,
              allergies or unpleasant symptoms that may result from eating
              meals, in any circumstances, and the Subscriber is not entitled to
              claim the Company to refund the remaining amount of the
              subscription (if it has exceeded 3 days from the beginning of the
              subscription), or to claim any form with compensation.
            </li>
          </ul>

          <ul>
            <li>
              Whether the request is due to allergies, health condition, taste
              aversion or any other reason.
            </li>
          </ul>

          <ul>
            <li>
              The meals provided by the company are not considered medical
              treatment, and special treatment regimens are not designed.In case
              of health problems, the subscriber is responsible for ensuring
              that the systems and components are suitable for his health
              condition before subscribing.
            </li>
          </ul>

          <ul>
            <li>
              The food consultation service, subscription instructions and
              regulations are voluntary services by the company, and the company
              is not obligated to provide it as a compulsory service within the
              subscription.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Terms;
