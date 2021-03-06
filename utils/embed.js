const Discord = require("discord.js")

module.exports.notdev = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("봇 관리자만 사용 가능한 명령어입니다.")
    message.channel.send({ embed: embed })
}

module.exports.notown = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("봇 개발자만 사용 가능한 명령어입니다.")
    message.channel.send({ embed: embed })
}

module.exports.notper = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("권한이 없어서 실행되지 않습니다.")
    message.channel.send({ embed: embed })
}

module.exports.equalPerms = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("봇의 권한이 부족해요!")
    message.channel.send({ embed: embed })
}

module.exports.wrongcmd = (message, input) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription(input + " 가 올바른 명령어입니다!")
    message.channel.send({ embed: embed })
}

module.exports.sendEmbed = (message, input) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription(input)
    message.channel.send({ embed: embed })
}
