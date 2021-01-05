import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withRouter } from 'react-router-dom'

class QuestionCompact extends Component {
  handleOnClick = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { qid, questionText, avatar, author } = this.props
    return (
      <div className='pt-2'>
        <Card>
          <Card.Header as="h5">{ author } asks ...</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Image src={ avatar } roundedCircle fluid />
                </Col>
                <Col lg={9} md={9} sm={9} xs={9} >
                  Would you rather
                  <p>
                    ... { questionText } ...
                  </p>
                </Col>
              </Row>
            </Container>

            <Button
              variant='info'
              className='mt-3'
              block
              onClick={e=> this.handleOnClick(e, qid)}>View Poll</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, {qid}) {
  return {
    qid, // TODO: find out if I really need to do this explicitly or is qid passes nonetheless
    questionText: questions[qid].optionOne.text,
    avatar: users[questions[qid].author].avatarURL,
    author: users[questions[qid].author].name
  }
}
export default withRouter(connect(mapStateToProps)(QuestionCompact))
