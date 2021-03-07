const Discord = require('discord.js')
const error = require('../utils/embed.js')
const db = require('quick.db')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(' ')
    if(args[1] != "추가" && args[1] != "삭제") return error.wrongcmd(message, "`T_블랙리스트 [추가/삭제] @유저`")
    if(args[2] === undefined || args[2].indexOf("<@") === -1) return error.wrongcmd(message, "`T_블랙리스트 [추가/삭제] @유저`")

    if(args[1] === "추가") {
        let chid = args[2]
        let value = chid.replace(/[^0-9]/g, "")
        db.set(`블랙리스트_${value}`, value)
        message.channel.send(`블랙리스트가 추가되었습니다.\n처리자 : ${message.author.username}`)
    }

    if(args[1] === "삭제") {
        let chid = args[2]
        let value = chid.replace(/[^0-9]/g, "")
        db.delete(`블랙리스트_${value}`, value)
        message.channel.send(`블랙리스트가 삭제되었습니다.\n처리자 : ${message.author.username}`)
    }
}


exports.callSign = ['블랙리스트', '블랙', 'blacklist']
exports.helps = {
    OwnerCheck: true
}
