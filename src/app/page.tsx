'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { nameUpdate } from "@/redux/actions/action";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef <HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(nameUpdate(`${inputRef.current?.value}`))
  }
  
  const name:string = useSelector((state:any)=>{
    return state.appReducer.name
  })
  return (
    <>
    <h2 className="container text-center">Hello World</h2>
    <input className="form-control" ref={inputRef} type="text" /> <button className="btn btn-primary"  onClick={handleClick}>submit</button>
    <h3> {`hello, ${name}`}</h3>
    </>
  );
}
