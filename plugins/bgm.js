/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

    var l_dsc = ''
    var s_dsc = ''
    var STK_on = ''
    var STK_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        s_dsc = 'turn on and turn of STICKER. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
        STK_on = 'sticker option turned on!'
        STK_off = 'sticker option turned off'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        s_dsc = 'turn on and turn of STICKER. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
        STK_on = 'sticker option turned on!'
        STK_off = 'sticker option turned off'
    }
    Asena.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

    Asena.addCommand({pattern: 'sticker ?(.*)', fromMe: true, desc: s_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(STK_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(STK_on)
        }
    }));
