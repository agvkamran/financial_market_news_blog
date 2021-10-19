import React from 'react';
import { mockData } from './../mockData'

class Article extends React.Component {
    render() {
        console.log(this.props.match.params);
        let idx = this.props.match.params;

        return (
            <div>
                <p>{mockData[idx.index].title}</p>
                <p>{mockData[idx.index].description}</p>
                <img src={mockData[idx.index].imageUrl} alt="" />
                <p>{mockData[idx.index].expertComment}</p> 
            </div>
        )
    }
}

export default Article;