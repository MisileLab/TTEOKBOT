const figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = async (TTEOGBOT, message) => {
    const noText = new Discord.MessageEmbed()
    .setTitle(':x: ERROR')
    .setColor("RED")
    .setDescription('영어나 기호만 입력하여 주세요!!!')
    .setTimestamp()
    .setFooter("올바른 글자를 입력하여 주세요!!")
    const args = message.content.slice(" ").split(" ")
    if(!args[1]) return message.channel.send(noText);
    
    msg = args.slice(1).join(" ");
    
    figlet.text(msg, function (err, data){
        if(err){
            console.log('**오류가 발생하였습니다!**');
            message.channel.send('**오류가 발생하였습니다!**')
        }
        if(data.length > 2000) return message.channel.send('2000자 미만의 글자만 변환할 수 있습니다')
    
        message.channel.send('```' + data + '```')
     })
}



exports.callSign = ['figlet', '기호', '글자']
exports.helps = {
    description: '글자를 기호로 보냅니다.(영어와 기호만 가능합니다)\n',
    uses: '기호 [텍스트]'
}