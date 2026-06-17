import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt=""
      />
      <h1>{props.user} {props.age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        quibusdam.
      </p>
      <button className="but">View Profile</button>
    </div>
  );
};

export default Card;







//  <div className="card">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1669075651723-15d660e5d8d4?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//       <h1>Ajay Shankar</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
//         quibusdam.
//       </p>
//       <button className="but">View Profile</button>
//     </div>
