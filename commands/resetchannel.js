const error = require('../utils/embed.js')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err)
})

module.exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(' ')
    if(args[1] != "공지" && args[1] != "입퇴장" && args[1] != "로그") return error.wrongcmd(message, "`T_채널초기화 [공지/입퇴장/로그]`")

    if(args[1] === "공지") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
        db.serialize()
        db.run(`UPDATE data SET notice_id = '1234' WHERE guild_id = '${message.guild.id}'`)
        error.sendEmbed(message, "공지 채널을 `수신 안함`으로 설정했어요!")
    }

    if(args[1] === "로그") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)  
        db.run(`UPDATE data SET log_id = '1234' WHERE guild_id = '${message.guild.id}'`) 
        error.sendEmbed(message, "로그 채널을 `수신 안함`으로 설정했어요!")
    }

    if(args[1] === "입퇴장") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
        db.run(`UPDATE data SET custom_id = '1234' WHERE guild_id = '${message.guild.id}'`)
        error.sendEmbed(message, "환영 채널을 `수신 안함`으로 설정했어요!")
    }
}

exports.callSign = ['채널초기화', 'resetchannel', 'rech']
exports.helps = {
    description: '선택한 채널을 데이터베이스에서 삭제합니다. (더이상 전송 X)\n',
    uses: '채널초기화',
    permission: 'ADMINISTRATOR'
}