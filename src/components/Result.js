import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Result extends Component {
  render() {
    const { askedBy, myAnswer, otherAnswer, myVotes, otherVotes, totalVotes } = this.props
    const myPercentVote = Math.round((myVotes/totalVotes) * 100)
    const otherPercentVote = Math.round((otherVotes/totalVotes) * 100)

    return (
      <div className='pt-5'>
        <Card>
          <Card.Header>
            Asked by {askedBy}
          </Card.Header>
          <Card.Body>
            <Card border='info'>
              <Card.Body>
                <p>You'd rather {myAnswer}</p>
                <ProgressBar
                  variant='info'
                  className="progress"
                  striped label={`${myPercentVote}%`}
                  now={myPercentVote}
                />
                <p className='text-center'><small>{myVotes} out of {totalVotes} votes</small></p>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <p>People who'd rather {otherAnswer}</p>
                <ProgressBar
                  variant='info'
                  className="progress"
                  striped label={`${otherPercentVote}%`}
                  now={otherPercentVote}
                />
                <p className='text-center'><small>{otherVotes} out of {totalVotes} votes</small></p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
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
    totalVotes: differentResponse + sameResponse,
    askedBy: users[questions[qid].author].name
  }
}
export default connect(mapStateToProps)(Result)
