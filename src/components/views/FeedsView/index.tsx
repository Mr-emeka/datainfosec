import React from 'react'
import MainLayout from '../../layout/mainLayout'
import FeedCard from '../../custom/FeedCard'
import { NewsProps } from '../../../types'
import { Link } from 'react-router-dom'

export interface IProps {
    feeds: NewsProps[],
    topFeeds: NewsProps[]
}
const FeedsView: React.FC<IProps> = ({ feeds, topFeeds }) => {

    return <MainLayout title="NewsFeed" description="News feed get all update ">
        <div className="feeds">
            <section className="feeds__all">
                <div className="feeds__section">
                    {feeds.map((news: NewsProps, idx: string | number | null | undefined) => {
                        return <FeedCard key={idx} news={news} />
                    })}
                </div>
            </section>

            <aside className="feeds__sideMenu topFeeds">
                <div className="topFeeds__heading">
                    <h3>Top stories</h3>
                </div>
                <div>
                    {topFeeds.map((feed) => {
                        return <Link to={`news/${feed.uuid}`}>
                            <div className="topFeeds__content">
                                <img alt="" src={feed.image_url} className="topFeeds__img" />
                                <div className="topFeeds__text">
                                    <h6>{feed.title}</h6>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>

            </aside>
        </div>
    </MainLayout>
}

export default FeedsView;