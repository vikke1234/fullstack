import anecdoteService from "../services/anecdote_service"

const getId = () => (100000 * Math.random()).toFixed(0)

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.get_all()
    dispatch({ type: "INIT_NOTES", data: anecdotes })
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const response = await anecdoteService.vote(id)
    return dispatch({
      type: "VOTE",
      data: { ...response }
    })
  }
}

export const createAnecdote = content => {
  return {
    type: "CREATE",
    data: { content: content, id: getId(), votes: 0 }
  }
}

const reducer = (state = [], action) => {
  console.log("ACTION: ", action)

  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      state = state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
      break
    case "CREATE":
      state = state.concat(action.data)
      break

    case "INIT_NOTES":
      state = action.data
      break
    default:
      break
  }
  return state.sort((a1, a2) => {
    if (a1.votes > a2.votes) {
      return -1
    } else if (a1.votes < a2.votes) {
      return 1
    }
    return 0
  })
}

export default reducer
