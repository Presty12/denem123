const { Client, Discord, MessageEmbed, Collection, WebhookClient } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const qdb = require('quick.db');
const db = new qdb.table("ayarlar");
const fs = require("fs");
const conf = require("./settings.json");
global.conf = conf; // guildMemberAdd, userUpdate gibi etkinliklerde işimiz kolaylaşsın.

const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
global.client = client;
fs.readdir("./Commands", (err, files) => {
    if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(file => {
        let prop = require(`./Commands/${file}`);
        if(!prop.configuration) return;
        console.log(`${prop.configuration.name} komutu yükleniyor!`);
        if(typeof prop.onLoad === "function") prop.onLoad(client);
        commands.set(prop.configuration.name, prop);
        if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
});

fs.readdir("./Events", (err, files) => {
    if(err) return console.error(err);
    files.filter(file => file.endsWith(".js")).forEach(file => {
        let prop = require(`./Events/${file}`);
        if(!prop.configuration) return;
        client.on(prop.configuration.name, prop);
    });
});

client.emoji = function(x) {
  return client.emojis.cache.get(client.emojiler[x]);
};
const emoji = global.emoji;

const sayiEmojiler = {
  0: "",  // SAYI EMOJİ İD
  1: "",  // SAYI EMOJİ İD
  2: "",  // SAYI EMOJİ İD
  3: "",  // SAYI EMOJİ İD
  4: "",  // SAYI EMOJİ İD
  5: "",  // SAYI EMOJİ İD
  6: "",  // SAYI EMOJİ İD
  7: "",  // SAYI EMOJİ İD
  8: "",  // SAYI EMOJİ İD
  9: ""   // SAYI EMOJİ İD
};

client.emojiSayi = function(sayi) {
  var yeniMetin = "";
  var arr = Array.from(sayi);
  for (var x = 0; x < arr.length; x++) {
    yeniMetin += (sayiEmojiler[arr[x]] === "" ? arr[x] : sayiEmojiler[arr[x]]);
  }
  return yeniMetin;
};


client.on("message", (message) => {
       if (message.author.bot ||!message.content.startsWith(ayar.prefix) || !message.channel || message.channel.type == "dm") return;
       let args = message.content
         .substring(ayar.prefix.length)
         .split(" ");
       let command = args[0];
       let bot = message.client;
       args = args.splice(1);
       let calistirici;
       if (commands.has(command)) {
         calistirici = commands.get(command);
         calistirici.execute(bot, message, args);
       } else if (aliases.has(command)) {
         calistirici = aliases.get(command);
         calistirici.execute(bot, message, args);
       }
 });

Date.prototype.toTurkishFormatDate = function (format) {
   let date = this,
     day = date.getDate(),
     weekDay = date.getDay(),
     month = date.getMonth(),
     year = date.getFullYear(),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     seconds = date.getSeconds();

   let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
   let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");

   if (!format) {
     format = "dd MM yyyy | hh:ii:ss";
   };
   format = format.replace("mm", month.toString().padStart(2, "0"));
   format = format.replace("MM", monthNames[month]);

   if (format.indexOf("yyyy") > -1) {
     format = format.replace("yyyy", year.toString());
   } else if (format.indexOf("yy") > -1) {
     format = format.replace("yy", year.toString().substr(2, 2));
   };

   format = format.replace("dd", day.toString().padStart(2, "0"));
   format = format.replace("DD", dayNames[weekDay]);

   if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
   if (format.indexOf("hh") > -1) {
     if (hours > 12) hours -= 12;
     if (hours === 0) hours = 12;
     format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
   };
   if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
   if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
   return format;
 };

 message.content.toLowerCase() === "tag" {
  message.channel.send('**TAGINIZ**')


client.login(conf.token).then(console.log("Bot başarılı bir şekilde giriş yaptı.")).catch(err => console.error("Bot giriş yapamadı | Hata: " + err));
