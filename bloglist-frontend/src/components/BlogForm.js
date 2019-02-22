import React, { useState, useEffect } from "react"
import blogService from "../services/blogs"

const Input = ({ label, setter }) => (
  <div>
    <label> {label} </label>
    <input onChange={e => setter(e.target.value)} />
  </div>
)

const BlogForm = ({ blogs, setBlogs, setMessage }) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const createBlog = async e => {
    e.preventDefault()
    try {
      const returnedblog = await blogService.post({ title, author, url })
      /* jostai syyst ni ei updatee heti listaa, pakko refreshaa */
      console.log(returnedblog);
      
      setBlogs(blogs.concat(returnedblog))
      setMessage(`a new blog ${title} has been added`)
      setTimeout(() => setMessage(null), 2000)
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <form onSubmit={createBlog}>
        <h2>Create new</h2>

        <Input label={"title"} setter={setTitle} />
        <Input label={"author"} setter={setAuthor} />
        <Input label={"url"} setter={setUrl} />

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default BlogForm
