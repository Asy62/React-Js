import React from 'react'
import Card from './components/Card'

export const App = () => {
  return (
    <div className='parent'>
      <Card user='Ajay Shankar' age = {21} img='https://plus.unsplash.com/premium_photo-1669075651723-15d660e5d8d4?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card  user='Vijay Shankar' age = {15} img='https://plus.unsplash.com/premium_photo-1669075651558-ed2834e63f96?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Jay Shankar'   age= {13} img='https://plus.unsplash.com/premium_photo-1669075651606-4e05fb681ec1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}
export default App