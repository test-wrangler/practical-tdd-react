describe("greet", () => {
  it("greets the user", () => {
    const greeting = greet("Don")

    expect(greeting).toEqual("Hello Don!")
  })
})

function greet(name) {
  return `Hello ${name}!`
}
