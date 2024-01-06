import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './index.css';
import App from './App';
import AdminPortal from './Components/AdminPortal/AdminPortal';
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience';
import HomePage from './Components/HomePage/HomePage';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Layout from './Components/Layout/Layout';
import TableProjects from './Components/TableProjects/TableProjects'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='adminportal' element={<AdminPortal/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='experience' element={<Experience />}/>
        <Route path='homepage' element={<HomePage/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='tableprojects' element={<TableProjects/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </React.StrictMode>
);

