const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, args, message) => {

if(!["", ""].some(x => message.member.roles.cache.get(x) && !messe.member.hasPermission('ADMINISTRATOR'))) return message.channel.send('Bu komudu kullanmak için <@&rolid> olmalısınız.')
let member = message.guild.member(message.mentions.first() || message.guild.members.cache.get(args[0]));

if(!member){
let erkek = db.fetch(`yetkili.${message.author.id}.erkek`)
let kadın = db.fetch(`yetkili.${message.author.id}.kadın`)
let toplam = db.fetch(`yetkili.${message.author.id}.toplam`)

if(erkek === null) erkek = "0"
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(toplam === null) toplam = "0"
if(toplam === undefined) toplam = "0"

const odrane = new MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(`${message.author.username}'in Teyit Bilgileri'`)
.setDescription(`
:christmas_tree: Toplam __${toplam}__ Adet Teyitin Var
:christmas_tree: Toplam __${erkek}__ Adet Erkek Teyitin Var
:christmas_tree: Toplam __${kadın}__ Adet Kadın Teyitin Var`)
.setColor('RANDOM')
return message.channel.send(odrane)

};

if(!member){
let erkekk = await db.fetch(`yetkili.${message.author.id}.erkek`)
let kadınn = await db.fetch(`yetkili.${message.author.id}.kadın`)
let toplamm = await db.fetch(`yetkili.${message.author.id}.toplam`)

if(erkekk === null) erkekk = "0"
if(erkekk === undefined) erkekk = "0"
if(kadınn === null) kadınn = "0"
if(kadınn === undefined) kadınn = "0"
if(toplamm === null) toplamm = "0"
if(toplamm === undefined) toplamm = "0"

const odranee = new MessageEmbed()
.setThumbnail(member.avatarURL ({ dynamic: true}))
.setAuthor(member.username, member.avatarURL)
.setDescription(`
:christmas_tree: Yetkilinin Toplam __${toplam}__ Adet Teyiti Var
:christmas_tree: Yetkilinin Toplam __${erkek}__ Adet Erkek Teyiti Var
:christmas_tree: Yetkilinin Toplam __${kadın}__ Adet Kadın Teyiti Var`)
.setColor('RANDOM')
return message.channel.send(odranee)


};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıtbilgi"],
    permLvl: 0,
}

exports.help = {
      name: "stat"

}
