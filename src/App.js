import React from "react";
import "./App.css";
import Sidebar from "./screens/Home/Sidebar";
import Feed from "./screens/Home/Feed";
import Widgets from "./screens/Home/Widgets";

function App() {
  return (
    // BEM convention
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
