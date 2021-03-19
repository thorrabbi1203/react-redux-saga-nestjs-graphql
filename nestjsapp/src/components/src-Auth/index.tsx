import './Anonymous.scss'

import { observer } from 'mobx-react'
import React from 'react'

import Login from './Login'

@observer
class Anonymous extends React.Component {
  state = {
    open: false,
  }
  openModal = isOpen => {
    this.setState({ open: !isOpen })
    if (isOpen) {
      alert(isOpen)
    }
  }
  renderLoginForm = () => {
    return <Login stateProps={this.state.open} functionProps={this.openModal} />
  }

  render() {
    const addr: string =
      'Hutech University, Điện Biên Phủ, Phường 25, Bình Thạnh, Ho Chi Minh City'
    const map: string = `https://www.google.com/maps?q=${addr.replace(
      /[^\d\w]+/g,
      '+',
    )}`
    return (
      <div className="Anonymous">
        <div className="Anonymous-Content">
          <div className="Anonymous-Children">{this.renderLoginForm()}</div>
          <div className="Anonymous-Footer">
            <div className="Anonymous-FooterItem">
              <div className="text-bold">Powered by:</div>
              <div className="text-secondary">Bunny here for HoAn</div>
              <div className="text-secondary">EIN: 12 345 678 901</div>
              <div className="text-secondary">
                Copyright &copy; {new Date().getFullYear()}
              </div>
            </div>
            <div className="Anonymous-FooterItem">
              <div className="text-bold">Head office:</div>
              <a
                className="text-secondary text-underline"
                target="_blank"
                rel="noopener noreferrer"
                href={map}
              >
                {addr}
              </a>
              <div className="text-secondary">This is Information</div>
              <div className="text-secondary">Information</div>
            </div>
            <div className="Anonymous-FooterItem">
              <div className="text-bold">Phone:</div>
              <div className="text-secondary">1234 56789</div>
              <div className="text-bold">Fax:</div>
              <div className="text-secondary">0987 654321</div>
            </div>
          </div>
        </div>
        <div className="Anonymous-Sidebar">
          <div className="Anonymous-NestJsApp">
            <div className="Anonymous-NestJsAppLogo" />
            <div className="Anonymous-NestJsAppTitle" />
            <div className="Anonymous-NestJsAppPowered" />
            <div className="Anonymous-NestJsAppSologan" />
          </div>
        </div>
      </div>
    )
  }
}

export default Anonymous
