import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/users'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Question extends Component {
  state = {
    selected: ''
  }

  handleOnChange = (e) => {
    if (!e.target.value)
      return

    this.setState({
      selected: e.target.value
    })
  }

  handleOnClick = (e) => {
    e.preventDefault()
    const { dispatch, qid, authedUser } = this.props
    dispatch(handleSaveAnswer(authedUser, qid, this.state.selected))
  }

  render() {
    const { qid, question, avatar, author } = this.props
    return (
      <div className='pt-5'>
        <Card>
          <Card.Header as="h5">{author} asks ...</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <Image src={avatar} roundedCircle fluid />
                </Col>
                <Col lg={9} md={9} sm={9} xs={9} >
                  Would you rather...
                  {['optionOne', 'optionTwo'].map(option => (
                    <Form.Check
                      key={qid + option}
                      type='radio'
                      label={question[option].text}
                      name={qid}
                      value={option}
                      onChange={this.handleOnChange}
                    />
                  ))}
                </Col>
              </Row>

            </Container>

            <Button
              variant='info'
              className='mt-3'
              block
              onClick={this.handleOnClick}>Submit</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }, {qid}) {
  return {
    qid,
    authedUser,
    question: questions[qid],
    avatar: users[questions[qid].author].avatarURL,
    author: users[questions[qid].author].name
  }
}
export default connect(mapStateToProps)(Question)
