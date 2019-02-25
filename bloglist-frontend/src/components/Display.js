import React from "react"

import LoginForm from "./LoginForm"
import BlogForm from "./BlogForm"
import Toggleable from "./Toggleable"
import Blog from "./Blog"
import "../App.css"

const Display = ({ blogs, setBlogs, token, setToken, setMessage }) => {
  const logout = () => {
    window.localStorage.removeItem("token")
    setToken(null)
  }

  if (token === null) {
    return (
      <div>
        <h1>Log in</h1>
        <LoginForm setToken={setToken} setMessage={setMessage} />
      </div>
    )
  }
  let appendedBlogs = null
  if (blogs.length > 0) {
    appendedBlogs = blogs
      .sort((b1, b2) => {
        if (b1.likes < b2.likes) {
          return 1
        } else if (b1.likes > b2.likes) {
          return -1
        }
        return 0
      })
      .map(blog => <Blog key={blog.id} blog={blog} setBlogs={setBlogs} />)
  }

  return (
    <div>
      <h2>blogs</h2>

      <p>{token.name} is logged in </p>
      <button onClick={() => logout()}>log out</button>
      <Toggleable buttonLabel="create" undoButton={"cancel"}>
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          token={token}
          setMessage={setMessage}
        />
      </Toggleable>
      {appendedBlogs}
    </div>
  )
}

export default Display
