import React from 'react'
import { Link } from 'react-router-dom'
import { NewsProps } from '../../../types/'

export interface CardProps {
    news: NewsProps
}

const FeedCard: React.FC<CardProps> = ({ news }) => {

    return <div className="feed">
        <img className="feed__img" src={news.image_url} alt="news_img" />
        <div className="feed_content mb-1">
            <h4>{news.title}</h4>
            <p className="p-1">{news.description}</p>
            <Link to={`/news/${news.uuid}`} >
                <button className="feed__btn">Read More</button>
            </Link>
        </div>

    </div>
}

export default FeedCard;