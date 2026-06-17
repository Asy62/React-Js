import React from 'react'

const App = () => {


  // localStorage.setItem('user', 'Ajay Shankar')
  // localStorage.setItem('age', 21)
  // const user = localStorage.getItem('user')
  // const age= localStorage.getItem('age')
  // console.log(user,age);



  const user ={
    username:'Ajay',
    age :21,
    city: 'Aurangabad'
  }

  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App