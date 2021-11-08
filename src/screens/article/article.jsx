import React from 'react';
import { mockData } from '../../mockData'
import './article.css';

class Article extends React.Component {
    render() {
        const params = this.props.match.params;
        return (
            <div className='article_content'>
                <p className='article_title'>{mockData[params.index].title}</p>
                <img className='article_img' src={mockData[params.index].imageUrl} alt="article_image" />
                <p className='article_description'>{mockData[params.index].description}</p>
                <p className='article_expertComment' >{mockData[params.index].expertComment}</p> 
            </div>
        )
    }
}

export default Article;