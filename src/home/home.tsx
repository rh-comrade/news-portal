'use client'
import React from 'react'
import styles from './home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { nameUpdate } from "@/redux/actions/action";
import { useRef } from "react";
const Home = () => {
    const inputRef = useRef <HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleClick = ()=>{
      dispatch(nameUpdate(`${inputRef.current?.value}`))
    }
    
    const name:string = useSelector((state:any)=>{
      return state.appReducer.name
    })
  return (
    <div>
        Home Sweet Home
        <hr />
        <h2 className="container text-center">Hello World</h2>
    <input className="form-control" ref={inputRef} type="text" /> <button className="btn btn-primary"  onClick={handleClick}>submit</button>
    <h3> {`hello, ${name}`}</h3>
    </div>
  )
}

export default Home
