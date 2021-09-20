/* Codded by @afnanplk - farhandqz
PINKY V2
*/

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*Enter text after Command💌*"

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'moretxt', fromMe: true, desc: 'more txtit commands'}, (async (message, match) => {
  
  await message.sendMessage('\n\n\n📱command : .anony\n💎desc : change your text to image.\n\n📱command : .gaming\n💎desc : change your text to gaming logo.\n\n📱command : .flower\n💎desc : change your text to flower image.\n\n📱command : .leavest\n💎desc : change your text to leavest image.\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .maskman\n💎desc : change your text to mask man bg\n🏷️example : .avengers its;BOT X.\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');
  
}));

Asena.addCommand({pattern: 'break ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));
  
  Asena.addCommand({pattern: 'phub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.AFN})

    }));
  
   Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
  Asena.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'maskman?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
  
   
         Asena.addCommand({pattern: 'boxed ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Asena.addCommand({pattern: 'ffire ?(.*)', fromMe: true, dontAddCommandList: false, desc: 'add your text to random freefire logo'}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Asena.addCommand({pattern: 'window ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({pattern: 'skywal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg ,caption: Config.AFN})

}));
  
   Asena.addCommand({pattern: 'holo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: '2ninja ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

   }));
  
   Asena.addCommand({pattern: 'drop ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

 Asena.addCommand({pattern: 'emo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
  
    }));

    Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'moretxt', fromMe: false, desc: 'more txt to img commands'}, (async (message, match) => {
  
  await message.sendMessage('\n\n\n📱command : .gaming\n💎desc : change your text to gaming logo.\n\n📱command : .flower\n💎desc : change your text to flower image.\n\n📱command : .leavest\n💎desc : change your text to leavest image.\n\n📱command : .zneon\n💎desc : change your text into zneon image.\n🏷️example : .zneon BOT;X;Y.\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .cphub\n💎desc : change your text into pornhub comment.\n🏷️example : .cphub zara;hi.\n\n📱command : .pubg\n💎desc : change your text into pubg image.\n🏷️example : .pubg zara;ground.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .maskman\n💎desc : change your text to mask man bg\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');
  
}));

Asena.addCommand({pattern: 'break ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=Raashii.life&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Asena.addCommand({pattern: 'phub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
  Asena.addCommand({pattern: '1917 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({ pattern: 'maskman?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   
         Asena.addCommand({pattern: 'boxed ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Raashii.life&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Asena.addCommand({pattern: 'ffire ?(.*)', fromMe: false, dontAddCommandList: false, desc: 'add your text to random freefire logo'}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Raashii.life&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Asena.addCommand({pattern: 'window ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Asena.addCommand({pattern: 'skywal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
   Asena.addCommand({pattern: 'holo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: '2ninja ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

   }));
  
   Asena.addCommand({pattern: 'drop ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=Raashii.life&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

 Asena.addCommand({pattern: 'emo ?(.*)', fromMe: false, desc: 'emogi to png'}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=Raashii.life&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), {quoted: message.data , mimetype: Mimetype.png, caption: Config.AFN})
  
    }));

    Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {quoted: message.data , mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {quoted: message.data , mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {quoted: message.data , mimetype: Mimetype.video, caption: Config.AFN})

    }));

    Asena.addCommand({ pattern: 'anony ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(NEED_WORD);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=botqueenamdi&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({ pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(NEED_WORD);

    var ttinullimage = await axios.get(`https://api.zeks.me/api/flowertext?apikey=Raashii.life&text=$(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({ pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(NEED_WORD);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=$(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Asena.addCommand({ pattern: 'leavest ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(NEED_WORD);

    var ttinullimage = await axios.get(`https://api.zeks.me/api/leavest?apikey=Raashii.life&text=$(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  Asena.addCommand({pattern: 'zneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText, lastText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        lastText = split[2];
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon?text1=${topText}&text2=${bottomText}&text3=${lastText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  

  Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.me/api/pubglogo?apikey=Raashii.life&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  Asena.addCommand({pattern: 'cphub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.me/api/phub?apikey=Raashii.life&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${topText}&msg=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

}
