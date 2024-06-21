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
import { newsUpdate } from '@/redux/actions/action';
import { appStore } from '@/redux/store';
import Link from 'next/link';

const Home = () => {
  // Redux store data fetching according to need
    const storeData = useSelector((state:any)=>{
      return state.appReducer
    })

    // dispatch data to store
      const dispatch = useDispatch()

    // state for news and category
    const news = storeData.news;
    const category = storeData.currentCategory;
    const [details,setDetails] = useState([]);

    // API URL and KEY from env
    const url = 'https://newsdata.io/api/1/latest';
    const key = 'process.env.NEXT_PUBLIC_API_KEY';
    
    const handleClick = (e:any)=>{
      const idRef = e.target.id
      // filtering selected product
     const newsx= news.filter((news:any,ind:number)=>{
          return news.article_id === idRef
      })
      setDetails(newsx)
      console.log(newsx)
  }

    // method for call news API and store data into news state
    const fetchData = async () => {
      try {
        console.log('Data fetching started');
        const response = await axios.get(`${url}?apikey=${key}${category===''?'':`&category=${category}`}&language=en`);
        console.log(response.data.results)
        dispatch(newsUpdate(response.data.results))
        // setNews(response.data.results);
      } catch (error) {
      console.log('an error occured during data fetching failed')
        console.error('Error fetching data:', error);
      } finally {
        console.log('Data fetching process completed.');
      }
    };
    var timmer:any;
    const debounceData = async()=>{
      clearTimeout(timmer)
      timmer =  setTimeout(()=>{
          fetchData()
      },10)
  }
    useEffect(()=>{
          debounceData()
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
                              <h5 onClick={handleClick} id={`${news.article_id}`} className={`d-flex justify-content-start`} key={`h5_${ind}`}><Link href={`/details/${news.article_id}`}>{news?.title}</Link></h5>
                              {news.image_url?<Image alt={`ex news conent-image`} height={80} width={80} src={news?.image_url} />:''}
                              <p className={`d-flex justify-content-start`} key={`p_${ind}`}>{news?.pubDate}</p>
                          </div>
                          ))
                      }
                    
                    <Pagination data={news}/>
                  </div>
                </div>
            </main>

        </section>
        
    </div>
  )
}

export default Home
