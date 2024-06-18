'use client'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const BootstrapInstall = () => {
    useEffect(()=>{
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
    },[])
  return (
    <></>
  )
}

export default BootstrapInstall
