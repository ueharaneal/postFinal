import React from 'react'
import RegisterForm from './customUi/RegisterForm.jsx'

function Register({onRegisterChange}) {
  return (
    <div>
        <RegisterForm onRegisterChange={onRegisterChange}/>
    </div>
  )
}

export default Register
