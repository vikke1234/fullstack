import React, { useState } from "react"
import loginService from "../services/loginService"
import blogService from "../services/blogs"

const LoginForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const token = await loginService.login(username, password)
      props.setToken(token)
      blogService.setToken(token)
      window.localStorage.setItem("token", JSON.stringify(token))
    } catch(exception) {
      console.log(exception)
    }
  }

  const form = (
    <form onSubmit={handleLogin}>
      <div>
        <label>username:</label>
        <input 
        onChange={e => setUsername(e.target.value)}
        type = "text"
        name="Username"
        />
      </div>

      <div>
        <label>password:</label>
        <input 
        onChange={e => setPassword(e.target.value)}
        type = "password" 
        />

      </div>

      <div>
        <button type = "submit">
          log in
        </button>
      </div>
    </form>
  )
  return form
}

export default LoginForm
