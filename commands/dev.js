const Discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message, query) => {
    message.channel.send("개발자: 누워서 떡먹기#5883")
}

exports.callSign = ['hellothisisverification', '개발자', 'dev']
exports.helps = {
    description: '떡봇 개발자를 보여줍니다.\n',
    uses: '개발자'
}
