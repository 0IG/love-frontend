import React, { useEffect, useState } from "react";
import UserDetails from "../userDetails/UserDetails";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import "./Signout.scss";

const Signout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`sign out succcessful`);
      })
      .catch((error) => {
        console.log(`sign out failed: ${error}`);
      });
  };
  return (
    <div className="signout">
      {user ? (
        <>
          <p className="signout__tag">{`Signed In as ${user.email}`}</p>
          <button onClick={userSignOut} className="signout__btn">
            Sign Out
          </button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
      <UserDetails className="signout__userDetails" />
    </div>
  );
};

export default Signout;
