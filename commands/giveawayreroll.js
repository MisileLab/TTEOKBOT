const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(" ")
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return error.notper(message)

    if(!args[1]) return error.wrongcmd(message, "`T_기브어웨이 <기브어웨이ID>`")

    const giveaway = TTEOGBOT.giveaways.giveaways.find((g) => g.messageID === args[1]);
    if(!giveaway) return error.wrongcmd(message, "`T_기브어웨이 <기브어웨이ID>`")
    TTEOGBOT.giveaways.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send("기브어웨이가 다시 시작되었습니다.");
        })
        .catch(err => {
            console.log(err)
        })
}



exports.callSign = ['reroll', '기브어웨이리롤', 'giveawayreroll']
exports.helps = {
}
