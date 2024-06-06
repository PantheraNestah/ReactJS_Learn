import App_nav from './components/header/App_header';
import App_legend from './components/legend/App_legend';
import Discover_sect from './components/discover_sect/Discover_sect';
import Footer from './components/footer/App_Footer';

function App() {
  
  return (
    <div className="App">
      <App_nav />
      <App_legend />
      <Discover_sect />

      <Footer />
    </div>
  );
}

export default App;
