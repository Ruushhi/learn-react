import React, { useState } from 'react'
import LoginForm from './components/LoginForm'

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} />

      <p>Username : {username} </p>
      <p>Password : {password} </p>
    </div>
  )
}

export default App
