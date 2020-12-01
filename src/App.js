import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SearchComponent from "./Pages/SearchComponent";
import Repo from "./Pages/Repo";
import Followers from "./Pages/Followers";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={SearchComponent} />
      <Route path="/repo/:name" component={Repo} />
      <Route path="/followers/:owner" component={Followers} />
    </div>
  );
}

export default App;
