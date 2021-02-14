const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports.run = async (TTEOGBOT, message, client) => {
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    const embed = new MessageEmbed()
    .setAuthor(`${user.username}의 정보`)
    .setColor('RANDOM')
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        {
            name: '유저 태그',
            value: user.tag,
        },
        {
            name: '유저 ID',
            value: user.id,
        },
        {
            name: '별명',
            value: member.nickname || '없음'
        },
        {
            name: '봇여부',
            value: user.bot
        },
        {
            name: '서버에 들어온 날짜',
            value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
            name: '역할 수',
            value: member.roles.cache.size - 1,
        }

    )

    channel.send(embed)
}

exports.callSign = ['유저정보', '유저', 'userinfo', 'ui']
exports.helps = {
    description: '태그된 사용자에 유저정보를 출력합니다\n',
    uses: '유저정보'
}