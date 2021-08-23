/* # Exclusively from Raashii 
 */

const Raashii = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*add emoji after commamd💌*"
const Language = require('../language');
const Lang = Language.getString('rashi');

if (Config.WORKTYPE == 'private') {

  Raashii.addCommand({pattern: 'esticker ?(.*)', fromMe: true, desc: 'emoji to sticker'}, (async (message, match) => {

      if (match[1] === '') return await message.sendMessage(need);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var raashii = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(raashii.data), MessageType.sticker, { mimetype: Mimetype.webp})
  
    }));
}

else if (Config.WORKTYPE == 'public') {

  Raashii.addCommand({pattern: 'esticker ?(.*)', fromMe: true, desc: 'emoji to sticker'}, (async (message, match) => {

      if (match[1] === '') return await message.sendMessage(need);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var raashii = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(raashii.data), MessageType.sticker, { mimetype: Mimetype.webp})
  
    }));

}
