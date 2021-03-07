const discord = require('discord.js')
const error = require('../utils/embed.js')

module.exports.run = async (TTEOGBOT, message, query) => {
    let filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '⭕') && user.id === message.author.id
    const text = query.message.slice(query.command.length + 1)
    if(text === undefined || text === "") {
        return error.wrongcmd(message, "`T_피드백 [할말]`")
    } else {
	    let embed = new (discord.MessageEmbed)
		embed.setColor("RANDOM")
		embed.setTitle("피드백 전송 여부!")
		embed.setDescription(`정말로 개발자에게\n**${text}**\n라는 메세지를 전송하시겠습니까?\n`)
		embed.addField("아래 반응을 추가하여 예/아니오를 선택해주세요!", "⭕ - 네\n❌ - 아니오")
		message.channel.send(embed).then((th) => { 
		    th.react('⭕') 
		    th.react('❌') 
		    th.awaitReactions(filter, { 
		        max: 1 
		    }).then((collected) => { 
		        if (collected.array()[0].emoji.name === '⭕') { 
		            try {
		                TTEOGBOT.users.fetch('피드백 메세지를 받을 분의 ID').then((develop) => {
		                    develop.send(`${message.member.user.tag} (${message.author.id})님의 피드백 메세지에요!\n\`${text}\``)
		                })
		                let embed2 = new (discord.MessageEmbed)
		                    embed2.setColor("RANDOM")
		                    embed2.setTitle("전송 완료!")
		                    embed2.addField(`개발자에게 아래 메세지를 전달했어요.`, text)
		                th.edit(embed2)
		            } catch (err) {
		                message.channel.send(`<@${message.author.id}> :< 피드백을 전송하던 중 오류가 발생했네요...`)
		            }
		        } else {
		            let embed3 = new (discord.MessageEmbed)
		                embed3.setColor("RANDOM")
		                embed3.setTitle("전송 실패")
		                embed3.setDescription("실패사유 : 유저가 직접 취소함")
		            th.edit(embed3)
		        }
		    })
		})
	}
}

exports.callSign = ['feedback', 'issue', '피드백', '문의', '건의']
exports.helps = {
    description: '개발자에게 피드백을 전송합니다.\n',
    uses: '피드백 [할말]'
}
