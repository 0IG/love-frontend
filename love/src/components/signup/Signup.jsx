import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { useState } from "react";
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      console.log(import.meta.env.VITE_FIREBASE_API_KEY);
      console.log('hi')
    });
  return (
    <div className="signup">
      <h3>CREATE ACCOUNT</h3>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    </div>
  )
}

