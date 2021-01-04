import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import handleInitialData from '../actions/initial'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        {this.props.loading === true
        ? null
        : <>
          <Navigation authedUser={loggedInUser} avatar={avatar}/>
          <Container className='mt-5'>
            <Row className="justify-content-md-center">
              <Col />
              <Col md={6}>
                <div>
                  <Route exact path='/' component={QuestionsList} />
                  <Route path='/add' component={NewQuestion} />
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
    avatar: authedUser ? users[authedUser].avatarURL: '',
    authedUser,
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
