import React, { useState } from 'react'
import styles from './dropdown.module.css'
import { useDispatch } from 'react-redux'
import { currentCategoryUpdate } from '@/redux/actions/action'
const Dropdown = ({header,data}:any) => {
    const dispatch = useDispatch()
    const handleCategoryChange = (e:any)=>{
        dispatch(currentCategoryUpdate(e.target.id))
    }
  return (
    <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {header}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    data?.map((items:string,ind:number)=>(
                        <li  onClick={handleCategoryChange} key={`li_dropdown_${ind}`} >
                            <a id={`${items}`} className="dropdown-item" href="#">{items}</a>
                        </li>
                    ))
                }
               
              </ul>
            </li>
  )
}

export default Dropdown
