import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/users'
import Form from 'react-bootstrap/Form';
import Cardify from './Cardify'
import NotFound from './NotFound';

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
    const { handleSaveAnswer, qid, authedUser } = this.props
    handleSaveAnswer(authedUser, qid, this.state.selected)
  }

  render() {
    const { qid, question, avatar, author } = this.props

    return (!question) ? < NotFound /> : (
      <Cardify
        avatar={avatar}
        author={author}
        btnText='Submit'
        btnHandler={this.handleOnClick}
        cardBody={['optionOne', 'optionTwo'].map(option => (
          <Form.Check
            key={qid + option}
            type='radio'
            label={question[option].text}
            name={qid}
            value={option}
            onChange={this.handleOnChange} />))
            }
          />
    )
  }
}

function mapStateToProps({ questions, authedUser, users }, { qid } ) {
  return {
    qid,
    authedUser,
    question: questions[qid],
    author: questions[qid]? users[questions[qid].author] : null,
  }
}
export default connect(mapStateToProps,  { handleSaveAnswer } )(Question)
