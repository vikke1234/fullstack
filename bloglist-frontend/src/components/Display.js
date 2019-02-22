import React from "react"

import LoginForm from "./LoginForm"
import BlogForm from "./BlogForm"
import Blog from "./Blog"

const Display = ({ blogs, setBlogs, token, setToken, setMessage }) => {
  
  const logout = e => {
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
  return (
    <div>
      <h2>blogs</h2>

      <p>{token.name} is logged in </p>
      <button onClick={e => logout(e)}>log out</button>

      <BlogForm setBlogs={setBlogs} setMessage={setMessage} />
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default Display
