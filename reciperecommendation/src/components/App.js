import React from 'react';
import Signup from './signup';
import { Container } from 'react-bootstrap';
import AuthProvider from '../contexts/AuthContext';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import InnerRoute from './InnerRoute';


function App() {
    return (
            <Router>
              <AuthProvider>
                <Routes>
                <Route exact path='/' element={<InnerRoute/>}>
                    <Route exact path='/' element={<Dashboard/>}/>
                </Route>
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </AuthProvider>
            </Router>
    )
}

export default App;
