const discord = require('discord.js')
const error = require('../utils/embed.js')

module.exports.run = async (TTEOGBOT, message, query) => {
    var strArr = query.args
    var RanInt = Math.floor(Math.random() * strArr.length)
    if(strArr[0] == undefined) {
        return error.wrongcmd(message, "`T_골라 단어 1/ 단어 2/ 단어 3/ ...`")
    } else {
        var embed = new (discord.MessageEmbed)
        embed.setColor('RANDOM')
        embed.setAuthor(message.author.username, message.author.avatarURL())
        embed.setDescription(strArr[RanInt]+"(이)가 좋은거 같아요!")
        message.channel.send(embed)
    }
}

exports.callSign = ['select', '골라', '골라줘']
exports.helps = {
    description: '단어 중 랜덤하게 하나를 떡봇가 고릅니다.\n',
    uses: '골라'
}
