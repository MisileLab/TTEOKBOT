const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const commands = require('./')

module.exports.run = async (TTEOGBOT, message, query) => {
    const help = new Discord.MessageEmbed() 
    .setTitle("떡봇 사용법 \n < > 는 필수, [ ] 는 선택, / 는 하나 선택입니다")
    .setColor("#4d93ff")
    .setDescription("떡봇의 도움말이에요! 피드백이 있다면 T_피드백 [할말]로 문의주세요!")
    .addFields() 
    .addFields(
        {
            name: '접두사',
            value: "T_",
        },
        {
            name: 'MODERATION',
            value: "`밴`, `언밴`, `기브어웨이`, `기브어웨이삭제`, `기브어웨이리롤`, `킥`, `채널설정`, `입장`, `퇴장`, `뮤트`, `언뮤트`, `투표`, `경고`, `경고초기화`, `닉네임변경`, `닉네임초기화`, `청소`",
        },
        {
            name: 'Utility',
            value: "`계산`, `답장`, `피드백`, `메모`, `레벨`, `기호`, `이미지`, `프로필`, `멜론`, `스포티파이`, `핑`, `경고확인`, `타이머`, `번역`, `날씨`, `골라`, `말해`, `반전`",
        },
        {
            name: 'INFO',
            value: "`서버정보`, `유저정보`, `봇정보`, `코로나`, `한강`, `인스타프로필`",
        },
        {
            name: 'GAME',
            value: "`주사위`"
        },
        {
            name: 'TEXT',
            value: "`개발자`, `초대`, `떡`, `아이유`, `오픈소스`"
        },
        {
            name: 'ADMIN',
            value: "`재부팅`, `실행`, `리로드`, `블랙리스트`, `콘솔`"
        }
    )
    const user = message.member.user 
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
                            message.channel.send(`<@${message.author.id}> DM으로 도움말을 전송하였어요!`)
                            message.author.send(help)
                    } else {
                        th.delete()
                    if (collected.array()[0].emoji.name === "2️⃣") {
                        message.channel.send(help)
                    }
                    if (collected.array()[0].emoji.name === "❌") {
                        th.delete()
                        message.channel.send(d)
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