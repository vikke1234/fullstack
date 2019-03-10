export const setMessage = message => {
  /* TODO 6.21 */
  return {
    type: "SET_NOTIFICATION",
    message
  }
}

export const removeMessage = () => {
  return {
    type: "REMOVE_NOTIFICATION"
  }
}

const notificationReducer = (state = null, action) => {
  console.log("ACTION: ", action);
  
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.message
    case "REMOVE_NOTIFICATION":
      return null
    default:
      return state
  }
}

export default notificationReducer
