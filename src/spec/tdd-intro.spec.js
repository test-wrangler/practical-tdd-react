describe("greet", () => {
  it("greets the user", () => {
    const greeting = greet("Jane")

    expect(greeting).toEqual("Hello Jane!")
  })
})

function greet(name) {
  return `Hello ${name}!`
}
