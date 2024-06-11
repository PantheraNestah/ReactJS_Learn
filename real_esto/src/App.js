import React from 'react';
import './App.scss';
import Head_meta from './components/Head_meta';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Prop_sect from './components/Properties_section/Prop_sect';

function App() {
  return (
    <div className="App">
      <Head_meta />
      <Nav />
      <Hero />
      <Prop_sect />
      <Footer />
    </div>
  );
}

export default App;
