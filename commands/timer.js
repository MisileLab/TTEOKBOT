const Discord = require('discord.js')
const ms = require('ms')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    let time = args[1]
    if(!time) return error.wrongcmd(message, "T_타이머 <숫자>+s/m/h")
    if(ms(time) > ms("3d")) return message.reply("알람을 3일 이상보다 크게 설정할 수 없습니다.")

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag} 알람이 설정되었습니다.`, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(`시간: \`${time}\``)
    .setFooter("성공적으로 설정되었습니다!")
    .setTimestamp()
    message.channel.send(embed)

    setTimeout(() => {
            const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag} 시간이 되었습니다!`, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(`시간: \`${time}\`\n알람을 맞춘 서버: \`${message.guild.name}\``)
    .setFooter("시간이 되었습니다!")
    .setTimestamp()
    message.channel.send(`<@${message.author.id}>`)
    message.channel.send(embed)
    message.author.send(`<@${message.author.id}>`)
    message.author.send(embed)
    }, ms(time))
}


exports.callSign = ['타이머', 'timer', '시간', '알람']
exports.helps = {
    description: '타이머를 설정합니다\n',
    uses: '타이머 [시간]+s/m/h'
}
