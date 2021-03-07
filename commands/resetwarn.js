const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (TTEOGBOT, message) => {

      const user = message.mentions.members.first()
      let maxwarnings = db.get(`최대경고_${message.guild.id}`)
      
      if(!user) {
      return error.wrongcmd(message, "T_경고초기화 @유저")
      }
      if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
      if(message.mentions.users.first().bot) {
        return message.channel.send("봇은 경고를받을 수 없습니다.")
      }
      
      let warnings = db.get(`경고_${message.guild.id}_${user.id}`)
      if(maxwarnings === null) maxwarnings = 5;
      if(warnings === null) {
        return message.channel.send(`${message.mentions.users.first().username}님의 경고가 없습니다`)
      }

      
      const embed = new Discord.MessageEmbed()
      .setTitle("경고가 초기화 되었습니다!")
      .setThumbnail(message.mentions.users.first ().displayAvatarURL({ dynamic : true }))
      .setDescription(`초기화 된 유저: ${message.mentions.users.first (). username} \n 모든경고는 ${message.guild.name}의 ${message.author.username}에 의해 재설정 됩니다.`)
      .setFooter(`${message.mentions.users.first (). username}의 모든 경고를 재설정했습니다.`)
      .setTimestamp()
      .setColor("RANDOM")

      
      db.delete(`경고_${message.guild.id}_${user.id}`)
      message.channel.send(embed)
      
    
      
      
    
} 

exports.callSign = ['경고초기화', 'resetwarn']
exports.helps = {
    description: '태그된 사용자에게 경고를 리셋시킵니다\n',
    uses: '경고초기화',
    permission: 'ADMINISTRATOR'
}
