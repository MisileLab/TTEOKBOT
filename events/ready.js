'--unhandled-rejections=strict'

module.exports = async client => {
	console.log(client.user.username + "이 활성화 되었습니다!\n")
	let statuses = ['T_도움을 해보세요!', 'T_[아무말]을 해보세요!', `${client.guilds.cache.size}개의 서버와 함께하는 중!`, `${client.channels.cache.size}개의 채널과 함께하는 중!`, `${client.users.cache.size}명의  유저와 함께하는 중!`];
	setInterval(function() {
		let status = statuses[Math.floor(Math.random()*statuses.length)];
		client.user.setPresence({ activity: {name:status}, status: 'online' });
	}, 3000)
}
