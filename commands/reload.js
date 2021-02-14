const Discord = require('discord.js')
const config = require('../data/config.json')

module.exports.run = async (client, message, args) => {
		if (!args.lenght) return message.reply(`로드할 명령어 이름을 입력해주세요.`)
		const commandName = args[0].toLowerCase()
		const command = message.client.command.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

		if(!command) return message.reply(`\`${commandName}\`라는 명령어를 찾을 수 없습니다.`)
		delete require.cache[require.resolve(`./${command.name}.js`)]
		try  {
			const newCommand = require(`./${command.name}.js`)
			message.client.commands.set(newCommand.name, newCommand)
			message.reply(`\${command.name}\`명령어가 리로드 되었습니다.`)
		} catch (error) {
			console.error(error)
			message.reply(`\`${command.name}\`명령어를 로드하는데 오류가 발생하였습니다!`)
		}
}

exports.callSign = ['reload', '리로드']
exports.helps = {
    description: '명령어를 리로드합니다.\n',
    uses: '재부팅'
}