import React from "react"
import { render, waitForElement } from "react-testing-library"
import "jest"
import "jest-dom/extend-expect"
jest.mock("./services/blogs")
import App from "./App"

describe("<App />", () => {
  it("if no user logged, notes are not rendered", async () => {
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(() => component.getByText("log in"))
    expect(component.getByText("log in")).toBeDefined()
  })

  it("if logged in, render blogs", async () => {
    const user = {
      username: "accounttest",
      token: "sikrit",
      name: "Teuvo Testaaja"
    }
    localStorage.setItem("token", JSON.stringify(user))
    /* jää tähä ikuisesti */
    const component = render(<App/>)
    await waitForElement(() => component)
    expect(component.container).toHaveTextContent("wow nice auuthor")
  })
})
