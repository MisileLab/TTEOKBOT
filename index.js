'use strict'

const error = require("./utils/embed.js")
const Tteogbot = require('./classes/tteogbot')
const config = require('./data/config.json')
const { Collection } = require('discord.js')
const Discord = require('discord.js')
const qdb = require('quick.db')
const client = new Discord.Client
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./data/data.db', sqlite3.OPEN_READWRITE, (err) => { if (err) console.log(err) });
const TTEOGBOT = new Tteogbot(config, db)
const { GiveawaysManager } = require('discord-giveaways')
require('./utils/eventLoader')(TTEOGBOT)

const prefix = config.prefix;
TTEOGBOT.giveaways = new GiveawaysManager(TTEOGBOT, {
    storage: './giveaways.json',
    updateCountdownEvery: 2000,
    embedColor: '15e6df',
    reaction : '🎉'
})
TTEOGBOT.snipes = new Discord.Collection();

TTEOGBOT.on('message', async message => {
    if(message.author.bot) return
    xp(message)

    function xp(message) {
        if(message.content.startsWith(config.prefix)) return
        const randomNumber = Math.floor(Math.random() * 10) + 5
        qdb.add(`길드_${message.guild.id}_xp_${message.author.id}`, randomNumber)
        qdb.add(`길드_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
        var level = qdb.get(`길드_${message.guild.id}_level_${message.author.id}`) || 1
        var xp = qdb.get(`길드_${message.guild.id}_xp_${message.author.id}`)
        var xpNeeded = level * 200
        if(xpNeeded < xp) {
            var newLevel = qdb.add(`길드_${message.guild.id}_level_${message.author.id}`, 1)
            qdb.subtract(`길드_${message.guild.id}_xp${message.author.id}`, xpNeeded)
            qdb.delete(`길드_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
            if(newLevel < 2) {
                message.channel.send(`${message.author}, 레벨 업! 1 => 2레벨!`)
                qdb.add(`길드_${message.guild.id}_level_${message.author.id}`, 1)
                qdb.subtract(`길드_${message.guild.id}_xp${message.author.id}`, xpNeeded)
                qdb.delete(`길드_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
            } else {
                message.channel.send(`${message.author}, 레벨 업! ${newLevel - 1} => ${newLevel}레벨!`)
            }
        }
    }
    let balckuser = qdb.get(`블랙리스트_${message.author.id}`)
    if(message.author.bot) return
    if(!message.guild) return 
    if(!message.content.startsWith(config.prefix)) return
    if(message.author.id == `${balckuser}`) {
        return message.reply('당신은 블랙리스트 유저입니다.\n건의사항은 누워서 떡먹기#5883에게 문의해주세요.')
    }
    if(message.channel.type === "dm") {
    return message.author.send("봇 명령어는 채널에서 사용해주세요.").catch(() => { return })
    }
    
    const query = {
        fullText: message.content,
        message: message.content.split(config.prefix)[1],
        command: message.content.split(config.prefix)[1].split(' ')[0],
        args: message.content.split(config.prefix)[1].split(' ').slice(" ").join(" ")
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
