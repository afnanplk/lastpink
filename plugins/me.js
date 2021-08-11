/*
*/

const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const ME = "bot provide member profile pics,this one is only working with public mode"
const Language = require('../language');
const Lang = Language.getString('system_stats');
const ALIVEMSG = ('\n\n1:05  ───|────── 2:53\n|◁              II             ▷|\n\n»»════ ⋆★⋆ ════««')
let FM = Config.WORKTYPE == 'public' ? false : true



    Asena.addCommand({pattern: 'me', fromMe: FM, desc: ME}, (async (message, match) => {
        let pp
        try {
             pp = await message.client.getProfilePicture(
                message.jid.includes('-') ? message.data.participant : message.jid ); } 
             
             catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) =>
         { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: "\n»»————　♔　———-««\n" + ALIVEMSG });
                                                                                                    
    });
    }));
