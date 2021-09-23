/* codded by raashii
use this git under copyright
dont change credit
*/

const Raashi = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const config = require('../config')
const Config = require('../config')

const Heroku = require('heroku-client');
const heroku = new Heroku({
	token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var ok = ''
var error = ''

if (config.LANG == 'EN') {

	ok = '𝖫𝗈𝗀𝗈 𝖠𝖽𝖽𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 🤩'
	error = '𝖲𝗈𝗋𝗋𝗒 𝖳𝗁𝗂𝗌 𝖫𝗂𝗇𝗄 𝖨𝗌 i𝗇𝗏𝖺𝗅𝗂𝖽 🥴'
}

else if (config.LANG == 'ML') {
	
	ok = '*നിങ്ങൾ തന്ന LINK LOGO ആക്കി💌*'
	error = '*ഈ ലിങ്കിൽ എന്തോ തെറ്റ് ഉണ്ട് 🥲*'
}

    Raashi.addCommand({ pattern: 'logo ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  
    
    
    if (match[1].includes === 'jpg' || match[1].includes === 'png') {
		await heroku.patch(baseURI + '/config-vars', {
			body: {
                        ['LOGO_LINK']: match[1]
			}
		});
		await message.sendMessage(ok)

	} else {

		await message.sendMessage(error)

	}
}));
