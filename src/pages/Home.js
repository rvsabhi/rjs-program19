
import React from "react";

function Home() {
  return (
    <div className="page home-page">
      <h1>Home</h1>

   

<img
  src={`${process.env.PUBLIC_URL}/Student.jpg`}
  alt="Student Profile"
  width="300"
/>



      <h2>ABHILASH.V</h2>

      <p>
        Hello! My name is ABHILASH.V I am a BCA student who enjoys learning programming,
        developing websites, and exploring new technologies.
      </p>

      <p>
        My goal is to become a skilled software developer
        and create useful applications.
      </p>
    </div>
  );
}

export default Home;
