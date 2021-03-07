const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const commands = require('./')
const db = require('quick.db')

module.exports.run = async (TTEOGBOT, message, query) => {
    var user = message.mentions.users.first() || message.author
    var level = db.get(`길드_${message.guild.id}_level_${user.id}`) || 1
    level = level.toString()
    let xp = db.get(`길드_${message.guild.id}_xp_${user.id}`) || 1
    var xpNeeded = level * 200
    let every = db
        .all()
        .filter(i => i.ID.startsWith(`길드_${message.guild.id}_xptotal_`))
        .sort((a, b) => b.data - a.data)
    var rank = every.map(x => x.ID).indexOf(`길드_${message.guild.id}_xptotal_${user.id}`) + 1
    rank = rank.toString()
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}님의 레벨!`)
    .setTitle(`레벨 : ${level}\nXP : ${xp.toString()} / ${xpNeeded}`)
    .setDescription("순위 : " + rank + "위!")
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL({ format: "png" }))
    .setColor("RANDOM");
    return message.channel.send(embed)
}

exports.callSign = ['레벨', '레벨확인', 'rank', 'level', 'xp']
exports.helps = {
    description: '레벨을 보여줍니다.\n',
    uses: '레벨'
}