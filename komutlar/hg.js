const { Discord, MessageEmbed } = require('discord.js');
const moment = require("moment");
module.exports = (member) => {


let sunucuID = ""
let kayıtkanal = ""
let kayıtçı = ""
let botrol = ""
let kayıtsızrol = ""
let cezalırol = ""
let tag = ""

let memberGün = moment(member.user.createdAt).format("DD");
let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");

    if (member.user.bot) {
        member.roles.add(botrol);
    }else{
        let durum = Date.now()-member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7
        const embed = new MessageEmbed()
              if (kayıtkanal) kayıtkanal.send(embed(.setDescription(`
:christmas_tree: ${member} **adlı üye Dacno'ya katıldı, seninle toplam ${client.emoji('${member.guild.memberCount}')} kişiye ulaştık.**
:christmas_tree: ${kayıtçı} **rolündeki yetkililer seninle ilgilenecektir.**
:christmas_tree: **Sunucumuza kayıt olmak için sese girip teyit vermen gerekmektedir.**
:christmas_tree: **Hesabınızın Oluşturulma Tarihi:** ${memberGün} ${memberAylar} ${memberTarih}
:christmas_tree: ***Bu Hesap :*** __${durum ? "Şüpheli" : "Güvenli"}__
              `)));
              .setColor('BLACK')
              member.setNickname(`${tag || ""} İsim | Yaş`);

    if (durum) {
        member.roles.add(cezalırol)
      }else{
    member.roles.add(kayıtsızrol)
  }
    };


};

module.exports.configuration = {
    name: "guildMemberAdd"
  }
