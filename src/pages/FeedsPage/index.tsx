import React, { useEffect } from 'react'
import FeedsView from '../../components/views/FeedsView'
import { observer } from "mobx-react-lite";
import { useRootStore } from '../../providers'


const FeedsPage = observer(() => {
    const { newsStore } = useRootStore();
    useEffect(() => {
        newsStore.getFeeds()
        newsStore.getTopStories()
    }, [newsStore])

    return <FeedsView feeds={newsStore.feeds} topFeeds={newsStore.topFeeds} />
})


export default FeedsPage;


