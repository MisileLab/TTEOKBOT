const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (TTEOGBOT, message, query) => {
    message.guild.parents.create(`TICKETS`)
}

exports.callSign = ['test']
exports.helps = {
    OwnerCheck: true
}
