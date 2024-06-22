
import React, { useEffect, useState } from 'react'
import styles from './pagination.module.css'
import { useDispatch } from 'react-redux';
import { filteredDataUpdate } from '@/redux/actions/action';

const Pagination = ({data}:any) => {
  // required variables for manage pagination
    const [currentPage,setCurrentPage] = useState(1)
    const [recordsPerPage,setRecordsPerpage] = useState(5);
    const lastIndex = recordsPerPage * currentPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data?.slice(firstIndex,lastIndex)
    const nPage = Math.ceil(data.length/ recordsPerPage)
    const numbers: number[] = Array.from(Array(nPage + 1).keys()).slice(1);
    useEffect(()=>{
        setCurrentPage(1)
    },[])
    const dispatch = useDispatch();

    const handleClick = (e:any)=>{
        const idRef = e.target.id;
        dispatch(filteredDataUpdate(records))
        switch(idRef){
            case 'Previous':
                if(currentPage !== 1){
                    setCurrentPage(currentPage - 1)
                }
                break;
            case 'Next':
                if(currentPage !== nPage){
                    setCurrentPage(currentPage + 1)
                }
                break;
            default :
                setCurrentPage(idRef)
                
        }
    }

  return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a onClick={handleClick} className="page-link" href="#" id="Previous">
            &laquo;
          </a>
        </li>
        {
            numbers?.map((n,ind)=>(
        <li className={`page item ${currentPage === n ? 'active':''}`} key={`li_n${ind}`}>
            <a onClick={handleClick} id={`${n}`} className="page-link" href="#">{n}</a>
        </li>

            ))
        }
        <li className="page-item">
          <a onClick={handleClick} className="page-link" href="#" id="Next">
            &raquo;
          </a>
        </li>
      </ul>
  )
}

export default Pagination
