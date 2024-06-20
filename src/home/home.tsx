'use client'
import React from 'react'
import styles from './home.module.css'
import { useDispatch, useSelector } from "react-redux";
import {  nameUpdate } from "@/redux/actions/action";
import { useRef } from "react";
import { Navbar } from '@/components/navbar';
import { Pagination } from '@/components/pagination';
import { Data } from '@/components/data';
import { List } from '@/components/list';
import { categoryData } from '../../utils/categoryData';
const Home = () => {
    const storeData = useSelector((state:any)=>{
      return state.appReducer
    })

  return (
    <div>
        <div className='container-fluid'>
          <header><Navbar data={['home','country','sector']}/></header>
          <hr />
        </div>
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
                      storeData.fdata.map((item:any,ind:number)=>(
                        <li key={`li_${ind}`}>{item.name}</li>
                      ))
                    }
                    <Pagination data={[{name:'R'},{name:'H'},{name:'U'},{name:'T'},{name:'I'},{name:'K'}]}/>
                  </div>
                </div>
            </main>

        </section>
        
    </div>
  )
}

export default Home
