import { useState } from 'react';
import './App.css';
import Navbar from './components/home/navbar/Navbar.js';
import Homebody from './components/home/Homebody.js';
import Footer from './components/home/Footer.js';

function App() {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Navbar 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}
      />
      <Homebody />
      <Footer />
    </div>
  );
}

export default App;
