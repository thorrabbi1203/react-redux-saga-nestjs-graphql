import './index.scss'

import gql from 'graphql-tag'
import React from 'react'
import { connect } from 'react-redux'
// import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import {
  // Button,
  Checkbox,
  Container,
  Divider,
  Form,
  Input,
  InputOnChangeData,
} from 'semantic-ui-react'

import { ApplicationState } from '../../store'
import { handleRouterNavigate } from '../../store/router/action'
import { fetchRequest } from '../../store/user/actions'
import { User } from '../../store/user/types'
import CustomButton from '../shared/button'

export const GET_USER = gql`
  query searchUser($id: Float!) {
    getUser(id: $id) {
      id
      email
    }
  }
`

interface PropsFromState {
  loading: boolean
  data: User
  errors?: string
}
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  handleRouterNavigate: typeof handleRouterNavigate
}

type Props = {
  stateProps: boolean
  functionProps: (p: boolean) => void
}

type AllProps = PropsFromState & PropsFromDispatch & Props
const Login: React.FC<AllProps> = props => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [userLogin, setUserLogin] = React.useState({
    userName: 'admin1@gmail.com',
    password: '12341234',
  })

  const handleLogin = async () => {
    await props.fetchRequest({
      email: userLogin.userName,
      password: userLogin.password,
    })
  }

  const handleOpenModal = () => {
    // props.functionProps(props.stateProps)
    props.handleRouterNavigate('/testNavigate')
  }

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData,
  ) => {
    setUserLogin({ ...userLogin, [name]: value })
  }
  const handleShowPassword = () => {
    const isShow = showPassword
    setShowPassword(!isShow)
  }
  return (
    <React.Fragment>
      <div className="Container">
        <Form>
          <Form.Field>
            <label>First Name</label>
            <Input
              placeholder="Username"
              value={userLogin.userName}
              name="userName"
              onChange={handleChange}
              // disabled={loadingUser}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input
              placeholder="Password"
              name="password"
              action={{
                color: 'teal',
                icon: 'eye',
                onClick: () => handleShowPassword(),
              }}
              type={!showPassword ? 'password' : ''}
              value={userLogin.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field>
          <Container textAlign="right">
            <CustomButton onClick={handleLogin} label="Sign In" />
            <CustomButton label="Sign Up" onClick={handleOpenModal} />
          </Container>
        </Form>

        <Divider />
        <Container textAlign="left">
          <div>
            <Link style={{ fontSize: '16px' }} to="#">
              Forgot Password
            </Link>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ user }: ApplicationState) => ({
  loading: user.loading,
  errors: user.errors,
  data: user.data,
})
const mapDispatchToProps = {
  fetchRequest,
  handleRouterNavigate,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
