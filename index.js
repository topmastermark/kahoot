const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch'),
fs = require('fs'),
settings = JSON.parse(fs.readFileSync(__dirname+"/settings.json"));
const { prefix } = require('./settings.json');
const { token } = require('./settings.json');
request = require('request')

// Made by 𝕄𝕒𝕣𝕜#9999
client.on('ready', async () => {
console.log(`${client.user.tag} is ready !`)
client.user.setActivity('𝕄𝕒𝕣𝕜#9999', { type: 'WATCHING'})
})

client.on('message', async (message) => {
if (message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Made by 𝕄𝕒𝕣𝕜#9999
if (command === "kraid"| command === "kahootraid") {
    const KahootSpammer = require('kahoot-spammer')
    const api = KahootSpammer 
    var gamePin = args[0]
    if(gamePin == undefined)
	  return message.channel.send(`Please specify a kahoot game pin.`)
    const fs = require('fs')
    const content = 'No'
    var BotName = args[1]
    if (BotName == undefined) {
    BotName = 'made by 𝕄𝕒𝕣𝕜#9999'
    }
    var amount = args[2]
    if (amount == undefined) {
    amount = 100
    }
    if(amount>200){ 
      message.channel.send("Please try again with a lower number.");
    }
    const embed = new Discord.MessageEmbed()
    .setTitle('KRaid')
	.setColor("BLACK")
	.setDescription(`Started sending ${amount} kahoot bots to ${gamePin}.`)
    message.channel.send(embed);
    console.log(`${message.author.tag} has requested ${amount} bots to ${gamePin}`)
    api.spam(gamePin, BotName, amount);
    }
})

// Made by 𝕄𝕒𝕣𝕜#9999

client.login(token)
