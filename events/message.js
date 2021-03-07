const Discord = require('discord.js')
const black = require("../data/black.json")
let request = require('request');
const db = require('quick.db')
let headers = {'Authorization': 'Authorization ID', 'Content-Type': 'application/json'};
const config = require('../data/config.json')

module.exports = async message => {
    if(message.channel.type === "dm") {
        return message.author.send("봇 명령어는 채널에서 사용해주세요.");
    } 
    let value = db.get(`블랙리스트value`)
    let balckuser = db.get(`블랙리스트_${value}`)
	if(message.content.startsWith(config.prefix)) console.log(`${message.guild.name} - ${(message.guild.id)} Message\n${message.author.username}: ${message.content}\n`)
    if(message.content.startsWith(config.prefix) && black.users.some(g => message.author.id.includes(g)))  return message.reply("부적절한 어휘 사용 및 기타 이유로 명령어 사용이 제한된 유저입니다.")
    if(message.content.startsWith(config.prefix) && black.servers.some(g => message.guild.id.includes(g))) return message.reply("부적절한 어휘 사용 및 기타 이유로 명령어 사용이 제한된 서버입니다.")
    if(message.author.id == `${balckuser}`) return;
    if(message.content.startsWith(config.prefix)) {
        const text = message.content.split(config.prefix)[1]
        const command = message.content.split(config.prefix)[1].split(' ')[0]
        var id = message.author.id
        const commands = require("../commands/")
        let keys = Object.keys(commands)
        let str = ""
        for(let k of keys) {
            str += commands[k].callSign +","+ commands[k].helps.uses
        }

        if(str.includes(command) === false) {
            let dataString = "{request: {query: " + text + "}}";

                

            let options = {
                url: 'https://builder.pingpong.us/api/builder/601f915de4b078d8739e3544/integration/v0.2/custom/API키',
                method: 'POST',
                headers: headers,
                body: dataString
            };
            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    let msg = JSON.parse(body, null, 1).response.replies[0].text;
                    let embed = new (Discord.MessageEmbed)
                    embed.setTitle(msg)
                    embed.setDescription("Powered by https://pingpong.us")
                    embed.setAuthor(message.author.username, message.author.avatarURL())
                    embed.setColor("RANDOM")
                    message.channel.send({ embed: embed })
                }
            }
            request(options, callback); 
        }
    }
}
