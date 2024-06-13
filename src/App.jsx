import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form'

function App() {
  const [count, setCount] = useState(0)
const change =()=> setCount (1)

const [email, setAddress] = useState (0)
const name =(e)=> setAddress(e.target.value)


const [full,setName] = useState(0)
const fullName =(e)=> setName(e.target.value)

const [pass,setWord] = useState(0)
const password =(e)=> setWord(e.target.value)


const [phone,setNumber] = useState(0)
const phoneNumber =(e)=> setNumber(e.target.value)

const [user,setUser] = useState (0)
const username =(e)=> setUser(e.target.value)
  return (
    <>
      <Form onSubmit={change} 
      onChangeEmailAddress={name}
      onChangeFullName={fullName}
      onChangePassword={password}
      onChangePhoneNumber={phoneNumber}
      onChangeUsername={username}
      />
    </>
  )
}

export default App
