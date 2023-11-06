import React from 'react'
import axios from 'axios'

const LoginForm = ({username, setUsername, password, setPassword}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Username:', username)
        console.log('Password:', password)

        axios.post('http://localhost:5000/login', {username, password})
        .then((res) => {
            console.log('Response:', res.data)
        })

    }


  return (
    <div className='flex items-center justify-center mt-10'>
  <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
    <div className="col-12">
      <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
      <div className="input-group">
        <div className="input-group-text">@</div>
        <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
      </div>
    </div>
    <div className="col-12">
      <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Password</label>
      <div className="input-group">
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter password" />
      </div>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary bg-primary">Login</button>
    </div>
  </form>
</div>

  )
}

export default LoginForm
