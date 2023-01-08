import "./App.css";
import SideBar from "./components/SideBar";
import React from "react";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MovieList />
    </div>
  );
}

export default App;
