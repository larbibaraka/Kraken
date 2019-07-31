import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Boards from './Components/Boards/Boards';
import Routes from './Routes'

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <Sidebar />
          <main>
              <Routes />
              <Boards />
          </main>
        </Router>
    </div>
  );
}

export default App;
