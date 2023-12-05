import { useState } from 'react';
import './App.css';
import Navbar from './components/home/Navbar.js';

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
    </div>
  );
}

export default App;
