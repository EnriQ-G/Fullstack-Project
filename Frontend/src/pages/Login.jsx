import { useState, useEffect } from "react"
import {FaSignInAlt} from "react-icons/fa"

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  const onChange = (e) => (
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  )

  const { username, email, password, password2 } = formData

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h4>
         <FaSignInAlt/> Login
        </h4>
        <p>Por favor ingresa tu información</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="username"
              name="username"
              value={username}
              placeholder="Nombre de usuario"
              onChange={onChange}
            />
          </div>       
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Contraseña"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </section>
    </>
  )
}


export default Login
