import React, {Component} from 'react'

import './Teams.css'
class TeamsPage extends Component {
  render() {
    return(
      <div>
        <ul className="teams-list">
          <li className="teams-list__item">team1</li>
          <li className="teams-list__item">team2</li>
          <li className="teams-list__item">team3</li>
          <li className="teams-list__item">team4</li>
        </ul>
      </div>
    )
  }
}

export default TeamsPage