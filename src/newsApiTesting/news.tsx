'use client'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
const News = () => {
    const [news,setNews] = useState([]);
    const [category,setCategory] = useState('')
    const BASE_URL = 'https://newsdata.io/api/1/latest';
    const API_KEY = 'pub_46634119345883a40c9b58a86b6f16e00bbf4';
    const hasFetchedData = useRef(false);
    const handleChange = ()=>{
        fetchNews(category)
    }
    const fetchNews = async(category?:string)=>{
        try{var url = category 
        ? `${BASE_URL}?apikey=${API_KEY}&language=en&category=${category}`
          : `${BASE_URL}?apikey=${API_KEY}&language=en`;
          console.log(url)
          const response = await axios.get(url);
          setNews(response.data?.results)
          
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      finally{
        hasFetchedData.current = true;
      }
        
    }

    useEffect(()=>{
        if(hasFetchedData.current){
            fetchNews(category)
        }
    },[])

  return (
    <div>
        {/* 
        <Image alt='ex news img ' height={80} width={80} src={news.image_url} />
        */}
      <p>your data is here</p> 
      <button onClick={handleChange} className='btn btn-primary'>send</button>
      <div>



        {
             news?.map((news:any,ind:number)=>(
                <div className={`container m-2 p-3`} key={`div_${ind}`}>
                    <h5 className={`d-flex justify-content-start`} key={`h5_${ind}`}>{news?.title}</h5>
                    {news.image_url?<Image alt={`ex news conent-image`} height={80} width={80} src={news?.image_url} />:''}
                    <p className={`d-flex justify-content-start`} key={`p_${ind}`}>{news?.pubDate}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default News
