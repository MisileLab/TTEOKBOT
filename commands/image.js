const img = require('images-scraper')
const error = require('../utils/embed.js')

const google = new img({
    puppeteer : {
        headless : true,
    }
})
exports.run = async (TTEOGBOT, message) => {
    const args = message.content.slice(" ").split(" ")
    const query = args.slice(1).join(" ")

    if(!query) return error.wrongcmd(message, "T_이미지 [검색할 이미지 이름]")

    let pp = await message.channel.send("이미지를 찾고 있어요!(이미지가 없을경우엔 뜨지않습니다)")
    let aa = await message.channel.send("이미지 로딩중...(약 9초이상 소요)")
    const results = await google.scrape(query, 1)
    pp.edit('퐁!')
    aa.delete()
    message.channel.send(results[0].url);
}

exports.callSign = ['im', 'image', '이미지']
exports.helps = {
    description: '찾고싶은 이미지를 말하시면 찾아드립니다.\n',
    uses: '이미지'
}