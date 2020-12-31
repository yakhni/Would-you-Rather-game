import Login from './Login'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import handleInitialData from '../actions/initial'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true
         ? null
         : <Login />
        }
      </div>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {loading: authedUser === null}
}
export default connect(mapStateToProps)(App)
