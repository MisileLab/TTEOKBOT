const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async(message) => {
    try {
        return await axios.get("https://datalab.naver.com/");
    } catch (error) {
        message.channel.send('오류가 발생하였습니다.')
    }
};


getHtml()
    .then(html => {
        let UlList = [];
        const $ = cheerio.load(html.data);
        const $bodyLite = $("div.ah_lite.PM_CL_realtimeKeyword_lite_base ul.ah_l").children("li.ah_item");

        $bodyLite.each(function(i, elem) {
            UlList[i] = {
                title: $(this).find('span.ah_k').text()
            };
        });

        const data = UlList.filter(n => n.title);
        return data;
    })
    .then(res => log(res));


exports.callSign = ['실검', '실시간검색어', 'Seach', 'ns']
exports.helps = {
    description: '실시간 검색어를 보여줍니다.\n',
    uses: '실검'
}