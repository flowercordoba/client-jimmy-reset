import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const GruposDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Grupos</div>
    </Content>
  </>
)

const DashboardWrapperGrupos: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Grupos' })}</PageTitle>
      <GruposDashboardWrapper />
    </>
  )
}

export { DashboardWrapperGrupos }
