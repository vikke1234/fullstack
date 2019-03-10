export const setNotification = (message, seconds) => {
  /* TODO 6.21 */
  return dispatch => {
    return dispatch({
      type: "SET_NOTIFICATION",
      message
    })
  }
}

export const removeNotification = (seconds) => {
  return dispatch => {
    return dispatch({
      type: "REMOVE_NOTIFICATION"
    })
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
