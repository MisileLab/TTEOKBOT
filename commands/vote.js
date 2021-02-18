const Discord = require('discord.js')
const error = require('../utils/embed')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    const vote = args.slice(1).join(" ")

    const regex = vote.match(/"[^"]+"|[\\S]+"[^"]+/g)

    if(!regex) return error.wrongcmd(message, `T_투표 "<1>""<2>""[3]"`)
    if(regex.length > 10) {
        return message.channel.send('9개까지의 투표만 할 수 있습니다')
    }

    let str = ''

    let emoji = [
        '1️⃣',
        '2️⃣',
        '3️⃣',
        '4️⃣',
        '5️⃣',
        '6️⃣',
        '7️⃣',
        '8️⃣',
        '9️⃣'
    ]

    let i = 0

    for (const poll of regex) {
        str = str + `${emoji[i]} ${poll}\n\n`
        i++
    }

    const a = new Discord.MessageEmbed()
        .setDescription(str.replace(/"/g, ''))

    const msg = await message.channel.send(a)

    for (let i = 0; i < regex.length; i++) {
        msg.react(emoji[i])
    }
    message.delete();
}   

exports.callSign = ['투표', 'vote']
exports.helps = {
    description: '봇이 투표를 합니다.\n',
    uses: '투표'
}
