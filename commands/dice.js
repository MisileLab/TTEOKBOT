const error = require('../utils/embed.js')
const Discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {

	let dicesss = ['1', '2', '3', '4', '5', '6'];
	let dice = dicesss[Math.floor(Math.random()*dicesss.length)];
    const embed = new Discord.MessageEmbed()
    .setAuthor("주사위 결과는?")
    .setTitle(dice + "!")
    .setColor("RANDOM")
    .setThumbnail("https://ifh.cc/g/TpU2kZ.jpg")
    .setTimestamp()
	message.channel.send(embed)
}

exports.callSign = ['주사위', 'dice']
exports.helps = {
    description: '주사위를 굴립니다.\n',
    uses: '주사위',
}