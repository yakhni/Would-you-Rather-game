import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Result from './Result'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class QuestionsList extends Component {

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props

    return (
      <div>
        <Tabs defaultActiveKey="unanswered">

          <Tab eventKey="unanswered" title="Unanswered">
            {unansweredQuestions.map(
              qid => <Question qid={qid} key={qid} />)}
          </Tab>
          <Tab eventKey="answered" title="Answered">
            {answeredQuestions.map(
              qid => <Result qid={qid} key={qid} />)}
          </Tab>

        </Tabs>
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
