import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/home/navbar/Navbar.js';
import Homebody from './components/home/Homebody.js';
import Footer from './components/home/Footer.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    async function fetchSearch() {
      const options = {
        method: 'GET',
        url: `https://amazon-scrapper17.p.rapidapi.com/search/${searchItem}`,
        params: {
          apiKey: '3c801d11ddb8472ee82c78036719fd15'
        },
        headers: {
          'X-RapidAPI-Key': 'a07240adf6msha71256c7d443d8ap15d451jsndb014b6076f0',
          'X-RapidAPI-Host': 'amazon-scrapper17.p.rapidapi.com'
        }
      };
        try {
            const response = await axios.request(options);
            const listItems = response.data.results;
            setSearchedList(listItems);
            // console.log(listItems[0]);
        } catch (error) {
            console.error(error);
        }
    }
    fetchSearch();
  }, [searchItem])

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
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
      <Footer />
    </div>
  );
}

export default App;
