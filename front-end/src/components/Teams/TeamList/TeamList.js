import React from 'react'

import TeamItem from './TeamItem/TeamItem'
import './TeamList.css'

const teamList = props =>{
  const teams = props.teams.map(team => {
    return <TeamItem teamId={team._id} slug={team.slug} name={team.name}/>
  })
  return (<ul className="team__list">{teams}</ul>)
}

export default teamList