import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import handleInitialData from '../actions/initial'
import QuestionsList from './QuestionsList'
import NewQuestion from './NewQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    <div>
      <LoadingBar />
      <Router>
        <Nav />
        {this.props.loading === true
          ? null
          : <div>
              <Route exact path='/' component={QuestionsList} />
              <Route path='/new' component={NewQuestion} />
            </div>
        }
      </Router>
    </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {loading: authedUser === null}
}
export default connect(mapStateToProps)(App)
