import React, { useEffect, useState } from 'react'
import SearchList from './SearchList'
import axios from 'axios'

const Searchresult = ({ searchItem }) => {
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
  }, [])

  console.log(searchedList);
  return (
    <div className='searchresult'>
        <h2>Search results for {searchItem}</h2>
        {/* <SearchList 
          items = {searchedList}
        /> */}
    </div>
  )
}

export default Searchresult