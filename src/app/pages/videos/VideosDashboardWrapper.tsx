import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const VideosDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Videos</div>
    </Content>
  </>
)

const DashboardWrapperVideos: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Videos' })}</PageTitle>
      <VideosDashboardWrapper />
    </>
  )
}

export { DashboardWrapperVideos }
