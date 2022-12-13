import React from 'react'

function LoginForm() {
  const handleSubmit = event => {
    event.preventDefault()
    const { username, password } = event.target.elements

    // perform login logic here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm