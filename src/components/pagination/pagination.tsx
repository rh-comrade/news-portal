import React from 'react'
import styles from './pagination.module.css'
const Pagination = () => {
  return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" title="Previous">
            <span className='sr-only'>&laquo;</span>
            {/* <span className="sr-only">Previous</span> */}
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" title="Next">
            <span className='sr-only'>&raquo;</span>
            {/* <span className="sr-only">Next</span> */}
          </a>
        </li>
      </ul>
  )
}

export default Pagination
