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

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) =>  {


        await message.client.sendMessage(message.jid,'*' + Config.BOTPLK + '*' + '  ```CREATED BY```' + Config.PLK + '\n\n' + '*•━━━━━━━━╼  ╾━━━━━━━•*', MessageType.text);
        
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        
        await message.client.sendMessage(message.jid,'*' + Config.BOTPLK + '*' + '  ```CREATED BY```' + Config.PLK + '\n\n' + '*•━━━━━━━━╼  ╾━━━━━━━•*', MessageType.text);

    }));
}
