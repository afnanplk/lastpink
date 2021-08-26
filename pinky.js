/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 OA_AI: process.env.Z_PINKY_AI === undefined ? true : process.env.Z_BOTNAME,  
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'Pinky' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? 'plk' : process.env.Z_DEP_NAME,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'plk is my creator his full name is afnanplk' : process.env.Z_DEP_REPLY,
    

};
