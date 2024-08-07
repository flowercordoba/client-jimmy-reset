import React from 'react'
import SocialCard from './SocialCard'
import HistoriePages from '../../../modules/histories/HistoriePages'

const FeedPost = () => {
  return (
    <div className='w-100 flex-lg-row-fluid mx-lg-13'>
        <SocialCard />
        <HistoriePages />
    </div>
  )
}

export default FeedPost