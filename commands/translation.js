const Discord = require("discord.js")
const translate = require("@k3rn31p4nic/google-translate-api");
const config = require('../data/config.json')


module.exports.run = async(client, message) => {
    const args = message.content.slice(" ").split(" ")
    let language = args[1];
    const text = args.slice(2)

    if(!language) return message.channel.send("T_번역 <번역할 언어> <바꿀 말>")
    if (language.length !== 2) return message.reply("언어는 별칭 2자 여야합니다. 예시 : korean > ko");
    if(!text) return message.channel.send("무슨 말을 번역하시겠습니까?")

    const result = await translate(text, { to:language });

    const Embed = new Discord.MessageEmbed()
        .setDescription(result.text)
        .setTitle("번역이 성공적으로 실행되었습니다!")
        .setTimestamp()
        .setFooter(message.author.username)
        .setColor("RANDOM");

message.channel.send(Embed)
}

exports.callSign = ['번역', '번역기', 'tr', 'translation']
exports.helps = {
description: '봇이 원하는 말을 번역해줍니다!\n',
uses: '번역 <번역할 언어> <바꿀말>'
}