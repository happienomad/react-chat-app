import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}

export default App;
