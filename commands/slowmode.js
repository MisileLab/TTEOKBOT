const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
    const args = message.content.slice(" ").split(" ")
    const argss = args.slice(1).join(" ")
    if(!argss) return error.wrongcmd(message, "`T_슬로우 <숫자>`")
    if(argss === '없음') {
        await message.channel.send(`슬로우타임이 ` + "`없음`" + `으로 설정되었습니다.`)
        return message.channel.setRateLimitPerUser(0) 
    } else {
        if(isNaN(argss)) {
            return error.wrongcmd(message, "`T_슬로우 <숫자/없음>`")
        } else {
            message.channel.setRateLimitPerUser(argss)
            message.channel.send(`채널에 슬로우 시간이 설정되었습니다!: ${argss}초`)
        }
    }

}


exports.callSign = ['슬로우', '슬로우모드', 'slow', 'slowmode']
exports.helps = {
    description: '채널에 슬로우시간을 설정합니다.\n',
    uses: '슬로우',
    permission: 'ADMINISTRATOR'
}
