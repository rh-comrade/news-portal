'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    var category = useSelector((state:any)=>{
        return state.appReducer.currentCategory
    })
// creating states to store news data
const[news,setnews] = useState([]);

// secrete info
const BASE_URL = 'https://newsdata.io/api/1/latest';
const API_KEY = 'pub_46634119345883a40c9b58a86b6f16e00bbf4';
const loadNews = async(url:string)=>{
    try {
        const url = category 
          ? `${BASE_URL}?apikey=${API_KEY}&category=${category}`
          : `${BASE_URL}?apikey=${API_KEY} &language=en`;
          
        const response = await axios.get(url);
        console.log(response)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
}
// useEffect
useEffect(()=>{
    // @ts-ignore
    loadNews(category)

},[category])

    return (
    <></>
  )
}

export default Data
