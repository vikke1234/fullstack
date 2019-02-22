import axios from "axios"

const baseurl = "/api/login"

const login = async (username, password) => {
  const token = await axios.post(baseurl, { username, password })  
  return token.data
}
/* TODO */
const logout = async () => {}

export default {
  login,
  logout
}
