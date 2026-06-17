// import React, { useState } from 'react'

// const App = () => {

// const [num, setNum] = useState({user:'Ajay shankar', age: 20} )


// const btnClicked =()=>{

// const newNum ={...num};

// newNum.user='Vijay Shankar'
// newNum.age =17
// setNum(newNum)






// }

//   return (
//     <div>

// <h1>{num.user}, {num.age}</h1>
// <button onClick={btnClicked}>Click</button>


//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

// const [num, setNum] = useState([10,30,40,59])
// const btnClicked =()=>{
//   const newNum = [...num]
//   newNum.push(100)
//   setNum(newNum)

// }

//   return (
//     <div>

// <h1>{num}</h1>
// <button onClick={btnClicked}>Click</button>


//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {


//   const [num, setNum] = useState({user:'Ajay Shankar', age: 20})
//   const btnClicked =()=>{
// setNum(prev=> ({...prev, age:50}))
//   }
//   return (
//     <div>

// <h1>{num.user}, {num.age}</h1>
// <button onClick={btnClicked}>Click</button>



//     </div>
//   )
// }

// export default App



// Batch Update//

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const btnClicked =()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  
  }


  return (
    <div>


      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App