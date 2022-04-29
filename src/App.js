import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
