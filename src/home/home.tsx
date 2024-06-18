'use client'
import React from 'react'
import styles from './home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { nameUpdate } from "@/redux/actions/action";
import { useRef } from "react";
import { Navbar } from '@/components/navbar';
import { Pagination } from '@/components/pagination';
const Home = () => {
    const inputRef = useRef <HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleClick = ()=>{
      dispatch(nameUpdate(`${inputRef.current?.value}`))
    }
    
    const storeData = useSelector((state:any)=>{
      return state.appReducer
    })
  return (
    <div>
        <Navbar data={['home','country','sector']}/>
        <main>
        Home Sweet Home
        <p>your selected category is: {storeData.category}</p>
        <hr />
        <h2 className="container text-center">Hello World</h2>
    <input className="form-control" ref={inputRef} type="text" /> <button className="btn btn-primary"  onClick={handleClick}>submit</button>
    <h3> {`hello, ${storeData.name}`}</h3>
        </main>
        <footer>
            <Pagination/>
        </footer>
    </div>
  )
}

export default Home
