const Discord = require('discord.js')

exports.run = async (TTEOGBOT, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`떡봇의 바탕은 미야봇 오픈소스 바탕으로 구성되어 있으며\n다른 유튜브 오픈소스를 참고하여 만들어져있어요!\n자세한 사항은 [github](https://github.com/sdsuaser7443/TTEOGBOT)에 README.md를 참고해 주세요!`)


    message.channel.send(embed)
}

exports.callSign = ['오픈소스', 'opensource', 'os']
exports.helps = {
    description: '떡봇의 오픈소스를 알려드립니다!\n',
    uses: '오픈소스',
}
