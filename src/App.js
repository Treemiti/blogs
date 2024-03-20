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
import { v4 as uuidv4 } from 'uuid';
//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3rFWruUlKsMs9fTM2TS34bAzVdeaywKk",
  authDomain: "courses-1136e.firebaseapp.com",
  databaseURL: "https://courses-1136e-default-rtdb.firebaseio.com",
  projectId: "courses-1136e",
  storageBucket: "courses-1136e.appspot.com",
  messagingSenderId: "652834794900",
  appId: "1:652834794900:web:d3953ccfb40db0a26e7381"
};

// Initialize Firebase
//if(firebase.app.length>0)
//{
  const app = initializeApp(firebaseConfig);
//}

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      cid:uuidv4(),
      cname:'',
      cphone:'',
      cemail:'',
      cmessage:'',
      isSubmit:false
    };
  };

  contactHandler = (event)=>{
    let cn=event.target.cname.value;
    let ce=event.target.cemail.value;
    let cp=event.target.cphone.value;
    let cm=event.target.cmessage.value;
    this.setState({cid:uuidv4(),cname:cn,cemail:ce,cphone:cp,cmessage:cm,isSubmit:true},()=>{ alert(this.state.cname)});

    const db = getDatabase(app);
    set(ref(db, 'courses/' + this.state.cid), {
        cname:cn,
        cemail:ce,
        cphone:cp,
        cmessage:cm,
    });

    if(this.state.isSubmit)
    {
        console.log("Data Inserted successfully");
    }

    event.preventDefault();
  };
  
  render() {
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
        element:<><Navigation />
        <Header />{this.state.isSubmit?<div><p>Message submitted successful</p></div>:<Contact submit={this.contactHandler} />}<Footer /></>,
      },
      {
        path: '*',
        element: <><Navigation />
        <Header /><Error /><Footer /></>,
      }
    ]);
    return (
      <React.Fragment>
        {/* <Router> */}

{/*           <Routes>
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
