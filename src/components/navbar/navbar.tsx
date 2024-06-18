import React from 'react'
import styles from './navbar.module.css'
import { Dropdown } from '../dropdown'
const Navbar = ({data}:any) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ex-News</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
                data?.map((item:any,ind:number)=>(
                    <li key={`li_${ind}`} className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">{item}</a>
                    </li>
                ))
            }
            
            <Dropdown 
            header={'Category'} 
            data={['business','crime','domestic','education','entertainment','environment','food','health','lifestyle','other','politics','science','sports','technology','top','tourism','world']} />
          </ul>
          <form className="d-flex">
            
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
