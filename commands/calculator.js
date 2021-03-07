const math = require('mathjs')
const error = require('../utils/embed.js')
const Discord = require('discord.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")

    let resp;



    try {
      resp = math.evaluate(args.slice(1).join(" "))
    } catch (e) {
      let error = new Discord.MessageEmbed()
      .setTitle(message.author.tag + ' ❌ERROR')
      .setDescription(`계산 불가능한 식입니다! **유요한**질문을 입력해주세요.`)
      .setColor('RED')
      return message.channel.send(error)
    }

    if(!args.slice(1).join(" ")) return error.wrongcmd(message, "`T_계산 <숫자>[계산식]<숫자>`")

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('계산기')
    .addField('수학식', `\`\`\`css\n${args.slice(1).join(' ')}\`\`\``)
    .addField('답', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);
  }


exports.callSign = ['계산', '계산기', 'calculator', 'math', 'calc', 'calculate']
exports.helps = {
    description: '계산을 해드려요!\n',
    uses: '계산 <숫자><계산식><숫자>',
}
