import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Profile from './pages/Profile.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashBoard from './pages/dashboard/DashBoard.jsx';
import SignupPage from './pages/SignupPage.jsx';

import './font.css'
import DescriptionPage from './pages/description/DescriptionPage.jsx';






const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Projects />} />
      <Route path="profile" element={<Profile />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='dashboard' element={<DashBoard />} />
      <Route path='description' element={<DescriptionPage />} />
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
