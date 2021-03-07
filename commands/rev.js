const error = require('../utils/embed.js')

module.exports.run = async (TTEOGBOT, message, query) => {
	let str = query.message.slice(query.command.length + 1)
	if(str === "") {
		return error.wrongcmd(message, "`T_반전 [텍스트]`")
	} else {
		let strRev = str.split("").reverse().join("")
		message.delete()
		error.sendEmbed(message, `반전된 텍스트:${strRev}`)
	}
}

exports.callSign = ['반전', 'rev']
exports.helps = {
    description: '메세지를 반전시킵니다.\n',
    uses: '반전 [텍스트]'
}