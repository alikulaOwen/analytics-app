import React from 'react';
import './App.css';
import { Login } from './views/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { MainApp } from './views/main';
import PrivateRoute from './views/privateRoute';
//import { MainApp } from './views/main';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/'element={<PrivateRoute page={<MainApp />} />}/>
            <Route path='/login' element={<Login />} />
           <Route path='*' element={<Navigate to='/login' />} />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
