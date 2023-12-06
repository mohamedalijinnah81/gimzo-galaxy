import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Listitems from './Listitems';
import '../../../../style/home/modules/Smartphones.css'

const Smartphones = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const options = {
            method: 'GET',
            url: 'https://amazon-scrapper17.p.rapidapi.com/search/smartphones',
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
                setItems(listItems);
                console.log(listItems[0]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
    
    // console.log(items);
  return (
    <div className='smartphones'>
        <h2>Smartphones</h2>
        <Listitems 
          items = {items}
        />
    </div>
  )
}

export default Smartphones