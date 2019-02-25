import React from "react"
import blogService from "../services/blogs"
import { useField } from "../hooks"

const Input = ({ label, setter }) => (
  <div>
    <label> {label} </label>
    <input onChange={setter.onChange} type={setter.type} />
  </div>
)

const BlogForm = ({ blogs, setBlogs, token, setMessage }) => {
  const title = useField("text")
  const author = useField("text")
  const url = useField("text")

  const createBlog = async e => {
    e.preventDefault()
    try {
      const blog = {
        title: title.value,
        author: author.value,
        url: url.value,
        user: { username: token.username, name: token.name }
      }
      console.log(blog)

      const returnedblog = await blogService.post(blog)
      /* jostai syyst ni ei updatee heti listaa, pakko refreshaa */
      title.reset()
      author.reset()
      url.reset()
      setBlogs(blogs.concat(returnedblog))
      setMessage(`a new blog ${title.value} has been added`)
      setTimeout(() => setMessage(null), 2000)
    } catch (exception) {
      console.log(exception)
    }
  }
  return (
    <div>
      <form onSubmit={createBlog}>
        <h2>Create new</h2>

        <Input label={"title"} setter={title} />
        <Input label={"author"} setter={author} />
        <Input label={"url"} setter={url} />

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default BlogForm
