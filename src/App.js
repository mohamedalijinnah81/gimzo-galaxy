import { useState } from 'react';
import './App.css';
import Navbar from './components/home/Navbar.js';
import Sidebar from './components/home/Sidebar.js';

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
      <Sidebar />
    </div>
  );
}

export default App;
