/* # Exclusively from raashii
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'rsticker ?(.*)', fromMe: true, desc: Lang.RASHI_DESC }, async (message, match) => {

    var ttinullimage = await axios.get(`https://picsum.photos/200/300.webp`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

  });
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'rsticker ?(.*)', fromMe: false, desc: Lang.RASHI_DESC }, async (message, match) => {

    var ttinullimage = await axios.get(`https://picsum.photos/200/300.webp`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

  });

}
