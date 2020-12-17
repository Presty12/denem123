const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
module.exports.run = async (client, message, users, args) => {

if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')

//BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR\\

let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let isim = message.mentions.members.first() || message.guild.members.get(args[0]);
var sayi = 1
let data = db.get(`isim.${message.guild.id}`)
let rol = db.fetch(`rol.${message.guild.id}`)
if(!data) return message.channel.send(new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(user.user.avatarURL ({ dynamic: true}))
    .setDescription(`
    ${isim} Adlı Kullanıcı Daha Önce Kayıt Olmamış.`)
    .setColor("RANDOM"))
let isimler = data.filter(x => x.userID === isim.id).map(x => `${sayi++}- \`• ${x.isim} | ${x.yas}\`  (<@&${rol}>)\n`).join("\n")
if(isimler === null) isimler = "Kullanıcı hiç kayıt olmamış"
if(isimler === undefined) isimler = "Kullanıcı hiç kayıt olmamış"
//BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR BU KOMUT STRİGADAN ALINMIŞTIR\\


const odrane = new MessageEmbed()
.setColor("RANDOM")
        .setThumbnail(user.user.avatarURL ({ dynamic: true}))
    .setAuthor(`Bu Kullanıcı ${sayi-1} Kere Kayıt Olmuş`)
    .setDescription(`
    ${isimler}`)
    .setColor("RANDOM")
message.channel.send(odrane)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isimler', 'eski-isim'],
  permLevel: 0,
}

exports.help = {
      name: "isimler"

}
