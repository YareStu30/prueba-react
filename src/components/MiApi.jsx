import React from "react";

const MiApi = ({ films }) => {
  return (
    <div className="row">
      {films.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ maxWidth: "300px" }}>
            <img src={item.image} alt="" />
            <p>Title: {item.title}</p>
            <p>{item.description}</p>
            <p>Director: {item.director}</p>
          </div>
        </div>
      ))}
      <div className="col"></div>
    </div>
  );
};

export default MiApi;
