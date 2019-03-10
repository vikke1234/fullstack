const initial = [
  {
    content: "If it hurts, do it more often",
    author: "Jez Humble",
    info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
    votes: 0,
    id: "1"
  },
  {
    content: "Premature optimization is the root of all evil",
    author: "Donald Knuth",
    info: "http://wiki.c2.com/?PrematureOptimization",
    votes: 0,
    id: "2"
  }
]

const getId = () => (Math.random() * 10000).toFixed(0)
export const create_anecdote = content => {
  return dispatch => {
    dispatch({
      type: "NEW_ANECDOTE",
      data: { ...content, id: getId()}
    })
  }
}

export const initialize_anecdotes = () => {
  return {
    type: "INIT_ANECDOTES",
    data: initial
  }
}

const reducer = (state = initial, action) => {
  console.log("ACTION: ", action)

  switch (action.type) {
    case "NEW_ANECDOTE":
      state = state.concat(action.data)
      break
    case "INIT_ANECDOTES":
      return state
    default:
      break
  }
  return state
}

export default reducer
