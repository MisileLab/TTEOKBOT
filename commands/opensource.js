exports.run = async (TTEOGBOT, message, channel, msg) => {
    message.channel.send('어..전 미야봇 오픈소스를 구성으로 만들어져있고, 다른 커맨드를 추가하고 있어요!');
}

exports.callSign = ['오픈소스', 'opensource', 'os']
exports.helps = {
    description: '떡봇의 오픈소스를 알려드립니다!\n',
    uses: '오픈소스',
}
