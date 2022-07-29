import React from 'react';
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
  // const {isLoading,isSuccess,isAuthenticated} =useAppSelector((state)=>state.auth)

    // Loading state 
  return (
    <div className="App h-screen w-screen ">
        <Router>
          <Routes>
            <Route path='/app/*'element={<PrivateRoute page={<MainApp />} />}/>
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<Navigate to='/signin' />} />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
