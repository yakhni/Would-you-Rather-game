import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import handleInitialData from '../actions/initial'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loggedInUser, avatar, authedUser } = this.props
    return (
    <>
      <LoadingBar />
      <Router>
        {authedUser === ''
        ? <>
          <Route exact path='/' component={Login} />
          <Redirect to='/' />
          </>

        : <>
          <Navigation authedUser={loggedInUser} avatar={avatar}/>
          <Container className='mt-5'>
            <Row className="justify-content-md-center">
              <Col />
              <Col md={6}>
                <div>
                  <Route exact path='/' component={QuestionsList} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div>
              </Col>
              <Col />
            </Row>
          </Container>
          </>
        }
      </Router>
    </>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    loggedInUser: authedUser ? users[authedUser].name : '',
    avatar: authedUser ? users[authedUser].avatarURL: '',
    authedUser
  }
}
export default connect(mapStateToProps)(App)
