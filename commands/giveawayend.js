const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(" ")
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return error.notper(message)
    if(!args[1]) return error.wrongcmd(message, "`T_기브어웨이끝 <기브어웨이ID>")

    const giveaway = TTEOGBOT.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
    if(!giveaway) return message.channel.send('기브어웨이를 찾을 수 없습니다.')

    TTEOGBOT.giveaways.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    }).then(()  => {
        message.channel.send(`기브어웨이는 ${TTEOGBOT.giveaway.options.updateCountdownEvery / 1000} 초 이내에 종료됩니다.`)
    }).catch(err => {
        console.log(err)
        message.channel.send('오류가 발생했습니다!')
    })
}


exports.callSign = ['기브어웨이끝', 'giveawayend', '기브어웨이삭제']
exports.helps = {
}
