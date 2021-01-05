import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCompact from './QuestionCompact'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class QuestionsList extends Component {

  render() {
    const { answered, unanswered} = this.props

    return (
      <div>
        <Tabs defaultActiveKey="unanswered">

          <Tab eventKey="unanswered" title="Unanswered">
            {unanswered.map(qid =>
              <QuestionCompact qid={qid} key={qid} />)}
          </Tab>
          <Tab eventKey="answered" title="Answered">
            {answered.map(qid =>
              <QuestionCompact qid={qid} key={qid} />)}
          </Tab>

        </Tabs>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answered = authedUser
    ? Object.keys(users[authedUser].answers)
      .sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
    : []

  const unanswered = authedUser
    ? Object.keys(questions)
        .filter(q => !answered.includes(q))
        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
    : []

  return {
    answered: answered,
    unanswered: unanswered
  }
}
export default connect(mapStateToProps)(QuestionsList)
