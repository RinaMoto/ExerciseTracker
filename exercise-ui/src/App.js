import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage.js';
import Nav from './Components/Nav';
import {BiRocket} from 'react-icons/bi';
import Footer from './Components/Footer.js';


function App() {
  const [exercises, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header>
            <h1>Stark <BiRocket /></h1>
            <p>Track your fitness with the Stark fitness tracker</p>
            <Nav />
          </header>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/edit-exercise">
            <EditPage exerciseToEdit={exercises} />
          </Route>
          <Route path="/create-page">
            <CreatePage />
          </Route>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;