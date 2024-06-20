import React from "react";
import "./UserDetails.scss";

export default function UserDetails() {
  return (
    <div className="userDetails">
      <form className="userDetails__form">
        <p className="userDetails__title">User Details</p>
        <div className="userDetails__editSubHeading">
          Edit your preferences below.
        </div>
        <div className="userDetails__accInfoSubheading">
          Account Information
        </div>
        <div className="userDetails__field">
          First Name <input className="userDetails__input" type="text" />
        </div>
        <div className="userDetails__field">
          Last Name <input className="userDetails__input" type="text" />
        </div>
        <div className="userDetails__field">
          Email address <input className="userDetails__input" type="text" />
        </div>
        <div className="userDetails__field">
          Old Password <input className="userDetails__input" type="text" />
        </div>
        <div className="userDetails__field">
          New Password <input className="userDetails__input" type="text" />
        </div>
      </form>
    </div>
  );
}
