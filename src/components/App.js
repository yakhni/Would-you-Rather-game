import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import handleInitialData from '../actions/initial'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <div>App</div>
        }
    </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {loading: authedUser === null}
}
export default connect(mapStateToProps)(App)
