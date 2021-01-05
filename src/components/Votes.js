import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Votes extends Component {
  render() {
    const { answer, percentVote, votes, totalVotes, border } = this.props
    return (
      <Card.Body>
        <Card border={border}>
          <Card.Body>
            <p>You'd rather {answer}</p>
            <ProgressBar
              variant='info'
              className="progress"
              striped label={`${percentVote}%`}
              now={percentVote}
            />
            <p className='text-center'><small>{votes} out of {totalVotes} votes</small></p>
          </Card.Body>
        </Card>
      </Card.Body>
    )
  }
}

export default Votes
