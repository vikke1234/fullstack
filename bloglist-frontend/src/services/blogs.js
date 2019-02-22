import axios from "axios"

const baseUrl = "/api/blogs"
let token = null

const setToken = newToken => {
  token = newToken
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const post = blog => {
  const config = {
    headers: { Authorization: token }
  }
  console.log(config)
  console.log(blog)
  const response = axios.post(baseUrl, blog, config)
  return response.data
}
export default { getAll, setToken, post }
