import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Carouselhome from "./components/Carouselhome";
import Membershipmenu from "./components/Membershipmenu";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Navbar />
      <Carouselhome />
      <Membershipmenu />
      <Category />
    </>
  );
}

export default App;
