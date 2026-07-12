import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';

import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;