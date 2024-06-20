'use client'
import React from 'react'
import styles from './list.module.css'
import { useDispatch } from 'react-redux'
import { currentCategoryUpdate } from '@/redux/actions/action'
const List = ({items}:any) => {
    const dispatch = useDispatch();
    const handleCategoryChange = (e:any)=>{
        dispatch(currentCategoryUpdate(e.target.value))
    }
    
  return (
    <>
    <label htmlFor="">Filter By category</label>
    <select onChange={handleCategoryChange} className={`form-select`}>
        {
            items?.map((item:any,ind:number)=>(
                <option 
                key={`opt-${ind}`} 
                id={`${item}`} 
                value={`${item}`}>
                    {item.toUpperCase()}
                </option>
            ))
        }
    </select>
    </>
  )
}

export default List
