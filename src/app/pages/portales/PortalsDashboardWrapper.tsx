import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const PortalesDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Portales</div>
    </Content>
  </>
)

const DashboardWrapperPortales: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Portales' })}</PageTitle>
      <PortalesDashboardWrapper />
    </>
  )
}

export { DashboardWrapperPortales }
