import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Result from './Result'

class QuestionsList extends Component {

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props

    return (
      <div>
        <h1>Answered Questions</h1>
        {answeredQuestions.map(
          qid => <Result qid={qid} key={qid} />)}
        <hr/>
        <h1>Unanswered Questions</h1>
        {unansweredQuestions.map(
          qid => <Question qid={qid} key={qid} />)}
        <hr/>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answered = authedUser ? Object.keys(users[authedUser].answers) : []
  return {
    answeredQuestions: answered,
    unansweredQuestions: answered
      ? Object.keys(questions).filter(q => !answered.includes(q))
      : []
  }
}
export default connect(mapStateToProps)(QuestionsList)
