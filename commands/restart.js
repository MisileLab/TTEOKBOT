exports.run = async (TTEOGBOT, message, channel, msg, edit) => {
    await message.channel.send('재부팅중입니다... 기다려도 안될경우 개발자인 누워서 떡먹기#5883에게 문의해주시거나, T_피드백 [할말]을 통해 피드백을 보내주세요.');
    process.exit();

}

exports.callSign = ['재부팅', 'restart', 'rs', '리부트', '재시작']
exports.helps = {
    description: '봇을 재부팅합니다\n',
    uses: '재부팅'
}