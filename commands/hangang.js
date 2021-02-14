const discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {
    const fetch = require('node-fetch')
		
    fetch('http://hangang.dkserver.wo.tc/').then(res => res.json()).then(json => {
        if(json.result) {
            if(json["temp"] > 15) {
                let embed = new (discord.MessageEmbed)
                    embed.setAuthor(message.author.username, message.author.avatarURL())
                    embed.setColor("RANDOM")
                    embed.setDescription(`현재 한강의 온도는 \`${json["temp"]}도\`이에요!\n\`측정: ${(json["time"]).split(" ")[0]}\``)
                    embed.setFooter("수온이 따뜻한데요?")
                message.channel.send(embed)
            } else {
                let embed = new (discord.MessageEmbed)
                    embed.setAuthor(message.author.username, message.author.avatarURL())
                    embed.setColor("RANDOM")
                    embed.setDescription(`현재 한강의 온도는 \`${json["temp"]}도\`이에요!\n\`측정: ${(json["time"]).split(" ")[0]}\``)
                    embed.setFooter("수온이 얼음장이네요.. ~~입수는 하지 않는게 좋겠어요!~~")
                message.channel.send(embed)
            }
        }
    })
}

exports.callSign = ['hangang', '한강']
exports.helps = {
    description: '현재 한강온도를 보여줍니다.\n',
    uses: '한강'
}
