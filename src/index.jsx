import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout.jsx';
import Homepage from './pages/layout/Homepage.jsx';
import About from './pages/layout/About.jsx';
import Projects from './pages/project/Projects.jsx';
import Profile from './pages/dashboard/Profile.jsx';
import DashBoard from './pages/dashboard/DashBoard.jsx';
import SignupPage from './pages/authentication/SignupPage.jsx';
import FinalYearProjects from './pages/project/FinalYearProjects.jsx';

import './css/font.css';
import DescriptionPage from './pages/description/DescriptionPage.jsx';
import { UserserviceContextProvider } from './context/UserServiceContext.jsx';
import { ProjectServiceContextProvider } from './context/ProjectServiceContext.jsx';
import CreateProject from './pages/project/CreateProject.jsx';
import Messages from './pages/dashboard/Messages.jsx';
import MyProjects from './pages/dashboard/MyProjects.jsx';
import Favourites from './pages/dashboard/Favourites.jsx';
import Notification from './pages/dashboard/Notification.jsx';
import { DatastoreServiceContextProvider } from './context/DatastoreServiceContext.jsx';
import ErrorPage from './utils/ErrorPage.jsx';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import { FeedbackContextProvider } from './context/FeedbackContext.jsx';
import PdfVIewer from './utils/PdfVIewer.jsx';
import Contact from './pages/layout/Contact.jsx';
import TermsAndCondition from './pages/layout/TermsAndCondition.jsx';
import 'font-awesome/css/font-awesome.min.css';
import ResetPassword from './pages/authentication/ResetPassword.jsx';
import LoginPage from './pages/authentication/LoginPage.jsx';
import GoogleLogin from './pages/authentication/GoogleLogin.jsx';


TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="/" element={<Homepage />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="project" element={<Projects />} /> */}
      <Route path="profile" element={<Profile />} >
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='myprojects' element={<MyProjects />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='messages' element={<Messages />} />
        <Route path='notification' element={<Notification />} />
      </Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='createproject' element={<CreateProject />} />
      <Route path='finalyearprojects' element={<FinalYearProjects />} />
      <Route path='/description/:id' element={<DescriptionPage />} />
      <Route path='/pdf-viewer/:pdfurl' element={<PdfVIewer />} />
      <Route path='/termsandcondition' element={<TermsAndCondition />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/auth/google/callback' element={<GoogleLogin />} />
      <Route path='/auth/google' element={<GoogleLogin />} />


      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)
root.render(
  <UserserviceContextProvider>
    <FeedbackContextProvider>
      <DatastoreServiceContextProvider>
        <ProjectServiceContextProvider>
            <RouterProvider router={router} />
        </ProjectServiceContextProvider>
      </DatastoreServiceContextProvider>
    </FeedbackContextProvider>
  </UserserviceContextProvider>
);

