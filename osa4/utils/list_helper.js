const _ = require("lodash")

const dummy = blogs => {
  return 1
}
const sum = (sum, item) => {
  return sum + item.likes
}
const totalLikes = blogs => {

  let likes = blogs.reduce(sum, 0)
  return likes
}

const favouriteBlog = blogs => {
  if (blogs.length === 0) {
    return null
  }
  let favourite = blogs[0]
  blogs.map(
    blog => (favourite = blog.likes > favourite.likes ? blog : favourite)
  )
  return favourite
}

const mostBlogs = blogs =>
  _.chain(blogs)
    .groupBy("author")
    .map((value, key) => ({ blogs: value.length, author: key }))
    .maxBy("blogs")
    .value()

const mostLikes = blogs =>
  _.chain(blogs)
    .groupBy("author")
    .map((value, key) => ({ author: key, likes: value.reduce(sum, 0) }))
    .maxBy("likes")
    .value()

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}
