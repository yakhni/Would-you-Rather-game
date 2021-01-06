import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

class Login extends Component {
  handleOnClick =(e) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(e.target.value))
    const redirect = this.props.location.state ? this.props.location.state.from : '/'
    this.props.history.push(redirect)
  }

  render() {
    const { users } = this.props
    return (
      <Container>
        <Card className='mt-5'>
          <Card.Header className='text-center'><h2>Would you Rather</h2></Card.Header>
          <Card.Body className='text-center'>
            <Image src='https:hackernoon.com/hn-images/1*VeM-5lsAtrrJ4jXH96h5kg.png' className='w-25 mb-5'/>
            <p>Login Page</p>
            <Dropdown>
              <Dropdown.Toggle variant="info">
                Select a User
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.keys(users).map(user => (
                  <Dropdown.Item
                    key={user}
                    as='button'
                    value={user}
                    onClick={this.handleOnClick}>
                  <Image src={users[user].avatarURL} roundedCircle fluid className='menu-avatar mr-3'/>
                    {users[user].name}
                  </Dropdown.Item>))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}
export default withRouter(connect(mapStateToProps)(Login))
