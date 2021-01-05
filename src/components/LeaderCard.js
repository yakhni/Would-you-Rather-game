import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class LeaderCard extends Component {
  render() {
    const { user, answered, posted } = this.props
    return (
      <Card className='mb-3'>
        <Card.Body>
            <Row>
              <Col className='align-self-center'>
                <Image src={user.avatarURL} roundedCircle fluid className='w-75' />
              </Col>

              <Col className='align-self-center'>
                <h5>{user.name}</h5>
                <p>Answered {answered}</p>
                <p>Posted {posted}</p>
              </Col>

              <Col className='align-self-center'>
                <Card>
                  <Card.Header>
                    <div className='text-center'>
                      Score
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className='text-center'>
                      {answered+posted}
                    </div>
                  </Card.Body>

                </Card>
              </Col>
            </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default LeaderCard
