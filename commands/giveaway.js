const Discord = require('discord.js')
const error = require('../utils/embed.js')
const ms = require('ms')
const { MessageEmbed } = require('discord.js')

exports.run = async (TTEOGBOT, message) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return error.notper(message)
    const args = message.content.slice("T_").split(" ")
    const argss = message.content.slice(" ").split(" ")
    const channel = message.mentions.channels.first()
    if(!channel) return error.wrongcmd(message, "`T_기브어웨이 <#채널> <시간> <당첨자 수> <상품>`")

    const duration = args[2]
    if(!duration) return error.wrongcmd(message, "`T_기브어웨이 <#채널> <시간> <당첨자 수> <상품>`")

    const winners = args[3]
    if(!winners) return error.wrongcmd(message, "`T_기브어웨이 <#채널> <시간> <당첨자 수> <상품>`")

    const prize = argss.slice(4).join(" ")
    if(!prize) return error.wrongcmd(message, "`T_기브어웨이 <#채널> <시간> <당첨자 수> <상품>`")

    TTEOGBOT.giveaways.start(channel, {
        time : ms(duration),
        prize : prize,
        winnerCount: winners,
        hostedBy: message.author,
        messages: {
            giveaway: "🎉🎉 **기브어웨이** 🎉🎉",
            giveawayEnded: "🎉🎉 **기브어웨이 Ended** 🎉🎉",
            timeRemaining: "남은 시간 **{duration}**",
            inviteToParticipate: "🎉을 반응하여 경품에 참여하세요.",
            winMessage: "{winners} 축하합니다! 당첨되셨습니다!",
            embedFooter: "Giveaway 시간!",
            noWinner: "당첨자를 결정할 수 없습니다",
            hostedBy: '기브어웨이를 연 사람 : {user}',
            winners: "당첨자",
            endedAt: '끝난 시각',
            units: {
                seconds: "초",
                minutes: "분",
                hours: '시간',
                days: '일',
                pluralS: false
            }
        },
       
    })
    message.channel.send(`Giveaway가 시작되었습니다! Giveaway채널 : ${channel}`)
}


exports.callSign = ['기브어웨이', 'giveaway']
exports.helps = {
}
