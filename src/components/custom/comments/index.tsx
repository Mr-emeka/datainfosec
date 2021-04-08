
import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../providers';

import { useObserver } from 'mobx-react';

interface IProps {
    newsId: any
}
const Comments: React.FC<IProps> = ({ newsId }) => {
    const [comment, setComment] = useState('')
    const { commentStore } = useRootStore()
    useEffect(() => {
        commentStore.getComments(newsId)
    }, [commentStore, newsId])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (comment !== '') {
            commentStore.postComment(newsId, comment, setComment);

        }
    }
    return useObserver(() => (
        <>
            {
                commentStore.comments.map((comment, idx) => {
                    return (
                        <div className="comment__container" key={idx}>
                            <img src="https://ui-avatars.com/api/?background=c60021&color=fff&name=Anon" alt="comment__img" className="comment__img" />
                            <p>{comment}</p>
                        </div>
                    )

                })
            }
            <form className="comment__textArea" onSubmit={handleSubmit}>
                <textarea className="mb-1" value={comment} rows={3} cols={10} onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="comment__btn" onClick={handleSubmit}>Comment</button>
            </form>
        </>
    )
    )
}
export default Comments;