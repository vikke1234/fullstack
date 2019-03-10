import React from "react"
import { connect } from "react-redux"

const Notification = props => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  }
  const message = props.message
  console.log(message)

  if (message === null) {
    return null
  }
  return <div style={style}>{message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Notification)
