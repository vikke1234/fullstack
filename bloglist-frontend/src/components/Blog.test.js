import React from "react"
import Blog from "./Blog"
import { render, fireEvent } from "react-testing-library"
import "react-testing-library/cleanup-after-each"
import "jest"
import "jest-dom/extend-expect"

const blog = {
  title: "test title!",
  author: "test author!",
  url: "www.extraextensivetesting.com",
  user: {
    name: "test account"
  },
  likes: 0
}

test("starting with inextensive", () => {
  const component = render(<Blog blog={blog} />)
  expect(component.container).toHaveTextContent(blog.title)
  expect(component.container).toHaveTextContent(blog.author)
})

test("has extensive", () => {
  const component = render(<Blog blog={blog} />)
  const div = component.getByText(blog.title + " " + blog.author)
  fireEvent.click(div)

  expect(component.container).toHaveTextContent("added by")
})
