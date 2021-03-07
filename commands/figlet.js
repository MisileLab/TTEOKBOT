const Discord = require('discord.js');
const figlet = require('figlet');
const error = require('../utils/embed')

module.exports.run = async (TTEOGBOT, message) => {
    const noText = new Discord.MessageEmbed()
    .setTitle(':x: ERROR')
    .setColor("RED")
    .setDescription('영어나 기호만 입력하여 주세요!!!')
    .setTimestamp()
    .setFooter("올바른 글자를 입력하여 주세요!!")
    const args = message.content.slice(" ").split(" ")
    if(!args[1]) return message.channel.send(noText);
    
    p = args.slice(1).join(" ");
    
    figlet.text(p, function (err, data){
        if(err){
            message.channel.send('**오류가 발생하였습니다!**')
        }
        if(2000 < data.length) return message.channel.send('ERROR!\n2000자 미만의 글자만 변환할 수 있습니다')
    
        message.channel.send('```' + data + '```')
     })
}



exports.callSign = ['figlet', '기호', '글자']
exports.helps = {
    description: '글자를 기호로 보냅니다.(영어와 기호만 가능합니다)\n',
    uses: '기호 [텍스트]'
}
