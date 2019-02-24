import React from "react"
import SimpleBlog from "./SimpleBlog"
import { render, fireEvent, PrettyDOM } from "react-testing-library"
import "react-testing-library/cleanup-after-each"
import "jest-dom/extend-expect"
import "jest"

test("rendering things", () => {
  const blog = {
    title: "title!",
    author: "!!!!!!",
    likes: 10000
  }

  const component = render(<SimpleBlog blog={blog} />)
  expect(component.container).toHaveTextContent("title!")
  expect(component.container).toHaveTextContent("!!!!!!")
})

test("clicking increments likes", () => {
  const blog = {
    title: "title!",
    author: "!!!!!!",
    likes: 10000
  }
  const mock = jest.fn()

  const component = render(<SimpleBlog blog={blog} onClick={mock}/>)
  const button = component.getByText("like")
  fireEvent.click(button)
  expect(mock.mock.calls.length).toBe(1)
  /*miks ei vaa kato jos incrementaaa vaa esim täs tapaukses 10001?? */
})
