/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'

// import {getUsers, getVehical, postVehical} from '../../modules/auth/redux/AuthCRUD'
import UserPage from './UserPage'

const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

// const userSchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
// })

const UserWrapper = () => {
  //  const intl = useIntl()
  // const myRefname = useRef(null)

  // const isAuthorized = useSelector(({auth}) => auth.accessToken)
  const [data, setData] = useState()

  return (
    <>
      <PageTitle breadcrumbs={widgetsBreadCrumbs}>{'Users'.toUpperCase()}</PageTitle>
      <UserPage data={data} setData={setData} />
    </>
  )
}

export default UserWrapper
