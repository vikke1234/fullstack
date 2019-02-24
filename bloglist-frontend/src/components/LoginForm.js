import React, { useState } from "react"
import loginService from "../services/loginService"

const LoginForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async e => {
    e.preventDefault()

    try {
      const token = await loginService.login(username, password)
      props.setToken(token)
      window.localStorage.setItem("token", JSON.stringify(token))
      setUsername("")
      setPassword("")
    } catch (exception) {
      props.setMessage("error logging in, invalid username or password")
      setTimeout(() => props.setMessage(null), 1500)
      console.log(exception)
    }
  }

  const form = (
    <form onSubmit={handleLogin}>
      <div>
        <label>username:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type="text"
          name="Username"
        />
      </div>

      <div>
        <label>password:</label>
        <input onChange={e => setPassword(e.target.value)} type="password" />
      </div>

      <div>
        <button type="submit">log in</button>
      </div>
    </form>
  )
  return form
}

export default LoginForm
