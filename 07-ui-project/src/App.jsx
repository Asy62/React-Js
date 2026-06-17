import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {

const users =[
  {
    img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro: '', 
     tag : 'Satisfied'
     },
  {
     img:'https://images.unsplash.com/photo-1593836788196-9fd68e904906?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'', 
     tag : 'Underserved'
  },
  {
     img:'https://images.unsplash.com/photo-1562702523-d156c377848b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'', 
     tag : 'Underbanked'
  }
]




  return <div>
    <Section1 users={users} />
    <Section2 />
  </div>;
};

export default App;
