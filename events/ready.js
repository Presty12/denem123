
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");
const ayar = db.get('ayar') || {};
const client = global.client;
module.exports = () => {
  console.log("Abe bot aqtif");
  client.user.setActivity("Gods are loves Odrane");
}
module.exports.configuration = {
  name: "ready"
}
