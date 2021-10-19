import React from 'react';
import { NavLink } from 'react-router-dom';
import './articles.css';

const Articles = (props) => {
    // console.log(props);

    return (
        <div className='article_wrapper'>
            {props.mockData.map((article, index) => {
                return (
                    <NavLink to={`/articles/` + index}>
                        <div key={index} className='article'>
                            <img src={article.imageUrl} className='article_image' alt='article_image' />
                            <p className='article_title'>{article.title}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Articles;