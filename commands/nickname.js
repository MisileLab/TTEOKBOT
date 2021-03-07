const { Client, Message, MessageEmbed } = require('discord.js');
const error = require('../utils/embed.js')

module.exports.run = async(client, message) => {
    const member = message.mentions.members.first() || message.member;
    const oldName = member.displayName;

    const args = message.content.slice(" ").split(" ")
    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
    if(!member) return error.wrongcmd(message, `T_닉네임 [@별명을 바꿀 사용자] [바꿀 이름]`);

    const text = args.slice(2).join(" ")

    if(!text) return error.wrongcmd(message, `T_닉네임 [@별명을 바꿀 사용자] [바꿀 이름]`);

    const Embed = new MessageEmbed()
    .setTitle("별명이 바뀌었습니다!")
    .setColor("RANDOM")
    .addFields(
        {
            name: '멤버',
            value: `${member.user.username}`
        },
        {
            name: '이전이름',
            value: `${oldName}`,
        },
        {
            name: '새 별명',
            value: `${text}`,
        },
        {
            name: '바꾼 사람',
            value: `${message.author}`,
        }
    )
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp();

    try {
        await member.setNickname(text)
        if(member.displayName === text) {
            message.channel.send(Embed)
        }
    } catch(err) {
        error.notper(message)
    }

}

exports.callSign = ['닉네임', '별명', 'nickname', 'nick', '닉']
exports.helps = {
    description: '태그된 사용자의 닉네임을 바꿉니다.\n',
    uses: '닉네임 [@유저]',
    permission: 'ADMINISTRATOR'
}