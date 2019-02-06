const Team = require('../../models/team')

const transformTeam = team => {
  return {
    ...team._doc,
    _id: team.id
  }
}

module.exports = {
  teams: async () => {
    try {
      const teams = await Team.find()
      return teams.map(team => {
        return transformTeam(team)
      })
    } catch (err) {
      throw err
    }
  },
  createTeam: async args => {
    const team = new Team({
      slug: args.teamInput.slug,
      name: args.teamInput.name,
      url: args.teamInput.url,
      status: args.teamInput.status,
    })
    try {
      const result = await team
        .save()
      transformTeam(result)
    } catch (err) {
      throw err
    }
    return team
  }
}