import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import Nav from "./Components/Nav/Nav";


function App() {

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Router />
    </BrowserRouter>
  );
}

export default App;
