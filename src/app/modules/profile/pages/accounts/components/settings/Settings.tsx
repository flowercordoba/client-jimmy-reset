import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {Notifications} from './cards/Notifications'
import { Content } from '../../../../../_metronic/layout/components/content'

export function Settings() {
  return (
    <Content>
      <ProfileDetails />
      <SignInMethod />
      {/* <ConnectedAccounts /> */}
      {/* <EmailPreferences /> */}
      <Notifications />
      {/* <DeactivateAccount /> */}
    </Content>
  )
}
