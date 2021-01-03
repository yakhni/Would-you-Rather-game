import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    const { myAnswer, otherAnswer, myVotes, otherVotes, totalVotes } = this.props

    return (
      <div>
        <h2>You Answered</h2>
        <p>You'd rather {myAnswer}</p>
        <p>{myVotes} out of {totalVotes} votes</p>

        <p>You'd rather {otherAnswer}</p>
        <p>{otherVotes} out of {totalVotes} votes</p>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { qid }) {
    const option = users[authedUser].answers[qid]
    const optionOneText = questions[qid]['optionOne'].text
    const optionTwoText = questions[qid]['optionTwo'].text

    let sameResponse = 0
    let differentResponse = 0

    for (const user of Object.keys(users)) {
      if (Object.keys(users[user].answers).includes(qid)) {
        users[user].answers[qid] === option
          ? ++sameResponse
          : ++differentResponse
      }
    }

  return {
    myAnswer: option === 'optionOne' ? optionOneText : optionTwoText,
    otherAnswer: option === 'optionOne' ? optionTwoText : optionOneText,
    myVotes: sameResponse,
    otherVotes: differentResponse,
    totalVotes: differentResponse + sameResponse
  }
}
export default connect(mapStateToProps)(Result)
