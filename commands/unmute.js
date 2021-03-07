const Discord = require('discord.js')
const ms = require('ms')
const error = require('../utils/embed')

module.exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")

    if(!message.member.hasPermission("MANAGE_ROLES")) return error.notper(message)

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(!user) {
        return error.wrongcmd(message, "T_언뮤트 <@유저>")
    }

    if(user.roles.cache.has(role)) return message.channel.send("이 유저는 뮤트되지 않았습니다.");
 
    const embed = new Discord.MessageEmbed()
    .setTitle(`성공적으로 ${user.user.username}님이 언뮤트되셨습니다!`)
    .setDescription(`${user.user.username}님은 ${message.guild.name} 에서 언뮤트되셨습니다`)
    .setColor("RANDOM")
    .setTimestamp()
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${user.user.username}님은 ${message.guild.name}에서 언뮤트되셨습니다`)
    .setColor("RANDOM")
    .setTimestamp();

    user.roles.remove(role);

    message.channel.send(embed)
    user.send(embed2)
}

exports.callSign = ['언뮤트', 'unmute', 'unmuted', '뮤트취소']
exports.helps = {
    description: '사용자를 뮤트취소시킵니다.\n',
    uses: '언뮤트 <@유저>',
    permission: 'MANAGE_ROLES'
}
