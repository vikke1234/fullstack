import React, { useState } from "react"
import blogService from "../services/blogs"

const like = async (blog, setLikes) => {
  blog.likes += 1
  setLikes(blog.likes)
  await blogService.put(blog)
}
const remove = async (blog, setBlogs) => {
  blogService.remove(blog)
  const newblogs = await blogService.getAll()

  setBlogs(newblogs)
}

const Inextensive = ({ blog }) => {
  return (
    <div className="inextensive">
      {" "}
      {blog.title} {blog.author}{" "}
    </div>
  )
}

const Extensive = ({ blog, setBlogs, likes, setLikes, like, remove }) => (
  <div className="extensive">
    <div>{blog.title}</div>
    <div>{blog.author}</div>
    <div>
      <a href={blog.url}>{blog.url}</a>
    </div>
    <div>added by {blog.user.name}</div>
    <div>
      {likes} likes <button onClick={() => like(blog, setLikes)}>like</button>
    </div>
    <div>
      <button onClick={() => remove(blog, setBlogs)}>remove</button>
    </div>
  </div>
)

const Blog = ({ blog, setBlogs }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    maxWidth: 600
  }
  const [extensive, setExtensive] = useState(false)
  const [likes, setLikes] = useState(blog.likes)
  console.log(blog);
  
  return (
    <div style={blogStyle} onClick={() => setExtensive(!extensive)}>
      {!extensive ? (
        <Inextensive blog={blog} />
      ) : (
        <Extensive
          blog={blog}
          setBlogs={setBlogs}
          setLikes={setLikes}
          likes={likes}
          like={like}
          remove={remove}
        />
      )}
    </div>
  )
}

export default Blog
