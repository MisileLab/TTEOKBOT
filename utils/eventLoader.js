const reqEvent = (event) => require(`../events/${event}`)

module.exports = TTEOGBOT => {
    TTEOGBOT.on('ready', () => reqEvent('ready')(TTEOGBOT))
    TTEOGBOT.on('message', (message) => reqEvent('message')(message))
}
