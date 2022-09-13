import React from "react";
import { useState } from "react";

const Search = ({ films, setFilms }) => {
  const [hunt, setHunt] = useState("");
  let results = [];
  const click = (e) => {
    e.preventDefault();

    if (!hunt) {
      alert("Falta llenar los campos vacios");
      return;
    } else {
      results = films.filter(
        (film) =>
          film.director.toLowerCase().includes(hunt.toLowerCase()) ||
          film.title.toLowerCase().includes(hunt.toLowerCase())
      );
    }

    setFilms(results);
  };
  return (
    <nav className="navbar navbar-dark bg-info">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          Studios Ghibli
        </a>
        <form onSubmit={click}>
          <h3 className="text-light"> Busqueda por filme o director</h3>
          <input
            type="search"
            placeholder="Búsqueda"
            value={hunt}
            onChange={(e) => setHunt(e.target.value)}
          />

          <button>Enviar</button>
          <a href="/" className="navbar">Volver a la lista</a>
        </form>
        {films.length > 0 ? <h1 className="text-light"></h1> : null}
        <div className="row"></div>
      </div>
    </nav>
  );
};

export default Search;
