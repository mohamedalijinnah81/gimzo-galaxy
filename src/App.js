import { useState } from 'react';
import './App.css';
import Navbar from './components/home/navbar/Navbar.js';
import Homebody from './components/home/Homebody.js';
import Footer from './components/home/Footer.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Searchresult from './components/searchresult/Searchresult.js';

function App() {
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gimzo-galaxy/search/${searchItem}`);
    setSearchItem('');
  }
  return (
    <div className="App">
      <Navbar 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}
      />
      <Homebody />
      <Routes>
        <Route path={`/gimzo-galaxy/search/*`} element={<Searchresult 
          searchItem={searchItem}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
