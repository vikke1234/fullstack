import axios from "axios"

const base_url = "http://localhost:3001/anecdotes"

const get_all = async () => {
  const response = await axios.get(base_url)
  return response.data
}

const get = async id => {
  const response = await axios.get(`${base_url}/${id}`)
  return response.data
}

const create_new = async anecdote => {
  const response = await axios.post(base_url, { content: anecdote, votes: 0 })
  return response.data
}

const vote = async (id) => {
  const anecdote = await get(id)
  const response = await axios.put(`${base_url}/${id}`, {content: anecdote.content, votes: anecdote.votes + 1})  
  return response.data
}

export default {
  get_all,
  create_new,
  vote
}
