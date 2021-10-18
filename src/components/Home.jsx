import React, { useState, useEffect } from "react";
import ApiSocket from "./ApiSocket";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src=""
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light"> </h1>
          
            <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
      </div>
          <ApiSocket/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
