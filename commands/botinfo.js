const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle('λ‘λ΄ μ λ³΄')
    .setColor('RANDOM')
    .addFields(
        {
            name: 'πλ΄ νκ·Έ',
            value: client.user.tag,
        },
        {
            name: 'πλ΄ ID',
            value: client.user.id,
        },
        {
            name: 'π μλ²',
            value: `${client.guilds.cache.size}κ°μ μλ²`
        },
        {
            name: 'π» μ±λ',
            value: `${client.channels.cache.size}κ°μ μ±λ`
        },
        {
            name: 'π₯ μλ²μ μ ',
            value: `${client.users.cache.size}λͺμ  μ μ `,
            inline: true
        },
        {
            name: 'λ΄ λ³λͺ',
            value: client.users.nickname || 'μμ'
        },
        {
            name: 'πλ΄μ΄ λ€μ΄μ¨ λ μ§',
            value: client.user.createdAt
        }
    )

    await message.channel.send(embed)
}

exports.callSign = ['λ΄μ λ³΄', 'λ΄', 'botinfo', 'bi']
exports.helps = {
    description: 'λ‘λ΄μ μ λ³΄λ₯Ό μΆλ ₯ν©λλ€.\n',
    uses: 'λ΄μ λ³΄'
}