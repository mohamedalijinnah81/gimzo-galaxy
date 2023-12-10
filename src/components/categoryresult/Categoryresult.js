import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchList from '../searchresult/SearchList';
import axios from 'axios';
import Searchskeleton from '../searchresult/Searchskeleton';

const Categoryresult = ({ API_KEY }) => {
    const { categoryName } = useParams();
    const [searchedList, setSearchedList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
          const options = {
            method: 'GET',
            url: `https://amazon-data-scraper-api2.p.rapidapi.com/search/${categoryName}`,
            params: {
              api_key: API_KEY
            },
            headers: {
              'X-RapidAPI-Key': 'a07240adf6msha71256c7d443d8ap15d451jsndb014b6076f0',
              'X-RapidAPI-Host': 'amazon-data-scraper-api2.p.rapidapi.com'
            }
          };
            try {
                const response = await axios.request(options);
                const listItems = response.data.results;
                setSearchedList(listItems);
                // console.log(listItems);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [categoryName])
  return (
    <div className='categoryresult'>
        <h2>Category : {categoryName}</h2>
        {isLoading && <Searchskeleton />}
        {!isLoading && <SearchList 
            searchedList={searchedList}
        />}
    </div>
  )
}

export default Categoryresult