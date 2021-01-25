import React from "react"
import './App.css';
import Sidebar from "./Sidebar"
import Feed from './Feed'

function App() {
  return (
    // BEM convention
    <div className="app">
      {/* sidebar*/}
      <Sidebar />

      {/* Feed  */}
      <Feed />

      {/* Widgets */}

    </div>
  );
}

export default App;
