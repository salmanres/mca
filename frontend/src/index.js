import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './dashboard/LandingPage';
import LoginPage from './dashboard/LoginPage';
import HomePage from './dashboard/HomePage';
import ContactUsPage from './dashboard/ContactUsPage';
import StudentPage from './dashboard/StudentPage';
import AddDataPage from './dashboard/AddDataPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='' element={<HomePage />} />
          <Route path='/contactus/:count' element={<ContactUsPage />} />
          <Route path='/studentdata' element={<StudentPage />} />
          <Route path='/addstudent' element={<AddDataPage />} />
        </Route>

        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
