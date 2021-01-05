import React, { Component } from 'react'
import LeaderCard from './LeaderCard'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users, numQuestions, numAnswers, scoreDict, scoreList } = this.props
    return (
      <>
        {scoreList.map((s) => scoreDict[s].map(userId => (
          <LeaderCard
            key={userId}
            user={users[userId]}
            answered={numAnswers[userId]}
            posted={numQuestions[userId]} />
        )))}
      </>
    )
  }
}

function mapStateToProps({ users }) {

  let numQuestions = {}
  let numAnswers = {}
  let scoreDict = {}

  for (const user of Object.keys(users)) {
    const u = users[user]
    numQuestions[u.id] = u.questions.length
    numAnswers[u.id] = Object.keys(u.answers).length
    const score = numAnswers[u.id] + numQuestions[u.id]

    if (Object.keys(scoreDict).includes(score.toString())){
      scoreDict[score].push([user])
    } else {
      scoreDict[score] = [user]
    }
  }

  return {
    users,
    numQuestions: numQuestions,
    numAnswers: numAnswers,
    scoreDict: scoreDict,
    scoreList: Object.keys(scoreDict).sort((a, b) => b - a)
  }
}
export default connect(mapStateToProps)(Leaderboard)
