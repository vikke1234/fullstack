import React, { useState } from "react"
import blogService from "../services/blogs"

const Blog = ({ blog, setBlogs }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    maxWidth: 600
  }
  const [appended, setAppended] = useState(blog.title + " " + blog.author)
  const [extensive, setExtensive] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const like = () => {
    blog.likes += 1
    setLikes(blog.likes)
    blogService.put(blog)
  }
  const remove = () => {
    blogService.remove(blog)
    setBlogs(blogService.getAll())
  }
  const onClick = () => {
    if (!extensive) {
      setExtensive(true)
      setAppended(
        <div>
          <div>{blog.title}</div>
          <div>{blog.author}</div>
          <div>
            <a href={blog.url}>{blog.href}</a>
          </div>
          <div>added by {blog.user.name}</div>
          <div>
            {likes} likes <button onClick={like}>like</button>
          </div>
          <div>
            <button onClick={remove}>remove</button>
          </div>
        </div>
      )
    } else {
      setExtensive(false)
      setAppended(
        <div>
          {blog.title} {blog.author}
        </div>
      )
    }
  }
  return (
    <div style={blogStyle} onClick={() => onClick()}>
      {appended}
    </div>
  )
}

export default Blog
