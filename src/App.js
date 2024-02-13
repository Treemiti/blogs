import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter,RouterProvider } from "react-router-dom";

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Error from './components/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navigation />
    <Header /><Main /><Footer /></>,
  },
  {
    path: '/about',
    element: <><Navigation />
    <Header /><About /><Footer /></>,
  },
  {
    path: '/post',
    element: <><Navigation />
    <Header /><Post /><Footer /></>,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <><Navigation />
    <Header /><Error /><Footer /></>,
  }
]);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Router> */}

{/*             <Routes>
              <Route path="" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="post" element={<Post />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes> */}
            <RouterProvider router={router} />
          
        {/* </Router> */}
      </React.Fragment>
    );
  }
}

export default App;
