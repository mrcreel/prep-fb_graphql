import React from 'react'
import {Link} from 'react-router-dom'

import './teamItem.css'

const teamItem = props => {
  return (
    <li key={props.teamId} className="team-list__item">
      <Link to={`/team/${props.slug}`} className="link">{props.name}</Link>
    </li>
  )
}

export default teamItem