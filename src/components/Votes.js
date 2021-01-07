import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Votes = ({ answer, percentVote, votes, totalVotes, border }) => (
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

export default Votes
