import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleOnClick = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    dispatch(handleNewQuestion({ optionOneText, optionTwoText, author: authedUser }))
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { optionOneText, optionTwoText } = this.state

    return (
      <div>
        <h1>Create new Question</h1>
        <h2>Would you Rather...</h2>
        <input type='text' id='optionOneText' placeholder='Enter optionOne Text here' value={optionOneText} onChange={this.onChange} />
        <p>OR</p>
        <input type='text' id='optionTwoText' placeholder='Enter optionTwo Text here' value={optionTwoText} onChange={this.onChange}/>
        <button type='button' onClick={this.handleOnClick}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(NewQuestion)
