const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle('떡봇 정보')
    .setColor('RANDOM')
    .addFields(
        {
            name: '봇 태그',
            value: client.user.tag,
        },
        {
            name: '봇 ID',
            value: client.user.id,
        },
        {
            name: '🌐 서버',
            value: `${client.guilds.cache.size}개의 서버`
        },
        {
            name: '💻 채널',
            value: `${client.channels.cache.size}개의 채널`
        },
        {
            name: '👥 서버유저',
            value: `${client.users.cache.size}명의  유저`,
            inline: true
        },
        {
            name: '봇 별명',
            value: client.users.nickname || '없음'
        },
        {
            name: '🗓봇이 들어온 날짜',
            value: client.user.createdAt
        }
    )

    await message.channel.send(embed)
}

exports.callSign = ['봇정보', '봇', 'botinfo', 'bi']
exports.helps = {
    description: '떡봇의 정보를 출력합니다.\n',
    uses: '봇정보'
}