/*
• Developer : Denzy ZeroDay
• Script Type : Case 
• Telegram : https://t.me/pantatBegetar
• Channel : https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04

• Jangan Lupa Follow My Github Dan Hidupin Star ⭐
*/
const chalk = require("chalk");
const fs = require("fs");

global.owner = ["6288809776791"]
global.botname = "@denzy-official/baileys 🕊️"
global.botname2 = "Base Bot New"
global.foto = "https://files.catbox.moe/cuqcvh.jpg"

global.pairing_code = true 
global.custompairing = String.fromCharCode(65,78,65,75,65,66,65,72)

global.telegram = "t.me/pantatbegetar"
global.namaChannel = "Denzy ZeroDay"
global.linkSaluran = "https://whatsapp.com/channel/0029VbAwI4cJ3jv4IuzKob04"

global.mess = {
    owner: `🚫 *AKSES DITOLAK*\nFitur ini hanya bisa digunakan oleh *Owner Bot*.`,
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.white("[•] Update"), chalk.white(`${__filename}\n`))
delete require.cache[file]
require(file)
})
