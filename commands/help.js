const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const commands = require('./')


module.exports.run = async (TTEOGBOT, message, query) => {
    const user = message.member.user
    const help = {
        fields: [
        {
            name: "접두사",
            value: "T_",
        }
        ],
        color: "RANDOM",
        title: "떡봇 사용법",
        description: "< > 는 필수, [ ] 는 선택, / 는 하나 선택입니다."
    }

    let keys = Object.keys(commands)
    for (k of keys) {
        if (commands[k].helps && commands[k].helps.description) help.fields.push({
            name: 'T_' + commands[k].helps.uses, 
            value: commands[k].helps.description,
            inline: false
        })
    }
    
    let p = new Discord.MessageEmbed()
        .setTitle("떡봇 도움말")
        .setColor("RANDOM")
        .setDescription(`1 이모지를 클릭하면 DM으로 전송\n2 이모지를 클릭하면 이 채널로 전송\nX를 클릭하면 취소됩니다.`)

    let ab = new Discord.MessageEmbed()
        .setTitle("취소되었어요!")
        .setDescription("사유:유저가 직접 취소함")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail(user.displayAvatarURL())
        .setColor("RANDOM");

    let d = new Discord.MessageEmbed()
        .setTitle("도움말이 삭제되었어요!")
        .setDescription("사유:유저가 직접 취소함")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail(user.displayAvatarURL())
        .setColor("RANDOM");


    
    let embed = new Discord.MessageEmbed()
      let filter = (reaction, user) => (reaction.emoji.name === "1️⃣" || reaction.emoji.name === "2️⃣" || reaction.emoji.name === "❌") && user.id === message.author.id
            message.channel.send(p).then((th) => {
                th.react("1️⃣")
                th.react("2️⃣")
                th.react("❌")
                th.awaitReactions(filter, {
                    max: 1,
                }).then(async(collected) => {
                    if (collected.array()[0].emoji.name === "1️⃣") {
                        th.delete()
                        if (keys.length === keys.indexOf(k) + 1) {
                            message.channel.send(`<@${message.author.id}> DM으로 도움말을 전송하였어요!`)
                            message.author.send({ embed: help })
                        }

                    } else {
                        th.delete()
                    if (collected.array()[0].emoji.name === "2️⃣") {
                        message.channel.send({ embed: help }).then((a, collected) => a.react("❌"))
 
                    }
                    if (collected.array()[0].emoji.name === "❌") {
                        th.delete()
                        message.channel.send(ab)
                    }
                    }
                
                }) 
            })

        
}

exports.callSign = ['help', 'Help', '도움', '도움말']
exports.helps = {
    description: '도움말을 보여줍니다\n',
    uses: '도움'
}