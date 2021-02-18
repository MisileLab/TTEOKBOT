'use strict'

const error = require("./utils/embed.js")
const Tteogbot = require('./classes/tteogbot')
const config = require('./data/config.json')
const sqlite3 = require('sqlite3')
const { Collection } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client
const TTEOGBOT = new Tteogbot(config)
require('./utils/eventLoader')(TTEOGBOT);

const prefix = config.prefix;

client.snipes = new Collection();

TTEOGBOT.on('message', async message => {
    if(message.author.bot) return
    if(!message.guild) return 
    if(!message.content.startsWith(config.prefix)) return
    

	const query = {
        fullText: message.content,
        message: message.content.split(config.prefix)[1],
        command: message.content.split(config.prefix)[1].split(' ')[0],
        args: message.content.split(config.prefix)[1].split(' ').slice(0).join(" ")
    }

    const cmd = TTEOGBOT.commands.get(query.command.toLowerCase())
    if(!cmd) return
    let pass = cmd.helps && (cmd.helps.OwnerCheck || cmd.helps.permission) ?
        (
            cmd.helps.OwnerCheck ?
            config.owners.includes(message.author.id) || error.notdev(message) :
            config.owners.includes(message.author.id) || message.member.hasPermission(cmd.helps.permission) || error.notper(message)
        ) : true
        if ((typeof pass) === 'boolean' && pass) cmd.run(TTEOGBOT, message, query)
        else if ((typeof pass) === 'string') return
})
