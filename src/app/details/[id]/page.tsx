'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

const NewsDetails = ({params}:any) => {
    const news = useSelector((state:any)=>{
        return state.appReducer.news.filter((news:any,ind:number)=>{
            return news.article_id === params.id
        })
    })   


  return (
    <>
    <Navbar ></Navbar>
    <button className='d-flex justify-content-center btn btn-dark'> <Link style={{textDecoration:'none',}} href='/' >go to back</Link></button>
    <div className='conatiner m-5 p-5'>
        {
                          news.map((news:any,ind:number)=>(
                          <div className={`container border border-sucess  m-2 p-4`} key={`div_${ind}`}>
                            {news.image_url?<Image className='d-flex justify-content-center p-2' alt={`ex news conent-image`} height={250} width={300} src={news?.image_url} />:''}
                              <h4  className={`d-flex justify-content-start p-2`} key={`h5_${ind}`}>{news?.title}</h4>
                              <p className={`d-flex justify-content-start p-3 m-2`} key={`p_${ind}`}>{news?.pubDate}</p>
                              <p key={'content'} className='d-flex justify-content-center p-3 m-2'>
                               {news?.content}
                              </p>
                              <p key={'description'} className='d-flex justify-content-center p-3 m-2'>
                               {news?.description}
                              </p>
                          </div>
                          ))
                        }
    </div>
    </>
  )
}

export default NewsDetails
