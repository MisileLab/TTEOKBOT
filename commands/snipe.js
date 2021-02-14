const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const snipes = client.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0]-1||0]
    if(!msg) return message.channel.send(`지운 메세지가 없습니다...`);
    const Embed = new MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    .setFooter(`Date: ${msg.date} | ${args[0]||1}/${snipes.length}`)
    if(msg.attachment) Embed.setImage(msg.attachment)
    message.channel.send(Embed)
}

exports.callSign = ['si', 'snipe', '스나이퍼']
exports.helps = {
    description: '유저가 지운 메세지를 보여줍니다.\n',
    uses: '스나이퍼'
}