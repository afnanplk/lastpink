const fs = require('fs')

const Asena = require('../events');

const {MessageType, Mimetype } = require('@adiwajshing/baileys');

const FilterDb = require('./sql/filters');

const Config = require('../config')

const jid = Config.DISBGM !== undefined ? COnfig.DISBGM.split(',') : [];

const Language = require('../language');

const Lang = Language.getString('filters');

	Asena.addCommand({ on: 'text', fromMe: false }, (async (message, match) => {

			const array = ['FILTERS', 'DELETED']

			array.map(async (a) => {

				let pattern = new RegExp(`\\b${a}\\b`, 'g');

				if (pattern.test(message.message)) {

					await message.client.sendMessage(message.jid,'Lang.' + a, MessageType.text, { quoted: message.data})

				}

			});

		

		var filtreler = await FilterDb.getFilter(message.jid);

		if (!filtreler) return;

		filtreler.map(

			async (filter) => {

				pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');

				if (pattern.test(message.message)) {

					await message.client.sendMessage(message.jid, filter.dataValues.text, MessageType.text, { quoted: message.data });

				}

			}

		);

	}));
