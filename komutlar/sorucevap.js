const Discord = require('discord.js') 
const cevaplar = [
  "Evet", 
    "Hayır", 
    "Muhtemelen", 
    "İmkansız", 
    "Ne yazık ki hayır", 
    "Maalesef",  
    "Tabii ki", 
    "Belki de", 
    "Şimdi söylemeyeceğim", 
  "Odaklan ve tekrar sor",
  "aga bu soru cevaplanamaz",
  "seni fbi ya şikayet etcem lan",
  "yasa dışı bir soru bu, başka soru sor",
  "cevaplarsam öldürürler😨",
  "cevaplayamam izliyorlar beni",
  "yasaklı soru",
  "aga bu nasıl soru❓",
  "yok ebenin --, salak mısın la❓",
  "cevaplayamam",
  "kusura bakma",
  " cevaplayamam kb"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return  message.channel.send('Bana Sormak İstediğin Soruyu Yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0    
  };  
  exports.help = {
    name: 'sorusor'
    
  };