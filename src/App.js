import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrap from "./components/Layout/Layout";
import UserListPage from './components/UserList/UserListPage';


function App() {
  return (
    <Router>
         <div>
           <Routes>
              <Route path='/' element={<Wrap/>} />
           </Routes>
           <Routes>
              <Route path="/user" element={<UserListPage/>} />
           </Routes>
        </div>
   </Router>
  );
}

export default App;
