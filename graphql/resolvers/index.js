const Team = require('../../models/team')

module.exports = {
  teams: async () => {
    try {
      const teams = await Team.find()
      return teams.map(team => {
        return {
          ...team._doc,
          _id: team.id
        }
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
      // eslint-disable-next-line no-unused-vars
      let createdTeam
      const result = await team
        .save()
      createdTeam = {
        ...result._doc,
        _id: result.id
      }
    } catch (err) {
      throw err
    }
    return team
  }
}