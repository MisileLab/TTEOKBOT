const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err)
})

module.exports.run = async(client, message) => {
    db.serialize()
    db.all(`SELECT * FROM data WHERE guild_id = '${message.guild.id}'`, (err, rows) => {
        let annch = rows[0].notice_id
        let logch = rows[0].log_id
        let welch = rows[0].custom_id                                 
        if (annch === "1234") { annch.replace(/1234/g, "설정되지 않았어요!") } else { global.annch = annch }
        if (logch === "1234") { logch.replace(/1234/g, "설정되지 않았어요!") } else { global.logch = logch }
        if (welch === "1234") { welch.replace(/1234/g, "설정되지 않았어요!") } else { global.welch = welch }
    const { guild } = message
    
    const { name, region, memberCount, owner } = guild
    let bot = message.guild.members.cache.filter(m => m.user.bot).size
    let guildmembers = message.guild.memberCount
    const icon = message.guild.iconURL()
    const embed = new MessageEmbed()
    .setTitle(`${name} 서버정보`)
    .setThumbnail(icon)
    .setTimestamp()
    .setColor("RANDOM")
    .addFields(
        {
            name: ":crown: 소유자: ",
            value: message.guild.owner.user.tag,
        },
        {
            name: ":ballot_box_with_check: 전체 멤버: ",
            value: `${guildmembers}명!`,
        },
        {
            name: "😶 유저: ",
            value: `${guildmembers - bot}명!`,
        },
        {
            name: ":robot: 봇: ",
            value: `${bot}명!`,
        },
        {
            name: ":eyes: 채널 수:",
            value: `${message.guild.channels.cache.size}개!`,
        },
        {
            name: ":keyboard: 채팅 채널 수:",
            value : `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}개!`,
        },
        {
            name: ":loud_sound: 음성 채널 수:",
            value : `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}개!`,
        },
        {
            name: ":id: 길드 ID:",
            value: `${message.guild.id}`,
        },
        {
            name: ":cupcake: 길드 생성일",
            value: message.guild.createdAt.toLocaleDateString(),
        },
        {
            name: ":pick: 역할 수",
            value: `${message.guild.roles.cache.size}개`,
        },
        {
            name: ":flag_white: 길드 국가",
            value: region,
        },
        {
            name: ":coin: 부스터 수",
            value: `${message.guild.premiumSubscriptionCount} 부스터!`,
        },
        {
            name: ":camera: 이모지 수",
            value: `${message.guild.emojis.cache.size}개의 이모지!`,
        }

    )
    if (annch === "설정되지 않았어요!" || annch === "1234") { embed.addField(`공지 채널`, `설정되지 않았어요!`, true) } else { embed.addField(`공지 채널`, `<#${annch}>`, true) }
    if (logch === "설정되지 않았어요!" || logch === "1234") { embed.addField(`로그 채널`, `설정되지 않았어요!`, true) } else { embed.addField(`로그 채널`, `<#${logch}>`, true) }
    if (welch === "설정되지 않았어요!" || welch === "1234") { embed.addField(`입퇴장 채널`, `설정되지 않았어요!`, true) } else { embed.addField(`입퇴장 채널`, `<#${welch}>`, true)  }
    message.channel.send(embed)
})
}

exports.callSign = ['서버정보', 'serverinfo', 'si']
exports.helps = {
    description: '서버정보를 보여줍니다.\n',
    uses: '서버정보'
}