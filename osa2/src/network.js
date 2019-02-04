import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const create = (new_person) => {
  const request = axios.post(baseurl, new_person)
  return request.then(response => response.data)
}

export default create