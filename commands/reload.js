const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(' ')
    if(!args[1]) return error.wrongcmd(message, "`T_리로드 <Command Name>`")

    let command = args[1].toLowerCase();

    try {
        delete require.cache[require.resolve(`../commands/${command}.js`)];
        TTEOGBOT.commands.delete(command);

        const pull = require(`../commands/${command}.js`);
        TTEOGBOT.commands.set(command, pull);

        return message.channel.send(`리로드가 되었습니다! **${command}.js**`);
    } catch(error) {
        return message.channel.send(`리로드 에러 **${command}.js**: \`\n${error.message}\``);
    }
}


exports.callSign = ['리로드', 'reload']
exports.helps = {
    OwnerCheck: true
}
