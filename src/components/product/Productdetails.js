import React, { useState, useEffect } from 'react'
import ProductInfo from './ProductInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../style/product/Productdetails.css'
import Productfeatures from './Productfeatures';
import Aboutproduct from './Aboutproduct';
import Productskeleton from './Productskeleton';

const Productdetails = ({ API_KEY }) => {
    const { productID } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [productSpecifications, setProductSpecifications] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            const options = {
                method: 'GET',
                url: `https://amazon-data-scraper-api2.p.rapidapi.com/products/${productID}`,
                params: {
                  api_key: 'c9fbdbe5e5ad325ea7874c057bec42d7'
                },
                headers: {
                  'X-RapidAPI-Key': 'a07240adf6msha71256c7d443d8ap15d451jsndb014b6076f0',
                  'X-RapidAPI-Host': 'amazon-data-scraper-api2.p.rapidapi.com'
                }
              };
            try {
                const response = await axios.request(options);
                // console.log(response.data);
                // const listItems = response.data;
                setProductDetails(response.data);
                setIsLoading(false)
                // console.log(productDetails);
                // setIsLoading(false);
                // const tempList = Object.keys(listItems.product_information).filter((key) => typeof listItems.product_information[key] !== 'object')
                // setProductSpecifications(tempList)
            } catch (error) {
                console.error('Error : ' + error);
            }
        }
        fetchData();
    }, [productID])

    // console.log(productDetails.product_information);

  return (
    <div className='productdetails'>
      {isLoading && <Productskeleton />}
        {!isLoading && <div className="productspec">
            <img src={productDetails.images[0]} alt="" />
            <ProductInfo 
                name={productDetails.name}
                rating={productDetails.average_rating}
                users={productDetails.total_reviews}
                pricing={productDetails.pricing}
                originalPrice={productDetails.list_price}
            />
        </div>}
          {!isLoading && <Productfeatures 
              productFeatures={productDetails.feature_bullets}
          />}
          {!isLoading && <Aboutproduct 
            aboutProduct={productDetails.product_information}
          />}
    </div>
  )
}

export default Productdetails