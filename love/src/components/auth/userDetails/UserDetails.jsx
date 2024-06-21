import React, { useContext, useState } from "react";
import "./UserDetails.scss";
import { UserContext } from "../../context/userContext/UserContext";

export default function UserDetails() {
  const [userInput, setUserInput] = useState("");
  const { user } = useContext(UserContext);

  return (
    <div className="userDetails">
      <form className="userDetails__form">
        <p className="userDetails__title">User Details</p>
        <h3 className="userDetails__editSubHeading">
          Edit your preferences below.
        </h3>
        <label className="userDetails__accInfoSubheading">
          Account Information
        </label>
        <label className="userDetails__field">
          First Name <input className="userDetails__input" type="text" />
        </label>
        <label className="userDetails__field">
          Last Name <input className="userDetails__input" type="text" />
        </label>
        <label className="userDetails__field">
          Email address
          <input
            className="userDetails__input"
            type="text"
            placeholder={user.email}
          />
        </label>
        <label className="userDetails__field">
          Old Password <input className="userDetails__input" type="text" />
        </label>
        <label className="userDetails__field">
          New Password <input className="userDetails__input" type="text" />
        </label>
      </form>
    </div>
  );
}
