const { MessageEmbed } = require('discord.js')


module.exports.run = async(client, message) => {
    const { guild} = message
    
    const { name, region, memberCount, owner } = guild
    const icon = guild.iconURL()
    
    const embed = new MessageEmbed()
    .setTitle(`${name} 서버정보`)
    .setThumbnail(icon)
    .setColor("RANDOM")
    .addFields(
        {
            name: ":crown: 소유자: ",
            value: message.guild.owner.user.tag,
            inline: true
        },
        {
            name: ":ballot_box_with_check: 전체 멤버: ",
            value: `${message.guild.memberCount}명!`,
            inline: true
        },
        {
            name: ":robot: 봇: ",
            value: `${message.guild.members.cache.filter(m => m.user.bot).size}명!`,
            inline: true
        },
        {
            name: ":eyes: 채널 수:",
            value: `${message.guild.channels.cache.size}개!`,
            inline: true
        },
        {
            name: ":keyboard: 채팅 채널 수:",
            value : `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}개!`,
            inline: true
        },
        {
            name: ":loud_sound: 음성 채널 수:",
            value : `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}개!`,
            inline: true
        },
        {
            name: ":id: 길드 ID:",
            value: `${message.guild.id}`,
            inline: true
        },
        {
            name: ":cupcake: 길드 생성일",
            value: message.guild.createdAt.toLocaleDateString(),
            inline: true
        },
        {
            name: ":pick: 역할 수",
            value: `${message.guild.roles.cache.size}개`,
            inline: true
        },
        {
            name: ":flag_white: 길드 국가",
            value: region,
            inline: true
        },
        {
            name: ":coin: 부스터 수",
            value: `${message.guild.premiumSubscriptionCount} 부스터!`,
            inline: true
        },
        {
            name: ":camera: 이모지 수",
            value: `${message.guild.emojis.cache.size}개의 이모지!`,
            inline: true
        }

    )
    message.channel.send(embed)
}

exports.callSign = ['서버정보', 'serverinfo', 'si']
exports.helps = {
    description: '서버정보를 보여줍니다.\n',
    uses: '서버정보'
}