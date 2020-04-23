import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Tony Stark</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1559006321-0edcc6981d06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>Holi !</p>
          <input type="text" placeholder="add comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
