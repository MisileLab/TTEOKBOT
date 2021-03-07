const Discord = require('discord.js')
const ms = require('ms')
const error = require('../utils/embed')

module.exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args.slice(1).join(" "))

    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
  

    if(!user) {
        return error.wrongcmd(message, "`T_뮤트 <@유저>`")
    }

    if(user.id === message.author.id) {
        return message.channel.send("자기자신을 뮤트시킬 수 없습니다.");
    }

    let reason = args.slice(1).join(" ");
    if(reason === null) reason = "`사유없음`"

    const notrole = new Discord.MessageEmbed()
    .setTitle("❌ERROR!")
    .setDescription("Muted역할이 없습니다. 봇이 Muted역할을 새로 만듭니다.")
    .setTimestamp()
    .setColor("RANDOM")

    const embed = new Discord.MessageEmbed()
    .setTitle(`성공적으로 ${user.user.username}님이 뮤트가 되었습니다.`)
    .setDescription(`${user.user.username}님은 다음과 같은 이유로 ${message.guild.name}에서 뮤트되셨습니다 : ${reason}`)
    .setColor("RANDOM")
    .setTimestamp()
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${user.user.username}님은 다음과 같은 이유로 ${message.guild.name}에서 뮤트되셨습니다 : ${reason}`)
    .setColor("RANDOM")
    .setTimestamp();

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(!role) {
        message.channel.send(notrole)
        let muterole = await message.guild.roles.create({
            data : {
                name : 'Muted',
                permissions: []
            }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        });
        message.channel.send('Muted역할을 성공적으로 만들었습니다.')
    }

    user.roles.add(role);
    await message.channel.send(embed)

    user.send(embed2);
}

exports.callSign = ['뮤트', 'mute', 'muted']
exports.helps = {
    description: '사용자를 뮤트시킵니다.\n',
    uses: '뮤트 <@유저>',
    permission: 'ADMINISTRATOR'
}
