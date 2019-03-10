import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import anecdote_reducer from "./reducers/anecdote_reducer"
import notification_reducer from "./reducers/notification_reducer"


const reducer = combineReducers({
  anecdotes: anecdote_reducer,
  notification: notification_reducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
