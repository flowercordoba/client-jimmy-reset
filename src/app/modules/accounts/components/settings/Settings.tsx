import {ProfileDetails} from './cards/ProfileDetails'
import { Content } from '../../../../../features/layout/components/content'
// import { DeactivateAccount } from './cards/DeactivateAccount'
import { Notifications } from './cards/Notifications'
import Education from './cards/Education'
import Location from './cards/Location'
import InfoGeneral from './cards/InfoGeneral'

export function Settings() {
  return (
    <Content>
      < InfoGeneral/>
      <Education />
      <Location />
      <ProfileDetails />
      <Notifications />
      {/* <DeactivateAccount /> */}
    </Content>
  )
}
