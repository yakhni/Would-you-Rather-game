import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/questions'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleOnClick = (e) => {
    e.preventDefault()
    const { history, dispatch, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    dispatch(handleNewQuestion({ optionOneText, optionTwoText, author: authedUser }))
    history.push('/')
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { optionOneText, optionTwoText } = this.state

    return (
      <div>
        <Card>
          <Card.Header className='text-center'>
            <h5>Create new Question</h5>
          </Card.Header>
          <Card.Body>
            <p className='text-center'>Would you Rather...</p>
            <Form.Control type='text' id='optionOneText' placeholder='Enter optionOne Text here' value={optionOneText} onChange={this.onChange} />
            <p className='pt-3 text-center'>-------OR--------</p>
            <Form.Control type='text' id='optionTwoText' placeholder='Enter optionTwo Text here' value={optionTwoText} onChange={this.onChange}/>

            <br />
            <Button variant='info' onClick={this.handleOnClick} block>Submit</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(NewQuestion)
