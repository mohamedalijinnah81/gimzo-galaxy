import React from 'react'
import Listskeleton from '../Listskeleton';
import Listitems from '../Listitems';
import '../../../../style/home/modules/Items.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Earphones = ({ API_KEY }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
          const options = {
            method: 'GET',
            url: 'https://amazon-data-scraper124.p.rapidapi.com/search/tws',
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
                setItems(listItems);
                // console.log(listItems[0]);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
  return (
    <div className='earphones'>
        <h2>TWS Earbuds</h2>
        {isLoading && <Listskeleton />}
        {!isLoading && <Listitems 
            items = {items}
        />}
    </div>
  )
}

export default Earphones