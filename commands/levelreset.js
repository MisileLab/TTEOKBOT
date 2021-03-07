const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require('../utils/embed')

exports.run = async (TTEOGBOT, message, channel, msg) => {
    let user = message.mentions.members.first() || message.author
    if(!user) {
        error.wrongcmd(message, "`T_레벨초기화 @유저`")
    }
    db.delete(`길드_${message.guild.id}_xp_${user.id}`)
    db.delete(`길드_${message.guild.id}_level_${user.id}`)
    db.delete(`길드_${message.guild.id}_xptotal_${user.id}`)
    message.channel.send('초기화 되었습니다.')
}


exports.callSign = ['레벨초기화']
exports.helps = {
    OwnerCheck: true
}
