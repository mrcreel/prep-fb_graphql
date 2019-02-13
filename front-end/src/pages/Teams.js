import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './Teams.css'
class TeamsPage extends Component {

  state = {
    teams: []
  }

  componentDidMount(){
    this.FetchTeams()
  }

  FetchTeams() {
    const requestBody = {
      query: `
        query{
          teams{
            _id
            name
            url
            slug
            status
          }
        }
      `
    }
    fetch('http://localhost:8000/graphql',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData)
      const teams = resData.data.teams
      this.setState({ teams: teams })
    })
  }

  render() {
    const teamList = this.state.teams.map(team => {
      return(
        <li key={team._id} className="teams-list__item">
          <Link to={`/team/${team.slug}`} className="link">
              {team.name}
          </Link>
        </li>
      )
    })
    return(
      <React.Fragment>
         <ul className="teams-list">{teamList}</ul>
      </React.Fragment>
    )
  }
}

export default TeamsPage