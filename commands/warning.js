const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (TTEOGBOT, message) => {
    const user = message.mentions.members.first() || message.member;
    
    let maxwarnings = db.get(`최대경고_${message.guild.id}`)
    let warnings = db.get(`경고_${message.guild.id}_${user.id}`)

    if(maxwarnings === null) maxwarnings = 5;
    if(warnings === null) warnings = 0;

    const embed2 = new Discord.MessageEmbed()
    .setTitle("경고확인")
    .setColor("RANDOM")
    .setDescription(`${user}님은 경고가 없는걸요?`)
    .setFooter("경고가 없네요!")
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL({ dynamic : true }))

    const embed = new Discord.MessageEmbed()
    .setTitle("경고확인")
    .setColor("RED")
    .setDescription(`${user}는 총 **${warnings}/${maxwarnings}** 경고가 있습니다.`)
    .setFooter(`${user.user.username}님의 경고 횟수입니다.`)
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL({ dynamic : true }))


    if(warnings === 0) {
        message.channel.send(embed2)
    }
    else {
        message.channel.send(embed)
    }
} 

exports.callSign = ['경고확인', 'warning']
exports.helps = {
    description: '태그된 사용자에 경고를 확인합니다.\n',
    uses: '경고확인 [@유저] ',
}
