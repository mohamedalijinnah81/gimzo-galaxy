import { useState } from 'react';
import './App.css';
import Navbar from './components/home/navbar/Navbar.js';
import Homebody from './components/home/Homebody.js';
import Footer from './components/home/Footer.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Searchresult from './components/searchresult/Searchresult.js';
import axios from 'axios';
import Sidebar from './components/home/Sidebar.js';
import Listmodules from './components/home/Listmodules.js';

function App() {
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();
  const [searchedList, setSearchedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = 'b2ffa4149da7cf2c4628d22edb54dd1b';

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/gimzo-galaxy/search/${searchItem}`);
    const options = {
      method: 'GET',
      url: `https://amazon-data-scraper124.p.rapidapi.com/search/${searchItem}`,
      params: {
        api_key: API_KEY
      },
      headers: {
        'X-RapidAPI-Key': 'a07240adf6msha71256c7d443d8ap15d451jsndb014b6076f0',
        'X-RapidAPI-Host': 'amazon-data-scraper124.p.rapidapi.com'
      }
    };
      try {
          const response = await axios.request(options);
          const listItems = response.data.results;
          setSearchedList(listItems);
          setIsLoading(false);
          // console.log(listItems);
      } catch (error) {
          console.error(error);
      }
    setSearchItem('');
  }

  // console.log(searchedList);
  return (
    <div className="App">
      <Navbar 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}
      />
      <div className="homebody">
        <Sidebar />
        <Routes>
          <Route path='/gimzo-galaxy/' element={<Listmodules />} />
          <Route path='/gimzo-galaxy/search/*' element={<Searchresult 
            searchItem={searchItem}
            searchedList={searchedList}
            isLoading = {isLoading}
          />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
