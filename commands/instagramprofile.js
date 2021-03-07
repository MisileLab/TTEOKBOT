const axios = require('axios')
const error = require('../utils/embed.js')
const Discord = require('discord.js')

exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    const profile = args.slice(1).join(" ")
    if (!profile) {
        return error.wrongcmd(message, "`T_인스타프로필 [찾을 유저 이름]`")
    }
    let url, response, account, details;
    try {
        url = `https://instagram.com/${profile}/?__a=1`;
        response = await axios.get(url)
        account = response.data
        details = account.graphql.user
    } catch (error) {
        return message.channel.send(`계정이 아니에요!`)
    }

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${details.is_verified ? `${details.username}` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
        .setDescription(details.biography)
        .setThumbnail(details.profile_pic_url)
        .addFields(
            {
                name: "총 게시물:",
                value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                inline: true
            },
            {
                name: "총 팔로워:",
                value: details.edge_followed_by.count.toLocaleString(),
                inline: true
            },
            {
                name: "팔로잉:",
                value: details.edge_follow.count.toLocaleString(),
                inline: true
            }
        )
    await message.channel.send(embed)

}

exports.callSign = ['인스타프로필', '인스타그램프로필', 'Instagramprofile']
exports.helps = {
    description: '인스타그램 프로필을 찾아드립니다.\n',
    uses: '인스타프로필 [유저 이름]'
}
