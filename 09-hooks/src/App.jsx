// import React, { useState } from 'react'

// const App = () => {

// const [num, setNum] = useState(10)

// function changeNum(){
//   setNum(30)
// }
//   return (
//     <div>

// <h1>Value of a is {num}</h1>
// <button onClick={changeNum}>Click to Change Value of a </button>




//     </div>
//   )
// }

// export default App





import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)

function increaseNum(){
  setNum(num+1)

}

function decreaseNum(){
setNum(num-1)

}

function JumpNum(){
  setNum(num+5)
}

  return (
    <div>
<h1>{num}</h1>
<button onClick={increaseNum}>increase</button>
<button onClick={decreaseNum}>decrease</button>
<button onClick={JumpNum}>Jump by 5</button>

    </div>
  )
}

export default App