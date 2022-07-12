import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/404" element={ <PageNotFound /> } />
       <Route path='/movie/:imdbID' element={<MovieDetails />} />

      </Routes>
     
        <Footer />
      </div>
    
      
    </div>
  );
}

export default App;
