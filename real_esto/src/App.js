import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head_meta from './components/Head_meta';
import Nav from './components/Nav/Nav';
import Index_page from './pages/index_page';
import Properties from './pages/properties';
import NotFound from './pages/404';
import Scripts from './scripts/App_scripts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App w-100">
        <Head_meta />
        <Nav />
        <Routes>
          <Route path="/" element={<Index_page />} />
          <Route path="/listing" element={<Properties />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Scripts />
      </div>
    </Router>
  );
}

export default App;

{/* <Hero />
      <Listing_section />
      <Values />
      <Footer /> */}

/* 
      import Hero from './components/Hero/Hero';
      import Prop_sect from './components/Properties_section/Prop_sect';
      import Listing_section from './components/Properties_carousel/Listing_section';
      import Values from './components/Values_section/Values';
      import Footer from './components/footer/Footer';
       */