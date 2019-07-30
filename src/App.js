import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Routes from './Routes'

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
          <main>
              <Sidebar />
              <Routes />
          </main>
        </Router>
    </div>
  );
}

export default App;
