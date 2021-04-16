const Discord = require('discord.js');

exports.run = function(client, message) {
      
     let kişi = message.mentions.users.first() || client.users.cache.get;
    if (!kişi)
    return message.channel.send("` Birisini Etiketle.`");
  
var aşk = ["❤🖤🖤🖤🖤🖤🖤🖤🖤🖤","❤❤🖤🖤🖤🖤🖤🖤🖤🖤","❤❤❤🖤🖤🖤🖤🖤🖤🖤","❤❤❤❤🖤🖤🖤🖤🖤🖤","❤❤❤❤❤🖤🖤🖤🖤🖤","❤❤❤❤❤❤🖤🖤🖤🖤","❤❤❤❤❤❤❤🖤🖤🖤","❤❤❤❤❤❤❤❤🖤🖤","❤❤❤❤❤❤❤❤❤🖤"]

var aşk1 = aşk[Math.floor(Math.random() * aşk.length)];
  
const aşk2 = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL())
.setDescription(`Dostum ${kişi} adlı kişiyi: \n ${aşk1} \nBu Kadar Seviyorsun!`)
.setColor('RED')
message.channel.send(aşk2)

};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'aşk'
};