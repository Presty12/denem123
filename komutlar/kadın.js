const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, args, message) => {

if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')
let member = message.guild.member(message.mentions.first() || message.guild.members.cache.get(args[0]));
let c = message.guild.member(member)

if(!c) return message.channel.send('Bir kişi etiketleyin.')
if(!c.roles.highest.position >= message.members.roles.highest.position) return message.channel.send('Bu kullanıcının yetkilieri senden üstün veya aynı!')

let kadın = message.guild.roles.cache.find(k => k.id === "")
let xx = message.guild.roles.cache.find(xx => xx.id === "")
let unr = message.guild.roles.cache.find(u => u.id === "")
let kayıtlog = message.guild.channels.cache.find(rl => rl.id === "")
let genel = message.guild.channels.cache.find(g => g.id === "")

let tag = ""
let isim = args[1]
let yaş = Number(args[2])
if(!isim) return message.channel.send('Bir isim belirtin.')
if(!yaş) return message.channel.send('Bir yaş belirtin.(Sadece doğal sayı değeri girilebilir!)')



const rol = ""; //kadın rol id isimler için
datab.set(`rol.${message.guild.id}`, rol)
let rol1 = datab.fetch(`rol.${message.guild.id}`)


let bilgi = db.get(`yetkili.${member.id}`);
db.add(`yetkili.${message.author.id}.kadın`, 1)
db.add(`yetkili.${message.author.id}.toplam`, 1)
let toplamkayıt = db.fetch(`yetkili.${message.author.id}.toplam`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadın`)


c.roles.add(kadın)
c.roles.add(xx)
c.roles.remove(unr)
c.setNickname(`${tag} ${isim} | ${yaş}`)
message.react('🥂')

c.roles.add(kadın)
c.roles.add(xx)
c.roles.remove(unr)
c.setNickname(`${tag} ${isim} | ${yaş}`)
message.react('🥂')
//tekrarlasın sıkıntı çıkmasın ikste

genel.send(`<@${member.id}> Aramıza katıldı! Bir selam verin. Tagımızı alırsan çok mutlu oluruz aşko <3 **(tag)**`)


const odreyn = new MessageEmbed()
.setTitle(`${member.username} adlı kullanıcının kayıt işlemi başarılı!`)
.setColor('RANDOM')
.setDescription(`
:christmas_tree: <@${member.id}> Başarıyla kayıt edildi.
:christmas_tree: <@${kadın.id}> ve <@${xx.id}> rolü verilip <@${unr.id}> rolü alınmıştır.
:christmas_tree: Kullanıcı artık public odaları görebilir!`)
.setFooter(`${message.author.username} adlı yetkilinin toplam ${toplamkayıt} kaydı oldu / toplam ${kadın} kaydı oldu.`)
.setTimestamp()
message.channel.send(odreyn)



const odrane = new MessageEmbed()
.setDescription(`
<@${message.author.id}> Adlı yetkili <@${member.id}> adlı kullanıcıyı ${isim} | ${yaş} olarak kayıt etti.
Yetkilinin toplam kayıt sayısı __${toplamkayıt}__
Yetkilinin toplam kadın kayıt sayısı __${kadın}__`)
.setColor('BLACK')
client.channel.cache.get(kayıtlog).send(odrane)

datab.push(`isim.${message.guild.id}`, {
  userID: member.id,
  isim: isim,
  yas: yaş,
  tag: tag
})

}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kadın", "kız", "k"],
    permLvl: 0,
}

exports.help = {
      name: "k"

}
