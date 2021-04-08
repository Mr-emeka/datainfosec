import React from 'react'
import MainLayout from '../../layout/mainLayout'
import { NewsProps } from '../../../types'
import Comments from '../../custom/comments'

export interface IProps {
    news: NewsProps
}
const FeedDetailsView: React.FC<IProps> = ({ news }) => {
    return <MainLayout title={news?.title} description={news?.description}>
        <div className="feedDetails">
            <section >
                {news.image_url && <img alt="news_image" src={news?.image_url} className="feedDetails__img" />}
                <h1 className="feedDetails__title mb-3">{news?.title}</h1>
                <div className="mb-2">
                    <p>{news?.description}</p>
                </div>
                <hr />
                <section className="comment">
                    <h4>Comments</h4>
                    <Comments newsId={news.uuid} />
                </section>
            </section>
        </div>
    </MainLayout>
}
export default FeedDetailsView;