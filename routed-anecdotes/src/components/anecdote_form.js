import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  set_notification,
  remove_notification
} from "../reducers/notification_reducer"
import { create_anecdote } from "../reducers/anecdote_reducer"

const CreateNewNoHistory = props => {
  console.log(props);
  
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [info, setInfo] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    props.create_anecdote({
      content,
      author,
      info,
      votes: 0
    })
    props.set_notification("a new anecdote has been added: " + content)
    props.history.push("/")
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            name="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}
const map_dispatch_to_props = {
  set_notification,
  remove_notification,
  create_anecdote
}
const CreateNew = withRouter(CreateNewNoHistory)

export default connect(
  null,
  map_dispatch_to_props
)(CreateNew)
