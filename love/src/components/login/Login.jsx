// Imports
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Styles
import './Login.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('user', user)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('error', errorCode, errorMessage)
      })
  }
  return (
    <div className="login">
      <h1 className='login__title'>Login</h1>
      <form className='login__form' onSubmit={handleLogin}>
        <input className='login__input' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='login__input' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='login__button' type='submit'>Login</button>
      </form>
    </div>
  )
}
