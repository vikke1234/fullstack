import React, { useState, useEffect } from "react"
import Blog from "./components/Blog"
import blogService from "./services/blogs"
import LoginForm from "./components/LoginForm"

const Display = ({ blogs, token, setToken }) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const logout = e => {
    window.localStorage.removeItem("token")
    setToken(null)
  }

  const createBlog = async e => {
    e.preventDefault()
    try {
      await blogService.post({ title, author, url })
    } catch (exception) {
      console.log(exception)
    }
  }

  if (token === null) {
    return (
      <div>
        <h1>Log in</h1>
        <LoginForm setToken={setToken} />
      </div>
    )
  }
  return (
    <div>
      <h2>blogs</h2>

      <p>{token.name} is logged in </p>
      <button onClick={e => logout(e)}>log out</button>

      <div>
        <form onSubmit={createBlog}>
          <h2>Create new</h2>
          <div>
            <label>title: </label>
            <input onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label>author: </label>
            <input onChange={e => setAuthor(e.target.value)} />
          </div>
          <div>
            <label>url: </label>
            <input onChange={e => setUrl(e.target.value)} />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [token, setToken] = useState(null)
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
  })
  return (
    <div>
      <Display blogs={blogs} token={token} setToken={setToken} />
    </div>
  )
}

export default App
