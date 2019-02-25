const blogs = [
  {
    author: "author",
    id: "5c738db3af14b618f3e26a15",
    likes: 0,
    title: "title",
    user: { id: "5c6abd417821e0409467806e", name: "test123", username: "test" }
  },
  {
    author: "123",
    id: "5c738d23af14b618f3e26a14",
    likes: 2,
    title: "reee",
    url: "!!!",
    user: {
      username: "test54",
      name: "tes123t",
      id: "5c6abd417821e0409467806e"
    }
  },
  {
    author: "nice auuthor",
    id: "5c738e4daf14b618f3e26a16",
    likes: 1,
    title: "wow",
    url: "url.com",
    user: {
      username: "test54",
      name: "tes123t",
      id: "5c6abd417821e0409467806e"
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}
const setToken = () => {}
export default { getAll, setToken }
