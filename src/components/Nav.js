import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Navigation extends Component {
  handleOnClick = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(''))
    this.props.history.push('/')
  }

  render() {
    const { avatar, authedUser } = this.props
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>Would You Rather?</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/add'>
              New Question
            </Nav.Link>
            <Nav.Link as={Link} to='/leaderboard'>
              Leaderboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          <Image src={avatar} roundedCircle fluid className='menu-avatar mr-2 mb-1'/>
          {authedUser? `Hello, ${authedUser}`: ''}
        </Navbar.Text>
        <Button variant='info' onClick={this.handleOnClick} className='ml-3'>Logout</Button>
      </Navbar>
    )
  }
}

export default withRouter(connect()(Navigation))
