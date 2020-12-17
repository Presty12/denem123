const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, args, message) => {

if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')
let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send('Bir kişi etiketleyin.')
if(!member.roles.highest.position >= message.members.roles.highest.position) return message.channel.send('Bu kullanıcının yetkilieri senden üstün veya aynı!')

let bilgi = db.get(`yetkili.${member.id}`);
db.delete(`yetkili.${message.author.id}.erkek`)
db.delete(`yetkili.${message.author.id}.toplam`)
message.react('✅')

message.channel.send(new Discord.MessageEmbed().setAuthor(`Kayıt Sıfırlandı`).setColor("RANDOM").setDescription(`${member} Adlı Kullanıcının Tüm Kayıtları Silindi, <@${message.author.id}> Tarafından Sıfırlandı.`))
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sıfırla", "kayıt-sıfırla", "kayıtları-sıfırla", "db-sıfırla", "dbisil", "db-sil"],
    permLevel: 0
};

exports.help = {
    name: "sıfırla"
}
