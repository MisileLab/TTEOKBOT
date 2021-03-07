const Discord = require('discord.js')
const error = require('../utils/embed.js')
const db = require('quick.db')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice("T_").split(' ')
    const args3 = message.content.slice(5).split(`${args[1]} ${args[2]} `)
    if(!args[1]) {
        return error.wrongcmd(message, "`T_메모 [추가/보기/삭제] <노트이름> [노트내용(추가 일때만)]`")
    }
    if(!args[2]) {
        return error.wrongcmd(message, "`T_메모 [추가/보기/삭제] <노트이름> [노트내용(추가 일때만)]`")
    }
    if(args[1] === "추가") {
        if(!args3) {
            return error.wrongcmd(message, "`T_메모 [추가/보기/삭제] <노트이름> [노트내용(추가 일때만)`")
        } else {
            db.set(`메모_${args[2]}_${message.author.id}`, args3)
            const addnote = new Discord.MessageEmbed()
            .setTitle(`메모가 생성되었습니다!`)
            .setColor("RANDOM")
            .addFields(
                {
                    name: "메모 이름",
                    value: `${args[2]}`
                },
                {
                    name: "메모 내용",
                    value: `${args3}`,
                },
                {
                    name: "메모 생성자",
                    value: `${message.author.username}`,
                }
            )
            .setFooter("메모가 성공적으로 생성되었습니다!")
            .setTimestamp()
            message.channel.send(addnote)
        }
    }

    if(args[1] === '보기') {
        let note = db.get(`메모_${args[2]}_${message.author.id}`, args3)
        if(!note) {
            return message.channel.send('없는 메모입니다!')
        }
        const Viewnote = new Discord.MessageEmbed()
        .setTitle(`${args[2]} 메모`)
        .setDescription(`노트 내용 : ${note}`)
        .setColor("RANDOM")
        .setFooter(`메모 생성자 : ${message.author.username}`)
        .setTimestamp()
        message.channel.send(Viewnote)
    }
    
    if(args[1] === '삭제') {
        let note = db.get(`메모_${args[2]}_${message.author.id}`)
        if(!note) {
            return message.channel.send('없는 메모입니다!')
        }
        db.delete(`메모_${args[2]}_${message.author.id}`)
        const deletenote = new Discord.MessageEmbed()
        .setTitle('노트가 삭제되었습니다!')
        .setDescription(`삭제된 노트 : ${args[2]}`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(deletenote)
    }
}


exports.callSign = ['메모', '메모장', 'note']
exports.helps = {
    description: '메모\n',
    uses: '메모',
}
