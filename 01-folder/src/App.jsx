import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


const App = () => {
  return (
    <>
      <div>
        <Card />
        <Navbar />
      </div>
      {Navbar()}
      {Card()}
    </>
  );
};

export default App;
