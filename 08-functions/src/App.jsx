import React from 'react'

const App = () => {

function btnClicked (){
  console.log('button is clicked');
}


function mouseEnter(){
  console.log('Mouse Entered');
}

  return (
    <div>

    <h1>Hello, Ajay</h1>
<button onMouseEnter={mouseEnter} onClick={btnClicked}>Change user</button>
<button onClick={btnClicked}>Click me</button>

<button onClick={function(){
  console.log('Switch on your mode');
}}>mode</button>


{/* Arrow function creation inside the button tag */}

<button onClick={()=>{
  console.log('click meeee');
}}>click us</button>


{/* use of input tag */}
<input onChange={()=>{
  console.log('User is Typing');

}} type="text" placeholder='Enter your name' />



<input onChange={function(elem){
  console.log(elem.target.value);
}} type="number" placeholder='Enter your Registration number' />


<div onMouseMove={(elem)=>{
  console.log(elem);
}} className='box'></div>



<div onWheel={(elem)=>{
  if(elem>0)
  {
    console.log("Your scrolling is in Positive mode");
  }
  else{
    console.log("Your scrolling is in Negative mode");
  }
  console.log(elem.deltaY);
}}>
  
<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>

</div>







<div btnClicked={()=>{
  console.log('hello');
}} >
  <button>
    click
  </button>
</div>


    </div>
  )
}

export default App