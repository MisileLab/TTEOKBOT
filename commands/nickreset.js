const { Client, Message, MessageEmbed } = require('discord.js');
const error = require('../utils/embed.js')

module.exports.run = async(client, message) => {
    const member = message.mentions.members.first() || message.member;
    const oldName = member.displayName;

    if(!member) return error.wrongcmd(message, `T_닉리셋 [@별명을 바꿀 사용자]`);
    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
    const Embed = new MessageEmbed()
    .setTitle("별명이 삭제되었습니다!")
    .setColor("RANDOM")
    .addFields(
        {
            name: '삭제된 멤버',
            value: `${member.user.username}`
        },
        {
            name: '이전 이름',
            value: `${oldName}`,
        },
        {
            name: '지운 사람',
            value: `${message.author}`,
        }
    )
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp();

    try {
        await member.setNickname(null)
        if(member.displayName === member.user.username) {
            message.channel.send(Embed)
        }
    } catch(err) {
        error.notper(message)
    }
}

exports.callSign = ['닉네임리셋', '별명리셋', 'nickreset', 'nickrs', '닉초기화', '닉리셋', '닉네임초기화', '별명초기화']
exports.helps = {
description: '태그된 사용자의 닉네임을 리셋합니다.\n',
uses: '닉리셋 [@유저]',
permission: 'ADMINISTRATOR'
}