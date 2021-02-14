const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const commands = require('./')
let work = 1;

module.exports.run = async (TTEOGBOT, message, query) => {

    let embed = new Discord.MessageEmbed()
      let filter = (reaction, user) => (reaction.emoji.name === "➕" || reaction.emoji.name === "❌")
            message.channel.send(`${work}`).then((th) => {
                th.react("➕")
                th.react("❌")
                th.awaitReactions(filter, {
                    max: 1,
                }).then(async(collected) => {
                    if (collected.array()[0].emoji.name === "➕") {
                        work++
                        if (keys.length === keys.indexOf(k) + 1) {
                            th.edit(`${work}`)
                        }
                    if (collected.array()[0].emoji.name === "❌") {
                        message.channel.send("TEST")
                    }
                    }
                
                }) 
            })
}

exports.callSign = ['work', '노가다']
exports.helps = {
    description: '다같이 노가다를!\n',
    uses: '노가다'
}