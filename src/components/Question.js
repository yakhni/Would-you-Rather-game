import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/users'

class Question extends Component {
  state = {
    selected: ''
  }

  handleOnChange = (e) => {
    if (!e.target.value)
      return

    this.setState({
      selected: e.target.value
    })
  }

  handleOnClick = (e) => {
    // console.log('handleSubmit')
    e.preventDefault()
    const { dispatch, qid, authedUser } = this.props
    dispatch(handleSaveAnswer(authedUser, qid, this.state.selected))
    // console.log('Submitting ', this.state)
  }

  render() {
    // console.log('Question props: ', this.props)
    const { qid, question } = this.props
    return (
      <div>
        <h2>Would you rather... </h2>
        <p>
          <label>
            <input type='radio' name={qid} value='optionOne' onChange={this.handleOnChange}/>
            {question.optionOne.text}
          </label>
        </p>
        <p>
          <label>
            <input type='radio' name={qid} value='optionTwo' onChange={this.handleOnChange}/>
            {question.optionTwo.text}
          </label>
        </p>
        <button type='button' onClick={this.handleOnClick}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }, {qid}) {
  return {
    qid,
    authedUser,
    question: questions[qid]
  }
}
export default connect(mapStateToProps)(Question)
