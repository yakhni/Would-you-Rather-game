import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import handleInitialData from '../actions/initial'
import QuestionDetail from './QuestionDetail'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'
import { ProtectedRoute } from './ProtectedRoute'

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
        <Navigation authedUser={loggedInUser} avatar={avatar}/>
        <Container className='mt-5'>
          <Row className="justify-content-md-center">
            <Col />
            <Col md={6}>
              <div>
                <Switch>
                  <Route path='/login' authedUser={authedUser} component={Login} />
                  <ProtectedRoute path='/questions/:qid' authedUser={authedUser} Component={QuestionDetail} />
                  <ProtectedRoute exact path='/' authedUser={authedUser} Component={QuestionsList} />
                  <ProtectedRoute path='/add' authedUser={authedUser} Component={NewQuestion} />
                  <ProtectedRoute path='/leaderboard' authedUser={authedUser} Component={Leaderboard} />
                  <ProtectedRoute path='*' authedUser={authedUser} Component={NotFound} />
                </Switch>
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
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
