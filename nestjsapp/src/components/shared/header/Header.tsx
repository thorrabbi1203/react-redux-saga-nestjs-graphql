import React from 'react'
import { Button, Container, Image, Input, Menu } from 'semantic-ui-react'

import src from '../../assets/github/angular.png'

interface menuOpt {
  id: number
  value: string
  icon: string
  pathName: string
}

type Props = {
  menuOpts: menuOpt[]
  clickFunction: () => void // Or (event: React.MouseEvent<HTMLButtonElement>) => void;
  // if u want to use event onclick such as event.preventDefault()
  clickRefreshToken: (event: React.MouseEvent<HTMLButtonElement>) => void
  mobile: boolean
}

class HeaderComponent extends React.Component<Props> {
  static defaultProps = {
    menuOpts: [
      {
        id: 0,
        value: 'Home Page',
        icon: 'Home Page',
        pathName: '#',
      },
    ],
    mobile: false,
  }
  render() {
    return (
      <Menu fixed="top" size="large" inverted className="Header">
        <Menu.Item as="div" header className="Header-logo">
          <Image size="mini" src={src} style={{ marginRight: '1.5em' }} />
          Angular
        </Menu.Item>
        <Menu.Menu position="left">
          <Input className="Header-input" icon="search" />
        </Menu.Menu>
        {this.props.menuOpts.map(i => (
          <Menu.Item className="Header-item" key={i.id} as="a" to={i.pathName}>
            {i.value}
          </Menu.Item>
        ))}
        <Container as="div" />
        <Menu.Item position="right">
          <Button as="a" onClick={this.props.clickFunction}>
            Log out
          </Button>
          <Button
            as="a"
            onClick={this.props.clickRefreshToken}
            primary={true}
            style={{ marginLeft: '0.5em' }}
          >
            Refresh Token
          </Button>
        </Menu.Item>
      </Menu>
    )
  }
}

export default HeaderComponent
