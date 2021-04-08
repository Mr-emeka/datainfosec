import React, { useEffect } from 'react'
import FeedDetailsView from '../../components/views/FeedDetailsView';
import { useRootStore } from '../../providers'
import { observer } from "mobx-react-lite";

const FeedViewPage = observer((props: any) => {
    const { newsStore } = useRootStore();

    useEffect(() => {
        newsStore.getNewsById(props.match.params.id)
    }, [newsStore, props.match.params.id])
    return <div>

        <FeedDetailsView news={newsStore.news} />
    </div>
})

export default FeedViewPage;