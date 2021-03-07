const error = require('../utils/embed.js')
const Discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return error.notper(message)
        let args = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        .setTitle("성공적으로 사용자가 추방 되었습니다!")
        .setColor("RANDOM")
        .setDescription(`차단된 유저 : ${args.user.username}`)
        .setThumbnail(args.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("추방되었어요!")
    

        if (!args) {
            return error.wrongcmd(message, "`T_추방 @멘션`")
        }
        let member = message.mentions.members.first()
        member.kick().then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['kick', '킥', '추방', '내보내기']
exports.helps = {
    description: '서버에서 해당 유저를 추방시킵니다.\n',
    uses: '추방 [@추방할 사용자]',
    permission: 'KICK_MEMBERS'   
}