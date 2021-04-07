import React from 'react'
import MainLayout from '../../layout/mainLayout'
import { NewsProps } from '../../../types'

export interface IProps {
    news: NewsProps
}
const FeedDetailsView: React.FC<IProps> = ({ news }) => {
    return <MainLayout>
        <div className="feedDetails">
            {console.log(news)}
            <section >
                <img alt="news_image" src={news?.image_url} className="feedDetails__img" />
                {/*  src="https://via.placeholder.com/1028x400.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" */}
                <h1 className="feedDetails__title mb-3">{news?.title}</h1>
                <section className="mb-2">
                    <p>{news?.description}</p>
                </section>
                <hr />
                <section className="comment">
                    <h4>Comments</h4>

                    <div className="comment__container">
                        <img alt="comment__img" src="https://via.placeholder.com/50x50.png" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus veritatis inventore tenetur harum veniam voluptatum. Aperiam dignissimos architecto ducimus</p>
                    </div>
                    <div className="comment__container">
                        <img src="https://via.placeholder.com/50x50.png" alt="comment__img" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus veritatis inventore tenetur harum veniam voluptatum. Aperiam dignissimos architecto ducimus</p>
                    </div>
                    <div className="comment__textArea">
                        <textarea className="mb-1" rows={4} cols={50}></textarea>
                        <button className="comment__btn">Comment</button>
                    </div>
                </section>
            </section>
        </div>
    </MainLayout>
}
export default FeedDetailsView;