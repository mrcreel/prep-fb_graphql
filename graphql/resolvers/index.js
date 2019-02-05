const bcrypt = require('bcryptjs')

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
      let createdTeam
      const result = await team
        .save()
      createdTeam = {
        ...result._doc,
        _id: result.id
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      throw err
    }
    return team
  }
}