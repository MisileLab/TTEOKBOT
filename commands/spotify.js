const Discord = require('discord.js')


module.exports.run = async (TTEOGBOT, message) => {

    let user = message.mentions.users.first() || message.author;
    let status = user.presence.activities[0];

        if(status !== null && status.type === 'LISTENING' && status.name === 'Spotify' && status.assets !== null) {

            let trackIMG = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${status.syncID}`;
            let trackName = status.details;
            let trackAuthor = status.state;
            let trackAlbum = status.assets.largeText;

            const embed = new Discord.MessageEmbed()
                .setAuthor('Spotify 트랙 정보', 'https://cdn.discordapp.com/emojis/653135129870336031.png?v=1')
                .setColor("GREEN")
                .setThumbnail(trackIMG)
                .addField('트랙 제목', trackName, true)
                .addField('앨범', trackAlbum, true)
                .addField('아티스트', trackAuthor, false)
                .addField('트랙 듣기', `[${trackName}](${trackURL})을(를) 들어보아요!`, false)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed)
        } else {
            message.channel.send('**이 사용자는 Spotify를 듣고 있지 않습니다!**');
        }


}

exports.callSign = ['스포티파이', 'spotify']
exports.helps = {
    description: '스포티파이로 듣고있는곡을 표시합니다\n',
    uses: '스포티파이 [@유저]'
}
