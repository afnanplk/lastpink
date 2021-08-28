const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/9rrnJ7g/20210815-080839.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 

        *Github link        _https://tinyurl.com/yggyjfgf_*
 

       *Audio commads-1     _https://tinyurl.com/yfdkmuhd_*
 
 
       *Audio commads-2     _https://tinyurl.com/yejp9qkh_*
  
  
      *Sticker commads      _https://tinyurl.com/yejlp33d_*
`}) 

})); 
