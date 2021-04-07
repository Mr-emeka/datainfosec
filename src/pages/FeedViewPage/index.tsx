import React, { useEffect } from 'react'
import FeedDetailsView from '../../components/views/FeedDetailsView';
import { useRootStore } from '../../providers'

const FeedViewPage = (props: any) => {
    const { newsStore } = useRootStore();

    useEffect(() => {
        newsStore.getNewsById(props.match.params.id)
    }, [newsStore, props.match.params.id])
    return <>
        <FeedDetailsView news={newsStore.news} />
    </>
}

export default FeedViewPage;