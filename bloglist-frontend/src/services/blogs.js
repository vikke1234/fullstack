import axios from "axios"

const baseUrl = "/api/blogs"
let token = null

const setToken = newToken => {
  token = newToken
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  
  return request.data
}

const put = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  
  const response = await axios.put(baseUrl + "/" + blog.id, blog, config)
  return response.data
}

const post = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, blog, config)
  return response.data
}

const remove = async blog => {
  const config = {
    headers: { Authorization: token }
  }
  const url = baseUrl + "/" + blog.id
  
  const response = await axios.delete(url, config)
  return response.data
}
export default { getAll, setToken, post, put, remove }
