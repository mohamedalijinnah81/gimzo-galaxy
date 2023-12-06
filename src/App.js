import { useState } from 'react';
import './App.css';
import Navbar from './components/home/Navbar.js';
import Homebody from './components/home/Homebody.js';

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
    </div>
  );
}

export default App;
