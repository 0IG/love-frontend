import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const naviagte = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user', user);
        naviagte('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorCode, errorMessage);
        console.log(import.meta.env.VITE_FIREBASE_API_KEY)
      })
  }

  return (
    <div className="signup">
      <h3>CREATE ACCOUNT</h3>
      <div className="signup__container">
      <form className="signup__form" onSubmit={handleSignup}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
      </form>
      </div>
    </div>
  )
}

