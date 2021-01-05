import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/initial'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    <div>
      App
    </div>
    )
  }
}

export default connect()(App)
