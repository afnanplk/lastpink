/* # Exclusively from raashii
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum yazhuth muthe\n🗡🗡"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'yeah ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e7d9e7b-2a0b-4ad3-9629-06752324a276/d9u6k0r-7c70fc35-be17-4c84-83be-fcdb8963d8bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllN2Q5ZTdiLTJhMGItNGFkMy05NjI5LTA2NzUyMzI0YTI3NlwvZDl1Nmswci03YzcwZmMzNS1iZTE3LTRjODQtODNiZS1mY2RiODk2M2Q4YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1YBw1qCghroYfgjxVmslG8zTAuPu2rzSlgfTKMiijO8`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'yeah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e7d9e7b-2a0b-4ad3-9629-06752324a276/d9u6k0r-7c70fc35-be17-4c84-83be-fcdb8963d8bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllN2Q5ZTdiLTJhMGItNGFkMy05NjI5LTA2NzUyMzI0YTI3NlwvZDl1Nmswci03YzcwZmMzNS1iZTE3LTRjODQtODNiZS1mY2RiODk2M2Q4YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1YBw1qCghroYfgjxVmslG8zTAuPu2rzSlgfTKMiijO8`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

  }));

}
