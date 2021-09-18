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

  Asena.addCommand({ pattern: 'pic ?(.*)', fromMe: true, desc: Lang.RASHI_DESC }, async (message, match) => {

    var ttinullimage = await axios.get(`https://api.zeks.me/api/estetikpic?apikey=Raashii.life`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Raashii ser'})

  });
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'pic ?(.*)', fromMe: false, desc: Lang.RASHI_DESC }, async (message, match) => {

    var ttinullimage = await axios.get(`https://api.zeks.me/api/estetikpic?apikey=Raashii.life`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg,caption: Config.AFN})

  });
}
