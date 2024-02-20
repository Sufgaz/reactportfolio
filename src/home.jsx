// Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Welcome to My Portfolio</h1>
          <p className="lead text-center">I'm a React developer passionate about building web applications.</p>
          <div className="text-center">
            <button className="btn btn-primary">View Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
