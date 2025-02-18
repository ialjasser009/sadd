const express = require('express');
const app = express();
app.get('/', (req, res) => {	res.send('Hello Express app!');
});
app.listen(3000, () => {
	console.log('\033[32m SERVER STARTED');
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});

//=================================

const Discord = require('discord.js'); 
const client = new Discord.Client();
const ms = require('ms')
const fs = require('fs')
const disbut = require('discord-buttons')
disbut(client)
const axios = require('axios');

//=================================

client.on('ready', () => {
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`[PING] ${client.ws.ping}`)
client.user.setStatus("online")
function msg() { 
 let status = [`Pepo Sp Black`];
 let S = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[S],{ type : 'WATCHING'})
};

setInterval(msg,7000)
}) 

//=================================

let sug = ['9397308','',''];

let link = "https://media.discordapp.ne04/1af4e82a05b54b74.gif";

//=================================

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`❤️`).then(() => {
      })
    message.channel.send({files: [link]});
    })
message.author.send(`شكرار <#${message.channel.id}>`).catch(console.error) 
  }
});  

//=================================

client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})

//=================================

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);