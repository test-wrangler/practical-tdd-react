import React from "react"
import { render, cleanup } from "@testing-library/react"
import App from "./App"

afterEach(cleanup)

it("renders without crashing", () => {
  const { container } = render(<App />)
  expect(container).not.toBeNull()
})
