const fetch = require('node-fetch');
const Discord = require('discord.js')

module.exports.run = async (TTEOGBOT, message) => {
	const args = message.content.slice(" ").split(" ")
	let countries = args.slice(1).join(" ");

	let th = await message.channel.send(`<@${message.author.id}> 불러오는 중 이에요!`)
	let tp = await message.channel.send("로딩중...")

	const noArgs = new Discord.MessageEmbed()
	.setTitle('누락 된 인수')
	.setColor(0xFF0000)
	.setDescription('`T_코로나 <나라이름>(영어로 해주세요)`')
	.setTimestamp()

	if(!args.slice(1).join(" ")) {
		tp.delete()
		th.delete()
		return message.channel.send(noArgs);

	}

	if(args.slice(1).join(" ") === "all"){
		fetch(`https://covid19.mathdro.id/api`)
		.then(response => response.json())
		.then(data => {
			let confirmed = data.confirmed.value.toLocaleString()
			let recovered = data.recovered.value.toLocaleString()
			let deaths = data.deaths.value.toLocaleString()

			const embed = new Discord.MessageEmbed()
			.setTitle(`전세계 코로나-19 상황이에요!  🌎`)
			.setColor("RANDOM")
			.setThumbnail("https://ifh.cc/g/vPq3v7.jpg")
			.setTimestamp()
			.setFooter("코로나19 감염이 의심되면 즉시 보건소 및 콜센터(전화1339)로 신고바랍니다!")
			.addField('확진자', confirmed)
			.addField('치료됨', recovered)
			.addField('사망', deaths)

			th.delete()
			tp.delete()
			message.channel.send(embed)
		}) 
} else {
		fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
		.then(response => response.json())
		.then(data => {
			let confirmed = data.confirmed.value.toLocaleString()
			let recovered = data.recovered.value.toLocaleString()
			let deaths = data.deaths.value.toLocaleString()

			const embed = new Discord.MessageEmbed()
			.setTitle(`**${countries}** 코로나-19 상황`)
			.setColor("RANDOM")
			.setThumbnail("https://ifh.cc/g/vPq3v7.jpg")
			.setTimestamp()
			.setFooter("코로나19 감염이 의심되면 즉시 보건소 및 콜센터(전화1339)로 신고바랍니다!")
			.addField('확진환자', confirmed)
			.addField('완치환자', recovered)
			.addField('사망자', deaths)

			th.delete()
			tp.delete()
			message.channel.send(embed)
		}).catch(e => {
			return message.channel.send('나라가 검색되지 않습니다')
		})
	}
}

exports.callSign = ['covid19', 'corona', '코로나', '우한폐렴']
exports.helps = {
    description: '현재 COVID-19 현황을 보여줍니다.\n',
    uses: '코로나 <국가>'
}
