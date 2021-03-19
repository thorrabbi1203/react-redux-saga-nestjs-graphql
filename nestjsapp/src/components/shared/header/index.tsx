import './index.scss'

import React from 'react'
import { Segment } from 'semantic-ui-react'

import Banner from './Banner'
import Header from './Header'

interface menuOpt {
  id: number
  value: string
  icon: string
  pathName: string
}

type Iprops = {
  menuOpts: menuOpt[]
  mobile: boolean
  hasBanner: boolean
  clickFunction: () => void
  clickRefreshToken: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class HomePageHeader extends React.Component<Iprops> {
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
    hasBanner: true,
  }
  render() {
    return (
      <div>
        {this.props.hasBanner ? (
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Header
              menuOpts={this.props.menuOpts}
              clickFunction={this.props.clickFunction}
              clickRefreshToken={this.props.clickRefreshToken}
            />
            <Banner />
          </Segment>
        ) : (
          <Header
            menuOpts={this.props.menuOpts}
            clickFunction={this.props.clickFunction}
            clickRefreshToken={this.props.clickRefreshToken}
          />
        )}
      </div>
    )
  }
}
