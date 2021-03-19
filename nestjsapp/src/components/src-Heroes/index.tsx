import './index.scss'

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Table } from 'semantic-ui-react'

import { ApplicationState } from '../../store'
import { createHero, fetchRequest } from '../../store/heroes/actions'
import { Hero } from '../../store/heroes/types'
import { logout } from '../../store/user/actions'
import styled from '../../utils/styled'

interface PropsFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  createHero: typeof createHero
  logout: typeof logout
}
type AllProps = PropsFromState & PropsFromDispatch
const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com'
class HeroesIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { fetchRequest: fr } = this.props
    fr()
  }
  private handleCreateHero = () => {
    const heros = this.props.data
    heros.forEach(i => {
      this.props.createHero(i)
    })
  }
  private renderData() {
    const { loading, data } = this.props

    return (
      <Table.Body>
        {loading && data.length === 0 && (
          <Table.Row>
            <Table.Cell colSpan={4} className="Cell-no-data-msg">
              Loading ....
            </Table.Cell>
          </Table.Row>
        )}
        {data.map((hero, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>
              <HeroDetail>
                <HeroIcon src={API_ENDPOINT + hero.icon} alt={hero.name} />
                <HeroName>
                  <Link to={`/heroes/${hero.name}`}>{hero.localized_name}</Link>
                </HeroName>
              </HeroDetail>
            </Table.Cell>
            <Table.Cell>{hero.pro_pick || 0}</Table.Cell>
            <Table.Cell>{hero.pro_ban || 0}</Table.Cell>
            <Table.Cell>{hero.pro_win || 0}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    )
  }
  public render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Hero</Table.HeaderCell>
            <Table.HeaderCell>Pick</Table.HeaderCell>
            <Table.HeaderCell>Ban</Table.HeaderCell>
            <Table.HeaderCell>Win</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.renderData()}
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={this.handleCreateHero}
              >
                <Icon name="user" /> Add User
              </Button>
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                onClick={this.props.logout}
              >
                <Icon name="user" /> Log out
              </Button>
              <Button size="small">Approve</Button>
              <Button disabled size="small">
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}
const mapStateToProps = ({ heroes }: ApplicationState) => ({
  loading: heroes.loading,
  errors: heroes.errors,
  data: heroes.data,
})
const mapDispatchToProps = {
  fetchRequest,
  createHero,
  logout,
}

const HeroDetail = styled('div')`
  display: flex;
  align-items: center;
`

const HeroIcon = styled('img')`
  width: 32px;
  height: 32px;
`

const HeroName = styled('div')`
  flex: 1 1 auto;
  height: 100%;
  margin-left: 1rem;

  a {
    color: black;
  }
`

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps, mapDispatchToProps)(HeroesIndexPage)
