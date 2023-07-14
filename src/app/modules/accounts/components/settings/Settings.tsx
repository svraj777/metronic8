import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'
import {TablesWidget10} from '../../../../../_metronic/partials/widgets'

export function Settings() {
  return (
    <>
      <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      <ProfileDetails />
    </>
  )
}
