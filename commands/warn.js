const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (TTEOGBOT, message) => {
      const args = message.content.slice(" ").split(" ")
      const user = message.mentions.members.first()
      

      let maxwarnings = db.get(`최대경고_${message.guild.id}`)
      if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
      if(!user) {
        return error.wrongcmd(message, "T_경고 @유저 <사유>")
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("봇에게 경고 할 수 없습니다.")
      }
      
      if(message.author.id === user.id) {
        return message.channel.send("자신에게 경고 할 수 없습니다")
      }
      
      if(user.id === message.guild.owner.id) {
        return message.channel.send("서버 소유자한테 경고를 부여할려구요? -_-")
      }

      const reason = args.slice(1).join(" ")
      
      if(!reason) {
        return error.wrongcmd(message, "T_경고 @유저 <사유>")
      }
      let warnings = db.get(`경고_${message.guild.id}_${user.id}`)

      if(warnings === null) warnings = 0;

      if(maxwarnings === null) maxwarnings = 5;
      
      let kickwarnings = maxwarnings - 1

      if(warnings === kickwarnings) {
        message.channel.send(`${message.mentions.users.first().username}님은 최대경고를 초과해 차단되었습니다.`)
        db.delete(`경고_${message.guild.id}_${user.id}`)
        user.ban().then(() => {
          return message.channel.send("차단을 취소하려면 T_언밴 [유저id]를 해주세요.")
      }).catch(() => {
          return error.equalPerms(message)
      })
      }
      

      const embed = new Discord.MessageEmbed()
      .setTitle("경고가 부여되었습니다!")
      .setDescription(`${reason}에 대해서 ${message.author.username}님이  **${message.mentions.users.first (). username} **님에게 경고했습니다.`)
      .addField(`${message.mentions.users.first().username}님의 경고 횟수 \n`, `📌총 **${warnings + 1}/${maxwarnings}** 경고가 있습니다.`)
      .setColor("RANDOM")
      .setFooter(`경고가 성공적으로 부여되었습니다.`)
      .setThumbnail(message.mentions.users.first ().displayAvatarURL({ dynamic : true }))
      .setTimestamp()

      if(warnings === null) {
        db.set(`경고_${message.guild.id}_${user.id}`, 1)
        await message.channel.send(embed)
      } else if(warnings !== null) {
          db.add(`경고_${message.guild.id}_${user.id}`, 1)
        await message.channel.send(embed)
      }
      
    
} 

exports.callSign = ['경고', 'warn']
exports.helps = {
    description: '태그된 사용자에게 경고를 부여합니다.\n',
    uses: '경고',
}
