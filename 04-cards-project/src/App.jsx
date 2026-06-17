import React from "react";
import Card from "./components/Card.jsx";

const App = () => {


  const jobOpenings = [
  {
    brandlogo: "data:image/png;base64,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",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandlogo: "data:image/jpeg;base64,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",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegMNd3mpuHVysqhfT0JV-oE0ZsTvUBHizyQ&s",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Remote, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7c5ntMMlh2vFkMrDUU6bHBj5WdV3h1gH9w&s",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Noida, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "1 month ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Pune, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png",
    companyName: "IBM",
    datePosted: "2 months ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 58,
    location: "Remote, India"
  }
];

  return (
    <div className="parent">

      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
            <Card company={elem.companyName} post={elem.post}   brandlogo={elem.brandlogo} pay={elem.pay}  tag1={elem.tag1} tag2={elem.tag2}  datePosted={elem.datePosted} location={elem.location} />
          </div>
      })}
    </div>
  );
};

export default App;
