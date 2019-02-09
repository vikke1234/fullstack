import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const post = (new_person) => {
  const request = axios.post(baseurl, new_person)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseurl)
  return request.then(response => response.data)
}

const remove = (id) => {
  const response = axios.delete(`${baseurl}/${id}`)
  return response
}

const put = (person, id) => {
  const response = axios.put(`${baseurl}/${id}`, person)
  return response
}

export default {getAll, post, remove, put}