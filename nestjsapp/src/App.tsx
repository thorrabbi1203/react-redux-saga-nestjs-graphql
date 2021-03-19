import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import AuthPage from './components/src-Auth/'
import Page404 from './components/src-Auth/Page404/Page404'
import Heroes from './components/src-Heroes/index'
import MainPage from './components/src-MainPage'
import { ApplicationState } from './store'
import { User } from './store/user/types'

interface PropsFromState {
  loading: boolean
  data: User
  errors?: string
}

type AllProps = PropsFromState

const RenderBody = () => {
  return (
    <div>
      <Segment>
        <Heroes />
      </Segment>
    </div>
  )
}

class App extends React.Component<AllProps> {
  render() {
    const { data, loading, errors } = this.props
    return (
      <React.Fragment>
        {!data && !errors && <AuthPage />}
        {!loading && data && (
          <MainPage>
            <RenderBody />
          </MainPage>
        )}
        {errors && <Page404 errorBE={errors} location={null} />}
      </React.Fragment>
    )
  }
}
const mapStateToProps = ({ user }: ApplicationState) => ({
  loading: user.loading,
  errors: user.errors,
  data: user.data,
})
export default connect(mapStateToProps)(App)
