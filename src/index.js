import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './pages/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/products' element={<Products></Products>}/>
      </Routes>
     
      <Footer></Footer>
      </BrowserRouter>  
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


