const error = require('../utils/embed.js')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
const config = require("../data/config.json")
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err)
})

module.exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(' ')
    if(args[1] != "공지" && args[1] != "입퇴장" && args[1] != "로그") return error.wrongcmd(message, "`T_채널설정 [공지/입퇴장/로그] #채널멘션`")
    if(args[2] === undefined || args[2].indexOf("<#") === -1) return error.wrongcmd(message, "`T_채널설정 [공지/입퇴장/로그] #채널멘션`")

    if(args[1] === "공지") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
        let chid = args[2]
        let value = chid.replace(/[^0-9]/g, "")
        db.serialize()
        db.run(`UPDATE data SET notice_id = '${value}' WHERE guild_id = '${message.guild.id}'`)
        error.sendEmbed(message, `공지 채널을 <#${value}>으로 설정했어요!`)
    }

    if(args[1] === "로그") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)  
        let chid = args[2]
        let value = chid.replace(/[^0-9]/g, "")
        db.run(`UPDATE data SET log_id = '${value}' WHERE guild_id = '${message.guild.id}'`) 
        error.sendEmbed(message, `로그 채널을 <#${value}>으로 설정했어요!`)
    }

    if(args[1] === "입퇴장") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
        let chid = args[2]
        let value = chid.replace(/[^0-9]/g, "")
        db.run(`UPDATE data SET custom_id = '${value}' WHERE guild_id = '${message.guild.id}'`)
        error.sendEmbed(message, `환영 채널을 <#${value}>으로 설정했어요!`)
    }
}

exports.callSign = ['채널', '채널설정', 'channel', 'ch']
exports.helps = {
    description: '봇의 공지사항, 입퇴장 메세지를 전송할 채널, 각종 로그를 전송할 채널을 설정합니다.\n',
    uses: '채널설정',
    permission: 'ADMINISTRATOR'
}