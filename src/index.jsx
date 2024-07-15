import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout.jsx';
import Homepage from './pages/layout/Homepage.jsx';
import About from './pages/layout/About.jsx';
import Projects from './pages/project/Projects.jsx';
import Profile from './pages/layout/Profile.jsx';
import LoginPage from './pages/project/LoginPage.jsx';
import DashBoard from './pages/dashboard/DashBoard.jsx';
import SignupPage from './pages/project/SignupPage.jsx';
import FinalYearProjects from './pages/project/FinalYearProjects.jsx';

import './font.css'
import DescriptionPage from './pages/description/DescriptionPage.jsx';
import { UserserviceContextProvider } from './context/UserServiceContext.jsx';
import { ProjectServiceContextProvider } from './context/ProjectServiceContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateProject from './pages/project/CreateProject.jsx';
import Messages from './pages/dashboard/Messages.jsx';
import MyProjects from './pages/dashboard/MyProjects.jsx';
import Favourites from './pages/dashboard/Favourites.jsx';
import Notification from './pages/dashboard/Notification.jsx';
import { DatastoreServiceContextProvider } from './context/DatastoreServiceContext.jsx';
import ErrorPage from './utils/ErrorPage.jsx';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import { FeedbackContextProvider } from './context/FeedbackContext.jsx';
import PdfVIewer from './utils/PdfVIewer.jsx';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="/" element={<Projects />} />
      <Route path="home" element={<Homepage />} />
      <Route path="about" element={<About />} />
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
      
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)
root.render(
  <UserserviceContextProvider>
    <FeedbackContextProvider>
      <DatastoreServiceContextProvider>
        <ProjectServiceContextProvider>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </ProjectServiceContextProvider>
      </DatastoreServiceContextProvider>
    </FeedbackContextProvider>
  </UserserviceContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
