'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';
import styles from './news.module.css';

const NewsDetails = ({ params }: any) => {
  const news = useSelector((state: any) =>
    state.appReducer.news.filter((news: any, ind: number) => news.article_id === params.id)
  );

  return (
    <>
      <Navbar />
      <div className={`container my-4 ${styles.newsDetailsContainer}`}>
        <button className="btn btn-secondary mb-4">
          <Link href="/" className="text-white text-decoration-none">Go Back</Link>
        </button>
        {news.map((newsItem: any, index: number) => (
          <div className="card mb-4" key={`news-item-${index}`}>
            {newsItem.image_url && (
              <Image
                className={`card-img-top text-center ${styles.newsItemImage}`}
                alt={`News content image for "${newsItem.title}"`}
                height={250}
                width={300}
                src={newsItem.image_url}
                layout="responsive"
                objectFit="cover"
              />
            )}
            <div className={`card-body ${styles.newsItemContent}`}>
              <h4 className="card-title">{newsItem.title}</h4>
              <p className="card-text text-muted">{newsItem.pubDate}</p>
              <p className="card-text">{newsItem.content}</p>
              <p className="card-text">{newsItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsDetails;
