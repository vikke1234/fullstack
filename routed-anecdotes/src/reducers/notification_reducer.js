export const notify = (message, seconds) => {
  set_notification(message)
  setTimeout(() => remove_notification)
}

export const set_notification = message => {
  return {
    type: "SET_NOTIFICATION",
    message
  }
}

export const remove_notification = () => {
  return {
    type: "REMOVE_NOTIFICATION"
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.message
    case "REMOVE_NOTIFICATION":
      return null
    default:
      break
  }
  return state
}
export default reducer