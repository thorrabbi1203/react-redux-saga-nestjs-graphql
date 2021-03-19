import './index.scss'

import React, { ReactNode } from 'react'
import { connect } from 'react-redux'

import { ApplicationState } from '../../store'
import { logout, refreshToken } from '../../store/user/actions'
import { User } from '../../store/user/types'
import Footer from '../shared/footer'
import Header from '../shared/header'

const menuOpts = [
  {
    id: 0,
    value: 'Home Page',
    icon: 'Home Page',
    pathName: '#',
  },
  {
    id: 1,
    value: 'Work',
    icon: 'work',
    pathName: '#',
  },
  {
    id: 2,
    value: 'Company',
    icon: 'company',
    pathName: '#',
  },
  {
    id: 3,
    value: 'Careers',
    icon: 'careers',
    pathName: '#',
  },
]

interface PropsFromState {
  loading: boolean
  data: User
  errors?: string
}
interface PropsFromDispatch {
  logout: typeof logout
  refreshToken: typeof refreshToken
}
type Props = {
  children: ReactNode
}
type AllProps = Props & PropsFromDispatch & PropsFromState
const MainPage: React.FC<AllProps> = ({ children, logout, refreshToken }) => {
  //Missing props logout
  return (
    <div>
      <Header
        menuOpts={menuOpts}
        mobile={true}
        clickFunction={logout}
        clickRefreshToken={refreshToken}
      />
      {children}
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ user }: ApplicationState) => ({
  loading: user.loading,
  errors: user.errors,
  data: user.data,
})
const mapDispatchToProps = {
  logout,
  refreshToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
