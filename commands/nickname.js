const { Client, Message, MessageEmbed } = require('discord.js');
const { Argument } = require('discord.js-commando');
const error = require('../utils/embed.js')

module.exports.run = async(client, message) => {
    const member = message.mentions.members.first() || message.member;
    const oldName = member.displayName;

    const args = message.content.slice(" ").split(" ")

    if(!member) return error.wrongcmd(message, `T_닉네임 [@별명을 바꿀 사용자] [바꿀 이름]`);

    const arguments = args.slice(2).join(" ")

    if(!arguments) return error.wrongcmd(message, `T_닉네임 [@별명을 바꿀 사용자] [바꿀 이름]`);

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
            value: `${arguments}`,
        },
        {
            name: '바꾼 사람',
            value: `${message.author}`,
        }
    )
    .setFooter("봇의 권한이 없을 경우 바뀌지 않습니다.")
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp();

    try {
        member.setNickname(arguments)
    } catch(err) {
        message.channel.send(
            "권한이 없습니다."
        )
        message.channel.send(Embed)
    }
}

exports.callSign = ['닉네임', '별명', 'nickname', 'nick', '닉']
exports.helps = {
description: '태그된 사용자의 닉네임을 바꿉니다.\n',
uses: '닉네임'
}