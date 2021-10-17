import React from 'react';
import { mockData } from '../mockData';
import './articles.css';

const Articles = () => {
    return (
        <div className='article_wrapper'>
            {mockData.map((article, index) => {
                return (
                    <div key={index} className='article'>
                        <img src={article.imageUrl} className='article_image' alt='article_image' />
                        <p className='article_title'>{article.title}</p>
                        {/* <p>{article.description}</p> */}
                        {/* <p>{article.expertComment}</p> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Articles;