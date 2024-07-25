import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const FeedDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Feed</div>
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
