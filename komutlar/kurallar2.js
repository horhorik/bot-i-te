const Discord = require('discord.js');
const data = require('wio.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/765956003728326677/766009591866851358/4ea1e74d-1c99-490a-9c13-d46ec11bc4642Fkurallar.gif');
hook.send(`📢 \`${message.guild.name}\` **Sunucu Kurallar**

\`ɱႦ\` **Reklam** Sunucu **İçi** Yasaktır. **(Yetkililere bildirmelisiniz.)**
\`ɱႦ\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** Yasaktır.
\`ɱႦ\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak Yasaktır.
\`ɱႦ\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı Yasak.
\`ɱႦ\` **Cinsel içerikli** görseller paylaşmak Yasaktır.
\`ɱႦ\` **Spam**, **flood** ve **caps** Yasaktır.
\`ɱႦ\` **yetkililere dm den**, **flood** ve **küfür etmek ** Yasaktır.
\`ɱႦ\` **botu yoracak hareketler**, **komut spam ** ve **dm spam ** Yasaktır.
\`ɱႦ\` **iftiralar **, ve **katiyyen** Yasaktır.

\`ɱႦ\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};