import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cardify from './Cardify'
import Votes from './Votes'

class Result extends Component {
  render() {
    const { author, myAnswer, otherAnswer, myVotes, otherVotes, totalVotes } = this.props
    const myPercentVote = Math.round((myVotes/totalVotes) * 100)
    const otherPercentVote = Math.round((otherVotes/totalVotes) * 100)

    return (
      <Cardify
        author={author}
        cardBody = {
          <>
            <Votes
              answer={myAnswer}
              percentVote={myPercentVote}
              votes={myVotes}
              totalVotes={totalVotes}
              border='info' />
            <Votes
              answer={otherAnswer}
              percentVote={otherPercentVote}
              votes={otherVotes}
              totalVotes={totalVotes} />
          </>
        }
      />
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
    totalVotes: differentResponse + sameResponse,
    author: users[questions[qid].author]
  }
}

export default connect(mapStateToProps)(Result)
