const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yönetim Komutları')
.setTimestamp()
.addField('👑 .ban', 'Ban atarsınız')
.addField('👑 .sayaç', 'Sayaç Sistemi')
.addField('👑 .rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('👑 .rol-al', 'Kullanıcıdan belirtilen olü alır')
.addField('👑 .modlog', 'Modlog sistemi')
.addField('👑 .reklamengel', 'Reklam Engel ayarlar')
.addField('👑 .everhereengel', 'Ever Here Engel ayarlar')
.addField('👑 .capsengel', 'Capsengel ayarlar')
.addField('👑 .kick', 'Kick Atarsınız')
.setFooter('Premier Lig', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yönetim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};