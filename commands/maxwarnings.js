const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")

    const max = args.slice(1).join(" ")
    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
    if (isNaN(max) == true) return error.wrongcmd(message, "`T_최대경고 [숫자]`")
    if(!max) {
      error.wrongcmd(message, "`T_최대경고 <숫자>`")
    }

    db.set(`최대경고_${message.guild.id}`, max)
      
    let maxwarnings = db.get(`최대경고_${message.guild.id}`)

      const embed = new Discord.MessageEmbed()
      .setTitle("서버의 경고 최대횟수가 설정되었습니다!")
      .setDescription(`경고최대횟수 : ${maxwarnings}`)
      .setColor("RANDOM")
      .setFooter(`서버의 경고의 최대횟수가 설정되었습니다!`)
      .setTimestamp()
    message.channel.send(embed)
} 

exports.callSign = ['최대경고', 'maxwarnings']
exports.helps = {
    description: '최대경고횟수를 설정합니다.\n',
    uses: '최대경고',
    permission: 'ADMINISTRATOR'
}
