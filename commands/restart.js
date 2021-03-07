exports.run = async (TTEOGBOT, message, channel, msg, edit) => {
    await message.channel.send('재부팅중입니다... 기다려도 안될경우 개발자인 누워서 떡먹기#5883에게 문의해주세요.');
    process.exit();

}

exports.callSign = ['재부팅', 'restart', 'r', '리부트', '재시작']
exports.helps = {
    OwnerCheck: true
}