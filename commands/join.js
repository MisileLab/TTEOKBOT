const error = require('../utils/embed.js')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err)
})

module.exports.run = async (TTEOGBOT, message, query) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return error.notper(message)
        let context = query.message.slice(query.command.length + 1)
        if(context == "") {
		    return error.wrongcmd(message, "`T_입장메세지 [텍스트]\n예시 : T_환영메세지 {member}님 {guild}에 오신 것을 정말 환영해요! | 현재 인원 : {count}`")
        } else {
            db.run(`UPDATE data SET welcome = '${context}'`)
            message.react("764644897591656449")
        }
}

exports.callSign = ['join', '입장메세지', '입장메시지', '환영메세지', "환영"]
exports.helps = {
    description: '서버에 유저가 들어왔을때 전송할 메세지를 설정합니다.\n메세지 중 {member}, {guild}, {count} 를 추가하여 멘션, 서버이름, 현재 인원을 출력할 수 있습니다.\n단, 사용하기 위해선 **입퇴장 채널** 을 먼저 설정해야합니다.\n',
    uses: '입장메세지',
    permission: 'MANAGE_MESSAGES'   
}