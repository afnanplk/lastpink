/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')


const cn = require('../config');
const vf = "Confirmed Account"
const novf = "Unconfirmed Account"
const bs = "Yes"
const nobs = "no"

if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: false, desc: 'instagram profile' }, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage('NEED USERNAME'))

        await message.sendMessage(infoMessage('LOADING'))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {

            const {biography, username, edge_follow, edge_followed_by, category_name, is_verified, is_private, edge_owner_to_timeline_media, profile_pic_url_hd, full_name, is_business_account } = response.data.graphql.user

            const profileBuffer = await axios.get(profile_pic_url_hd, { responseType: 'arraybuffer' })

            const msg = `*${'NAME'}*: ${full_name} \n*${'USERNAME'}*: ${username} \n*${'BIO'}*: ${biography} \n*${'FOLLOWERS'}*: ${edge_followed_by.count} \n*${'FOLLOWS'}*: ${edge_follow.count} \n*${'ACCOUNT'}*: ${is_private ? 'HIDDEN' : 'PUBLIC'} \n*Hesap Türü:* ${is_verified ? vf : novf} \n*İşletme Hesabı mı?:* ${is_business_account ? bs : nobs} \n*Kategori:* ${category_name} \n*Post Sayısı:* ${edge_owner_to_timeline_media.count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage('NOT_FOUND' + userName))
        })
    });
}

    /*
    Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://shinoa-rest.herokuapp.com/dl/tiktok?link=${userName}`)
          .then(async (response) => {
            const {
              data,
            } = response.data

            const profileBuffer = await axios.get(data.mp4, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'Made by WhatsAsena',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
    */
}
else if (cn.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: false, desc: 'instagram profile' }, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage('NEED USERNAME'))

        await message.sendMessage(infoMessage('LOADING'))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {

            const {biography, username, edge_follow, edge_followed_by, category_name, is_verified, is_private, edge_owner_to_timeline_media, profile_pic_url_hd, full_name, is_business_account } = response.data.graphql.user

            const profileBuffer = await axios.get(profile_pic_url_hd, { responseType: 'arraybuffer' })

            const msg = `*${'NAME'}*: ${full_name} \n*${'USERNAME'}*: ${username} \n*${'BIO'}*: ${biography} \n*${'FOLLOWERS'}*: ${edge_followed_by.count} \n*${'FOLLOWS'}*: ${edge_follow.count} \n*${'ACCOUNT'}*: ${is_private ? 'HIDDEN' : 'PUBLIC'} \n*Hesap Türü:* ${is_verified ? vf : novf} \n*İşletme Hesabı mı?:* ${is_business_account ? bs : nobs} \n*Kategori:* ${category_name} \n*Post Sayısı:* ${edge_owner_to_timeline_media.count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage('NOT_FOUND' + userName))
        })
    });
}
