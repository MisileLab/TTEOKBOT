const { MessageEmbed } = require('discord.js')

exports.run = async (TTEOGBOT, message, channel, msg) => {

    const embed = new MessageEmbed()
    .setDescription("아이유...?\n 누군지 모르겠지만 뭔가 노래를 잘하시고 예쁘시고 천사이실거 같아요!")
    .setColor("RANDOM")
    .setImage("https://post-phinf.pstatic.net/MjAyMDA3MjRfMTUz/MDAxNTk1NTUzOTM1Njg3.NDvtkkERSV1qTherpwGSKQnEJW1VqxVFtDtKAW1YgoAg.b-b0KeIGPclcFJfLT_kySPwbJQBe4fg--u3yePQFz30g.GIF/SecondLittleAztecant-size_restricted.gif?type=w1200")
message.channel.send(embed)
}


exports.callSign = ['IU', '아이유', 'iu']
exports.helps = {
    description: '뭘...까요?\n',
    uses: 'I#?'
}
