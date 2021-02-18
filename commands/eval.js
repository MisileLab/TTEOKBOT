const Discord = require('discord.js')
const erro = require('../utils/embed.js')
const config = require("../data/config.json")

module.exports.run = async (TTEOGBOT, message, query) => {
	if(config.owners.some(word => message.author.id.includes(word))) {
        let embed2 = new (Discord.MessageEmbed)
            embed2.setAuthor(message.author.username, message.author.avatarURL())
			embed2.setTitle("오류")
			embed2.setDescription("잘못된 클라이언트 종료 방식입니다.")
			embed2.setColor(config.red)

		let text = query.message.slice(query.command.length + 1)

		if(text.indexOf("exit") != -1 && text.indexOf("process") != -1) {
			return message.channel.send(embed2)
		} else {
				const result = new Promise(resolve => resolve(eval(text)))
				return result.then(output => {
					if(typeof output !== "string")
						output = require('util').inspect(output, {
							depth: 0
						})
						
					if(output.includes(TTEOGBOT.token))
						output = output.replace(TTEOGBOT.token, "토큰")
					if(output.length > 1010)
						output = (output.slice(0, 1010)+"\n...")
					
					let embed = new (Discord.MessageEmbed)
					embed.setColor("RANDOM")
					embed.setDescription('입력 :\n```js\n' + text + '\n```\n출력 :```js\n' + output + '\n```')
					message.channel.send({ embed: embed })
				}).catch(error => {
					error = error.toString()
					error = error.replace(TTEOGBOT.token, "토큰")
					
					if(error.includes(TTEOGBOT.token))
						error = error.replace(TTEOGBOT.token, "토큰")
					
					let embed = new (Discord.MessageEmbed)
					embed.setAuthor(message.author.username, message.author.avatarURL())
					embed.setTitle("오류")
					embed.setDescription(error)
					embed.setColor(config.red)
					message.channel.send({ embed: embed })
				})
		}
	} else {
		return erro.notdev(message)
	}
}

exports.callSign = ['eval', '실행']
exports.helps = {
    OwnerCheck: true
}
