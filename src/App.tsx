import React from 'react';
import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Mian/Main';
import Product from './product/Product';
import './App.css';
import Navbar from './Navbar';
import Slide from './product/Slide';
import Post from './comment/Post';
import Feature from './feature/Feature';
import Footer from './Footer';



const  App:FC=() => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Product />
      <Slide />
      <Post />
      <Feature />
      <Footer />
 
    
     
   
    </div>
  );
}

export default App;
