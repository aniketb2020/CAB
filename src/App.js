import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegisterCustomer from './components/RegisterCustomer';
function App() {
  return (
    <div className="App">
      <header>
          <h1>Cab Management System</h1>
        </header>
      <BrowserRouter>
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <LoginForm /> }></Route>
              <Route path="/register" component={RegisterCustomer} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  );

}

export default App;

 
