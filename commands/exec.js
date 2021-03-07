const Discord = require('discord.js')
const { exec } = require('child_process')

module.exports.run = async (TTEOGBOT, message, query) => {
    const args = message.content.slice(" ").split(" ")

    exec(args.slice(1).join(' '), (error, stdout) => {
        const response = stdout || error;
        message.channel.send(response, { split:true, code: true});
    })
}

exports.callSign = ['exec', '콘솔']
exports.helps = {
    OwnerCheck: true
}
