const Discord = require('discord.js');

exports.run = function(client, message) {
      
     let kiÅi = message.mentions.users.first() || client.users.cache.get;
    if (!kiÅi)
    return message.channel.send("` Birisini Etiketle.`");
  
var aÅk = ["â¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤","â¤â¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤","â¤â¤â¤ð¤ð¤ð¤ð¤ð¤ð¤ð¤","â¤â¤â¤â¤ð¤ð¤ð¤ð¤ð¤ð¤","â¤â¤â¤â¤â¤ð¤ð¤ð¤ð¤ð¤","â¤â¤â¤â¤â¤â¤ð¤ð¤ð¤ð¤","â¤â¤â¤â¤â¤â¤â¤ð¤ð¤ð¤","â¤â¤â¤â¤â¤â¤â¤â¤ð¤ð¤","â¤â¤â¤â¤â¤â¤â¤â¤â¤ð¤"]

var aÅk1 = aÅk[Math.floor(Math.random() * aÅk.length)];
  
const aÅk2 = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL())
.setDescription(`Dostum ${kiÅi} adlÄ± kiÅiyi: \n ${aÅk1} \nBu Kadar Seviyorsun!`)
.setColor('RED')
message.channel.send(aÅk2)

};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'aÅk'
};