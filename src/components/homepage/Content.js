import React from "react";
import Typewriter from "typewriter-effect";
import "./Content.css";

const Content = () => {
  return (
    <div className="container">
      <div className="cover-header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Welcome To Blood Donation Management System")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Please Login To Process Your Request")
              .start();
          }}
        />
      </div>
      <h3>Universal Donors and Recipients</h3>
      <p>The most common blood type is O, followed by type A. </p>
      <p>
        Type O individuals are often called "universal donors" since their blood
        can be transfused into personswithany blood type. Those with type AB
        blood are called "universal recipients" because they can
        receivebloodofany type.
      </p>
      <p>
        However, since approximately twice as many people in the general
        population have O and A blood types, abloodbank's need for this type of
        blood increases exponentially.
      </p>
      <h3>
        DO donate blood, only if you satisfy all of the following conditions
      </h3>
      <table border="0" cellspacing="0" cellpadding="5">
        <tbody>
          <tr>
            <td valign="top">You are between age group of 18-60 years.</td>
          </tr>
          <tr>
            <td valign="top">Your weight is 45 kgs or more.</td>
          </tr>
          <tr>
            <td valign="top">Your hemoglobin is 12.5 gm% minimum.</td>
          </tr>
          <tr>
            <td valign="top">
              Your last blood donation was 3 or more months earlier.
            </td>
          </tr>
          <tr>
            <td valign="top">
              You are healthy and have not suffered from malaria, typhoid or
              other transmissibledisease in the recent past.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>DO NOT donate blood, if you have any of the following conditions</h3>
      <table cellspacing="0" cellpadding="5">
        <tbody>
          <tr>
            <td valign="top">Cold / fever in the past 1 week.</td>
          </tr>
          <tr>
            <td valign="top">
              Under treatment with antibiotics or any other medication.
            </td>
          </tr>
          <tr>
            <td valign="top">
              Cardiac problems, hypertension, epilepsy, diabetes (on insulin
              therapy), history ofcancer, chronic kidney or liver disease,
              bleeding tendencies, venereal disease etc.
            </td>
          </tr>
          <tr>
            <td valign="top">Major surgery in the last 6 months.</td>
          </tr>
          <tr>
            <td valign="top">Vaccination in the last 24 hours.</td>
          </tr>
          <tr>
            <td valign="top">
              Had a miscarriage in the last 6 months or have been pregnant /
              lactating in thelastoneyear.
            </td>
          </tr>
          <tr>
            <td valign="top">Had fainting attacks during last donation.</td>
          </tr>
          <tr>
            <td valign="top">
              Have regularly received treatment with blood products.
            </td>
          </tr>
          <tr>
            <td valign="top">
              Shared a needle to inject drugs/ have history of drug addiction.{" "}
            </td>
          </tr>
          <tr>
            <td valign="top">
              Had sexual relations with different partners or with a high risk
              individual.
            </td>
          </tr>
          <tr>
            <td valign="top">Been tested positive for antibodies to HIV.</td>
          </tr>
        </tbody>
      </table>
      <h3>Blood Bank</h3>
      <p>
        {" "}
        A blood bank is a place designed especially for the storage of blood and
        blood products. Large coolersholdthese products at a constant
        temperature and they are available at a moment's notice.
      </p>
      <h3>About Blood Donation</h3>
      <p>
        {" "}
        Donating blood is a life saving measure especially when you have a rare
        blood type. Blood donation issafeand simple. It takes only about 10
        minutes to donate blood - less than the time of an average
        telephonecall.We can save upto 3 to 4 precious lives by donating blood.
      </p>
      <h3>World Blood Donor Day</h3>
      <p>
        {" "}
        The day is celebrated to raise awareness globally about the need for
        regular and voluntary blooddonation.
      </p>
      <h2>List of Instituttions which you can use</h2>
    </div>
  );
};
export default Content;
