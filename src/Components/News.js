import React from 'react';
import NewsCard from './NewsCard';
import '../Styles/News.css'

function News(){
    return(
        <div className="News">
            <h1 className="NewsTitle">News</h1>
            <NewsCard/>
        </div>
    )
}
export default News;