import React from "react"
import loginService from "../services/loginService"
import { useField } from "../hooks"

const LoginForm = props => {
  const username = useField("text")
  const password = useField("password")

  const handleLogin = async e => {
    e.preventDefault()

    try {
      loginService.login(username.value, password.value).then(token => {
        props.setToken(token)
        window.localStorage.setItem("token", JSON.stringify(token))
      })
      username.reset()
      password.reset()
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
          {...username.spread()}
          name={"Username"}
        />
      </div>

      <div>
        <label>password:</label>
        <input {...password.spread()} />
      </div>

      <div>
        <button type="submit">log in</button>
      </div>
    </form>
  )
  return form
}

export default LoginForm
