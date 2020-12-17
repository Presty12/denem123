const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, args, message) => {
//bu kısım 1 den fazla yetkili rolü eklemenizi sağlar rol idsi girin ekstra rol eklemek için ["", "", "", "",] gibi yapın!!!
if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')
let member = message.guild.member(message.mentions.first() || message.guild.members.cache.get(args[0]));
let c = message.guild.member(member)

if(!c) return message.channel.send('Bir kişi etiketleyin.')
if(!c.roles.highest.position >= message.members.roles.highest.position) return message.channel.send('Bu kullanıcının yetkilieri senden üstün veya aynı!')

let erkek = message.guild.roles.cache.find(e => e.id === "")//erkek rolün idsi
let xy = message.guild.roles.cache.find(xy => xy.id === "")//2.erkek
let unr = message.guild.roles.cache.find(u => u.id === "")//kayıtsız id
let kayıtlog = message.guild.channels.cache.find(rl => rl.id === "")//log id
let genel = message.guild.channels.cache.find(g => g.id === "")//genel chat id

let tag = ""//tagı girin
let isim = args[1]
let yaş = Number(args[2])
if(!isim) return message.channel.send('Bir isim belirtin.')
if(!yaş) return message.channel.send('Bir yaş belirtin.(Sadece doğal sayı değeri girilebilir!)')


const rol = ""; //erkek rol id isimelr için
datab.set(`rol.${message.guild.id}`, rol)
let rol1 = datab.fetch(`rol.${message.guild.id}`)

let bilgi = db.get(`yetkili.${member.id}`);
db.add(`yetkili.${message.author.id}.erkek`, 1)
db.add(`yetkili.${message.author.id}.toplam`, 1)
let toplamkayıt = db.fetch(`yetkili.${message.author.id}.toplam`);
let erkek = db.fetch(`yetkili.${message.author.id}.erkek`)


c.roles.add(erkek)
c.roles.add(xy)
c.roles.remove(unr)
c.setNickname(`${tag} ${isim} | ${yaş}`)
message.react('🥂')//buraları değiştirebilirsiniz

c.roles.add(erkek)
c.roles.add(xy)
c.roles.remove(unr)
c.setNickname(`${tag} ${isim} | ${yaş}`)
message.react('🥂')//buraları değiştirebilirsiniz
//tekrarlasın sıkıntı çıkmasın

genel.send(`<@${member.id}> Aramıza katıldı! Bir selam verin. Tagımızı alırsan çok mutlu oluruz aşko <3 **${tag}**`)

//buraları değiştirebilirsiniz
const odreyn = new MessageEmbed()
.setTitle(`${member.username} adlı kullanıcının kayıt işlemi başarılı!`)
.setColor('RANDOM')
.setDescription(`
:christmas_tree: <@${member.id}> Başarıyla kayıt edildi.
:christmas_tree: <@${erkek.id}> ve <@${xy.id}> rolü verilip <@${unr.id}> rolü alınmıştır.
:christmas_tree: Kullanıcı artık public odaları görebilir!`)
.setFooter(`${message.author.username} adlı yetkilinin toplam ${toplamkayıt} kaydı oldu / toplam ${erkek} kaydı oldu.`)
.setTimestamp()
message.channel.send(odreyn)


//buraları değiştirebilirsiniz
const odrane = new MessageEmbed()
.setDescription(`
<@${message.author.id}> Adlı yetkili <@${member.id}> adlı kullanıcıyı ${isim} | ${yaş} olarak kayıt etti.
Yetkilinin toplam kayıt sayısı __${toplamkayıt}__
Yetkilinin toplam erkek kayıt sayısı __${erkek}__`)
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
    aliases: ["erkek"],
    permLvl: 0,
}

exports.help = {
      name: "e"

}
