import './index.scss'

import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  label: string
  onClick: () => void
}
@observer
class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    label: 'Button',
    onClick: () => alert('hello'),
  }
  render() {
    const { label, onClick } = this.props
    return (
      <Link
        to="#"
        className="button"
        style={{ fontSize: '14px', padding: '15px 30px' }}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </Link>
    )
  }
}

export default Button
