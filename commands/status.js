const Discord = require('discord.js')
const error = require('../utils/embed')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    const text = args.slice(1).join(" ")
    if(!text) return error.wrongcmd(message, "`T_상태 <상태메세지>`")
    if(text === '기본') {
        let statuses = ['T_도움을 해보세요!', 'T_[아무말]을 해보세요!', `${TTEOGBOT.guilds.cache.size}개의 서버와 함께하는 중!`, `${TTEOGBOT.channels.cache.size}개의 채널과 함께하는 중!`, `${TTEOGBOT.users.cache.size}명의  유저와 함께하는 중!`];
        setInterval(function() {
            let status = statuses[Math.floor(Math.random()*statuses.length)];
            TTEOGBOT.user.setPresence({ activity: {name:status}, status: 'online' });
        }, 3000)
        message.channel.send(`${message.author}, 15초 후 떡봇의 상태메세지가` + "`기본`" + `으로 설정됩니다!`)
        console.log(`변경된 상태메세지 : ${text}`)
        console.log(`상태메세지를 변경한 사람 : ${message.author.tag}`)
    } else {
        setInterval(function() {
            TTEOGBOT.user.setPresence({ activity: {name:text}, status: 'online'});
        })
        message.channel.send(`${message.author}, 15초 후 떡봇의 상태메세지가` + "`" + `${text}` + "`" + `으로 설정됩니다!`)
        console.log(`변경된 상태메세지 : ${text}`)
        console.log(`상태메세지를 변경한 사람 : ${message.author.tag}`)
    }
}
exports.callSign = ['상태', 'status']
exports.helps = {
    OwnerCheck: true
}
