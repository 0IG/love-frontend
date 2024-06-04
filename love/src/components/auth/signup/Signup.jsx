import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import "./Signup.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        naviagte("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
        console.log(import.meta.env.VITE_FIREBASE_API_KEY);
      });
  };

  return (
    <div className="signup">
      <h3 className="signup__title">CREATE ACCOUNT</h3>
      <form className="signup__form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          className="signup__inputEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="signup__inputEmail"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup__buttonSignup">
          CREATE
        </button>
      </form>
    </div>
  );
}
