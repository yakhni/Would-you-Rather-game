import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Question from './Question'

class QuestionDetail extends Component {

  render() {
    const { qid, isAnswered } = this.props
    return isAnswered
      ? <Result   qid={qid} />
      : <Question qid={qid} />
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { qid } = props.match.params

  return {
    qid,
    isAnswered: Object.keys(users[authedUser].answers).includes(qid)
  }
}
export default connect(mapStateToProps)(QuestionDetail)
