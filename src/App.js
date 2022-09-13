import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import MiApi from "./components/MiApi";

function App() {
  const [films, setFilms] = useState([]);
  const fetchFilms = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json();
    setFilms(data);
  };
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <>
      <Search films={films} setFilms={setFilms}/>
      <div className="container">
        <MiApi films={films} />
      </div>
    </>
  );
}

export default App;
