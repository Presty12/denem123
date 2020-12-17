const { Discord, MessageEmbed } = require('discord.js');
const = require('../settings.json');

module.exports = (oldUser, newUser) => {

    if (oldUser.bot || newUser.bot) return;
        let sunucu = ""
        let logKanal = ""
        let member = sunucu.members.cache.get(oldUser.id);
        let embed = new MessageEmbed().setTitle(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(sunucu.name).setColor("RANDOM")
        let embed1 = new MessageEmbed().setTitle(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(sunucu.name).setColor("RANDOM")
        let tag = ""
        let tagrol = ""
        let teyitçi = ""
        let booster = ""
        let erkekrol = ""
        let kadınrol = ""


        if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
            if (member.manageable) {
                    member.roles.add(tagrol);
                        if (logKanal) { logKanal.send(embed.setDescription(`${member} adlı üye tagımızı **(tag)** aldığı için kendisine ekip rolü verildi.`)) }else{ member.send(`**${sunucu.name}** adlı sunucumuzda tagımızı **(tag)** aldığın için ekip rolü kazandın.`).catch() }
            }
        };

        if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
             if (member.manageable) {
                 if (!member.roles.cache.has(teyitçi)) {
                     member.roles.remove(tagrol);
                     if (logKanal) { logKanal.send(embed1.setDescription(`${member} adlı üye tagımızı **(tag)** bıraktığı için kendisinden ekip rolü alındı.`)) }else{ member.send(`**${sunucu.name}** adlı sunucumuzda tagımızı **(tag)** bıraktığın için ekip rolünü kaybettin.`).catch() }
                    }else{
                        if (member.roles.cache.has(erkekrol)) {
                            if (logKanal) { logKanal.send(embed1.setDescription(`${member} adlı yetkili tagımızı **(tag)** bıraktığı için kendisinden ekip rolü ve yetkileri alındı.`)) }else{ member.send(`**${sunucu.name}** sunucumuzda tagımızı **(tag)** saldığın için yetkilerin alındı.`).catch() }
                        member.roles.cache.has(booster) ? member.roles.set([booster, erkekrol]) : member.roles.set([erkekrol]);
                        return;
                        }
                        if (member.roles.cache.has(kadınrol)) {
                            if (logKanal) { logKanal.send(embed1.setDescription(`${member} adlı yetkili tagımızı **(tag)** bıraktığı için kendisinden ekip rolü ve yetkileri alındı.`)) }else{ member.send(`**${sunucu.name}** sunucumuzda tagımızı **(tag)** saldığın için yetkilerin alındı.`).catch() }
                            member.roles.cache.has(booster) ? member.roles.set([booster, kadınrol]) : member.roles.set([kadınrol]);
                            return;
                        }
                    }
             }
        }

};

module.exports.configuration = {
    name: "userUpdate"
  }
