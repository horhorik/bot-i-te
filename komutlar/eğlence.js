const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('🔰 Eğlence Komutları')
.setTimestamp()
.addField('🔰 .ilginçbilgi', 'İlginç bilgi verir (yapım aşamasında)')
.addField('🔰 .kartopu', 'Karopu Atarsın')
.addField('🔰 .oylama', 'Oylama Yaparsınız')
.addField('🔰 .espri', 'Espri Yaparsınız')
.addField('🔰 .sorusor', 'sorunuzu cevaplar')
.addField('🔰 .adamasmaca', 'Adam Asmaca oynarsınız')
.addField('🔰 .emojiekle', 'Emoji Ekler')
.addField('🔰 .düello', 'etiketlediğniiz kişi ile düello atarsınız')
.addField('🔰 .avatar', 'ppnize bakarsınız')
.addField('🔰 .golat', 'gol atarsın')
.addField('🔰 .kedi', 'bot sana kedi atar')
.addField('🔰 .kapaklaflar', 'eiketlediğin kişiye laf atar')
.addField('🔰 .kapakolsun', 'kapak atar')
.addField('🔰 .token', 'sana tokenini söyler ')
.addField('🔰 .yazan-kazanır', 'kelimeyi hızlı yazan kazanır!!')
.addField('🔰 .aykut-elmas', 'rastgele sana elmas aykut sözleri atar!!')
.addField('🔰 .atasözü', 'rastgele atasözü atar!!')
.addField('🔰 .trumptweet', 'trump tweet atar!!')
.addField('🔰 .piyango', 'piyangoyu kazanacak mısın? !!')
.addField('🔰 .vine', 'komik gönderiler atar!!')
.addField('🔰 .napim', 'dene ve gör!!')
.addField('🔰 .iltifat', 'bot sana iltifat eder!!')
.addField('🔰 .tokatat', 'birine tokat atarsın!!')
.addField('🔰 .söv', 'etiketlediğin kişiye söver(kendini etiketlersen sana da eder) !!')
.addField('🔰 .aşk', 'etiketlediğin kişiyle aşkınızı gösterir !!')
.addField('🔰 .yazıtura', 'yazı mı tura mı gösterir !!')
.addField('🔰 .burakreis', 'random  burak reis sözü atar !!')
.addField('🔰 .diziöner', 'random  dizi önerisi atar !!')
.addField('🔰 .yılbaşı', 'Yılbaşına ne kadar kaldığını gösterir !!')



.setFooter('premier lig', client.user.avatarURL())
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};