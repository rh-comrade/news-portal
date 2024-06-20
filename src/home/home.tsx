'use client'
import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import { useRef,useState,useEffect } from "react";
import { Navbar } from '@/components/navbar';
import { Pagination } from '@/components/pagination';
import { List } from '@/components/list';
import { categoryData } from '../../utils/categoryData';


const Home = () => {
  // Redux store data fetching according to need
    const storeData = useSelector((state:any)=>{
      return state.appReducer
    })
    // state for news and category
    const [news,setNews] = useState([]);
    const [category,setCategory] = useState('')
    // API URL and Key
    const BASE_URL = 'https://newsdata.io/api/1/latest';
    const API_KEY = 'pub_46634119345883a40c9b58a86b6f16e00bbf4';
    
    // to prevent many request if current is onging
    const hasFetchedData = useRef(false);

    // method for call news API and store data into news state
    const fetchNews = async(category?:string)=>{
        try{var url = category 
        ? `${BASE_URL}?apikey=${API_KEY}&language=en&category=${category}`
          : `${BASE_URL}?apikey=${API_KEY}&language=en`;
          console.log(url)
          const response = await axios.get(url);
          setNews(response.data?.results)
          console.log(news)
          
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      finally{
        hasFetchedData.current = true;
      }
        
    }
    // this hook helps to fetchNews from API 1st time load and every categorychange
    useEffect(()=>{
          fetchNews(category)
  },[category])


  return (
    <div>
        <div className='container-fluid'>
          <header><Navbar data={['home','country','sector']}/></header>
          <hr />
        </div>
        {/* below is bootstrap grid for responsive layout of rmobile and desktop friendly */}
        <section className={`row mt-3 p-2 `} >
            <nav className="col-md-3 p-4">
                {/* sorting functionality */}
                <List items={categoryData} />
            </nav>
            <main className="container col-md-8 border border-primary  p-4 ">
                <div>
                  {/* conditional rendering according to category */}
                  <h3 className='p2 mb-1'>{storeData.currentCategory===""?'Latest News':`Category: ${storeData.currentCategory}`}</h3>
                  <div className='container'>
                    {
                      news.map((news:any,ind:number)=>(
                <div className={`container m-2 p-3`} key={`div_${ind}`}>
                    <h5 className={`d-flex justify-content-start`} key={`h5_${ind}`}>{news?.title}</h5>
                    {news.image_url?<Image alt={`ex news conent-image`} height={80} width={80} src={news?.image_url} />:''}
                    <p className={`d-flex justify-content-start`} key={`p_${ind}`}>{news?.pubDate}</p>
                </div>
            ))
                    }
                    {/* pagination component */}
                    <Pagination data={news}/>
                  </div>
                </div>
            </main>

        </section>
        
    </div>
  )
}

export default Home
