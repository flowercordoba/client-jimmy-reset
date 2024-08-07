import React from 'react'
import SocialCard from './SocialCard'
import HistoriePages from '../../../modules/histories/HistoriePages'
import BlogList from '../../../modules/apps/blog/components/BlogList'

const FeedPost = () => {
  return (
    <div className='w-100 flex-lg-row-fluid mx-lg-13'>
        <SocialCard />
        <HistoriePages />
        <BlogList />
    </div>
  )
}

export default FeedPost