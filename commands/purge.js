const error = require('../utils/embed.js')

module.exports.run = async (TTEOGBOT, message, query) => {	
    let purge = query.message.slice(query.command.length + 1)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return error.notper(message)
    if (!purge) return error.wrongcmd(message, "`T_청소 [1~100]`")
    if (purge > 100) return error.wrongcmd(message, "`T_청소 [1~100]`")
    if (purge < 1) return error.wrongcmd(message, "`T_청소 [1~100]`")
    if (isNaN(purge) == true || message.content.indexOf('.') != -1) return error.wrongcmd(message, "`T_청소 [1~100]`")
    try {
        message.delete() // 청소 메세지 삭제
        message.channel.bulkDelete(purge)
        message.channel.send(`<@${message.author.id}> ${purge}개의 메세지를 삭제하였습니다! (이 메세지는 3초뒤 사라져요!)`).then(msg => msg.delete({ timeout: 3000 }))
    } catch {
        message.channel.send(`<@${message.author.id}> :< 오류가 발생했어요..`)
    }     
}

exports.callSign = ['청소', '삭제', 'purge', 'delete']
exports.helps = {
    description: '메세지를 삭제합니다.\n최대 100까지만 가능하며, 14일이 지난 메세지는 삭제하지 못합니다.\n',
    uses: '청소 [1~100]',
    permission: 'MANAGE_MESSAGES'
}
