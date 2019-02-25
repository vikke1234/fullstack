import React, { useState, useEffect } from "react"
import blogService from "./services/blogs"
import Display from "./components/Display"
import "./App.css"

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  let type = "success"
  if (message.includes("error")) {
    type = "error"
  }
  return <div className={type}>{message}</div>
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [token, setToken] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])
  
  useEffect(() => {
    const userJSON = window.localStorage.getItem("token")

    if (userJSON) {
      const user = JSON.parse(userJSON)
      setToken(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <Notification message={message} />

      <Display
        blogs={blogs}
        setBlogs={setBlogs}
        token={token}
        setToken={setToken}
        setMessage={setMessage}
      />
    </div>
  )
}

export default App
