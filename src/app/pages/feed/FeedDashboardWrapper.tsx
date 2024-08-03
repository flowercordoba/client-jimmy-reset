import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { PageTitle } from '../../../features/layout/core'
import Feedpage from './components/Feedpage'


const FeedDashboardWrapper: FC = () => (
  
  <>
    <Content>
      <Feedpage />
    </Content>
  </>
)

const DashboardWrapperFeed: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Feed' })}</PageTitle>
      <FeedDashboardWrapper />
    </>
  )
}

export { DashboardWrapperFeed }
