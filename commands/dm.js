const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const argss = message.content.slice("T_").split(" ")
    const args = message.content.slice(" ").split(" ")
    if(!argss[1]) return error.wrongcmd(message, "`T_dm <유저ID> <전송할 말>`")
    const user = argss[1]
    if(!user) return error.sendEmbed(message, "유저를 찾을 수 없습니다!")
    const reason = args.slice(2).join(" ");
    if(!reason) return error.wrongcmd(message, "`T_dm <유저ID> <전송할 말>`")
    try {
        TTEOGBOT.users.fetch(user).then((th) => {
            th.send(`${message.author.tag}님에게 온 말\n**${reason}**`);
            return error.sendEmbed(message, `${reason}을 전송하였습니다!`)
        })
    } catch {
        return error.sendEmbed(message, `ERROR!\n전송을 실패하였어요..ㅠ`)
    }
}


exports.callSign = ['dm', 'DM', '답장']
exports.helps = {
    description: '답장\n',
    uses: '답장'
}
