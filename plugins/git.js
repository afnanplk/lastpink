/* Copyright (C) 2021 AFNAN PALLIKKEL
CODDED AFNAN PALLIKKEL and saidali
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
PINKY
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'git', fromMe: true, desc: 'shows git link of bot'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'𝐙𝐚𝐫𝐚𝐌𝐰𝐨𝐥 Bot created by *ʀᴀᴀsʜɪɪ*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n*🖤GIT LINK* - ```https://github.com/Jokerser-x-Raashii/Zaramwol```', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'git', fromMe: false, desc: 'shows the git link of bot'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'𝐙𝐚𝐫𝐚𝐌𝐰𝐨𝐥 Bot created by *ʀᴀᴀsʜɪɪ* \n\n *GIT LINK* - ```https://github.com/Jokerser-x-Raashii/Zaramwol```' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n*🌚GIT LINK* - ```https://github.com/Jokerser-x-Raashii/Zaramwol```', MessageType.text);
        }
    }));
}
