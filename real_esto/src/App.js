import React from 'react';
import './App.scss';
import Head_meta from './components/Head_meta';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Prop_sect from './components/Properties_section/Prop_sect';
import Listing_section from './components/Properties_carousel/Listing_section';
import Scripts from './scripts/App_scripts';

function App() {
  return (
    <div className="App">
      <Head_meta />
      <Nav />
      <Hero />
      <Listing_section />
      <Footer />
      <Scripts />
    </div>
  );
}

export default App;
