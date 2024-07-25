import { FC } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../features/layout/core';
// import { ToolbarWrapper } from '../../../features/layout/components/toolbar';
import { Content } from '../../../features/layout/components/content';


const DashboardPage: FC = () => (
  <>
    {/* <ToolbarWrapper /> */}
    <Content>
      <div>MENU FEED</div>
    </Content>
  </>
);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
