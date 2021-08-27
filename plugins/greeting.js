/* Copyright (C)  2020  Raashii.
 */

const Raashii = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
  token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''
var GIF = ''
var PP = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change greeting mode'
  GIF = '𝐆𝐫𝐞𝐞𝐭𝐢𝐧𝐠 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝐆𝐈𝐅 𝐦𝐨𝐝𝐞♻️'
  PP = '𝐆𝐫𝐞𝐞𝐭𝐢𝐧𝐠 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐏𝐈𝐂 𝐦𝐨𝐝𝐞♻️'
}

if (config.LANG == 'ML') {

  rashi_desc = 'greeting mode മാറ്റാൻ'
  GIF = 'GREETING *GIF* മോഡിലേക്ക് മാറ്റി'
  PP = 'GREETING *PROFILE PIC* മോഡിലേക്ക് മാറ്റി'
}

Raashii.addCommand({ pattern: 'greet ?(.*)', fromMe: true, desc: rashi_desc, usage: '.greet pp / gif' }, (async (message, match) => {
  if (match[1] == 'gif') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['GREETING_TYPE']: 'GIF'
      }
    });
    await message.sendMessage(GIF)
  } else if (match[1] == 'pp') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['GREETING_TYPE']: 'PP'
      }
    });
    await message.sendMessage(PP)
  }
}));
