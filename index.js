const keepAlive = require("./server");
const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: process.env.token,
   prefix: "$getServerVar[prefix]",
   intents: "all",
   suppressAllErrors: true,
   database: {
     type: "default",
     path: "./database/",
     tables: ["main"]
   }
 });

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./comandos/")

const fss = require("fs")
const files = fss.readdirSync('./eventos').filter(file => file.endsWith('.js'))
files.forEach(x => {
 require(`./eventos/${x}`)(bot)
}); 

bot.onMessage()
bot.onInteractionCreate()
bot.onBanAdd()
bot.onBanRemove()
bot.onRateLimit()
bot.onChannelCreate()
bot.onApplicationCmdCreate()
bot.onApplicationCmdDelete()
bot.onApplicationCmdUpdate()
bot.onChannelDelete()
bot.onChannelPinsUpdate()
bot.onChannelUpdate()
bot.onEmojiCreate()
bot.onEmojiDelete()
bot.onEmojiUpdate()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onRoleUpdate()
bot.onMessageDelete()

bot.loopCommand({
code: `
$editChannel[946380185161310239;🌴┃𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒: $membersCount[943807935841181757;all;no];$default;$default;$default;$default;$default;$default]

$editChannel[946382019984781383;🌴┃𝐂𝐋𝐈𝐄𝐍𝐓𝐄𝐒: $sum[$replaceText[$replaceText[$checkCondition[$usersWithRole[946705068596527164;943807935841181757;/]==];true;0];false;$getTextSplitLength
$textSplit[$usersWithRole[946705068596527164;943807935841181757;/];/]];$replaceText[$replaceText[$checkCondition[$usersWithRole[946705330337906719;943807935841181757;/]==];true;0];false;$getTextSplitLength
$textSplit[$usersWithRole[946705330337906719;943807935841181757;/];/]]]
;$default;$default;$default;$default;$default;$default]

$editChannel[946379934954295326;🌴┃𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒: $membersCount[943807935841181757;all;yes];$default;$default;$default;$default;$default;$default]

$editChannel[946382055544090624;🌴┃𝐁𝐎𝐓𝐒: $botCount[943807935841181757];$default;$default;$default;$default;$default;$default]
$suppressErrors
`,
executeOnStartup: false,
  channel: "$getServerVar[modlogs]",
every: 500000
})

bot.status({
  text: "$allMembersCount usuarios",
  status: "dnd",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "Seguridad",
  status: "dnd",
  type: "COMPETING",
  time: 12
})

bot.variables({
  prefix: "s.",
  modlogs: "950050904525127800"
})

console.log(`Node: ${process.version}`)

keepAlive()