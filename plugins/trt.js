/* # Exclusively from raashii
 */

const Rashi = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ayin = "ayin"
var wk = Config.WORKTYPE == 'public' ? false : true


Rashi.addCommand({on: 'text', fromMe: wk}, (async (message, match) => {
	     
	     //created by raashii and exclusively for zaramwol
        if (match[1].includes == 'off') {
         await message.client.sendMessage( 
         message.jid,ayin, MessageType.text);
       
}}
));
