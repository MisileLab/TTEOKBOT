const weather = require('weather-js')
const error = require('../utils/embed.js')
const Discord = require('discord.js');

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")

    weather.find({search: args.slice(1).join(" "), degreeType: 'C'}, function (error, result){

        if(error) return message.channel.send(error);
        if(!args[1]) return error.wrongcmd(message, "T_날씨 [지역]")

        if(result === undefined || result.length === 0) return message.channel.send('**알수없는 지역**입니다!');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`${current.observationpoint}의 날씨 정보`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM")
        .addField('시간 종류', `GMT-${location.timezone}`, true)
        .addField('온도 타입', '섭씨', true)
        .addField('온도', `${current.temperature}°`, true)
        .addField('풍향', current.winddisplay, true)
        .addField('체감 온도', `${current.feelslike}°`, true)
        .addField('습도', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
}


exports.callSign = ['날씨', 'weather', 'wh']
exports.helps = {
    description: '지역에 날씨를 보여드립니다.\n',
    uses: '날씨 [지역]'
}
