const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, args, message) => {

if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')
let member = message.guild.member(message.mentions.first() || message.guild.members.cache.get(args[0]));

let bilgi = db.get(`yetkili.${member.id}.toplam`);
let yazı = "En Fazla Kayıt Yapan 10 Yetkili"

let top = message.guild.members.cache.filter(member => db.get(`yetkili.${member.id}.toplam`)).array().sort((member1, member2) => Number(db.get(`yetkili.${member2.id}.toplam`))-Number(db.get(`yetkili.${member1.id}.toplam`))).slice(0, 15).map((member, index) => (index+1)+" • <@"+ member +"> | \`" + db.get(`yetkili.${member.id}.toplam`) +"\` Kayıta Sahip.").join('\n');
essage.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("RANDOM").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit", "top", "teyit", "top-teyit"],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}
