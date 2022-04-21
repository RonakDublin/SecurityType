module.exports = [{
  name: "1",
  code: `**Reacciona según el sexo que tengas**
Hombre: 👦
Mujer: 👧
Otro: 🏳️‍🌈 
$addButton[1;🏳️‍🌈;3;otro;no]
$addButton[1;👧;3;mujer;no]
$addButton[1;👦;3;hombre;no]
$deleteCommand
$onlyForIDs[$botOwnerID;]`
},{
  name: "hombre",
  type: "interaction",
  cooldown: "5s",
  prototype: "button",
  code: `$interactionReply[**✅ | Se te ah dado el rol <@&943858847183958087>** $replaceText[$replaceText[$hasRoles[$guildID;$authorID;943858963571691560];true;\n**⛔ | Se te ah removido el rol <@&943858963571691560>**];false;]$replaceText[$replaceText[$hasRoles[$guildID;$authorID;943975453880885268];true;\n**⛔ | Se te ah removido el rol <@&943975453880885268>**];false;];;;;;yes]
$giveRole[$guildID;$authorID;943858847183958087]
$takeRole[$guildID;$authorID;943858963571691560]
$takeRole[$guildID;$authorID;943975453880885268]`
},{
  name: "mujer",
  type: "interaction",
  cooldown: "5s",
  prototype: "button",
  code: `$interactionReply[**✅ | Se te ah dado el rol <@&943858963571691560>**$replaceText[$replaceText[$hasRoles[$guildID;$authorID;943858847183958087];true;\n**⛔ | Se te ah removido el rol <@&943858847183958087>**];false;]$replaceText[$replaceText[$hasRoles[$guildID;$authorID;943975453880885268];true;\n**⛔ | Se te ah removido el rol <@&943975453880885268>**];false;];;;;;yes]
$takeRole[$guildID;$authorID;943858847183958087]
$giveRole[$guildID;$authorID;943858963571691560]
$takeRole[$guildID;$authorID;943975453880885268]`
},{
  name: "otro",
  type: "interaction",
  cooldown: "5s",
  prototype: "button",
  code: `$interactionReply[**✅ | Se te ah dado el rol <@&943975453880885268>**$replaceText[$replaceText[$hasRoles[$guildID;$authorID;943858963571691560];true;\n**⛔ | Se te ah removido el rol <@&943858963571691560>**];false;]$replaceText[$replaceText[$hasRoles[$guildID;$authorID;943858847183958087];true;\n**⛔ | Se te ah removido el rol <@&943858847183958087>**];false;];;;;;yes]
$takeRole[$guildID;$authorID;943858847183958087]
$takeRole[$guildID;$authorID;943858963571691560]
$giveRole[$guildID;$authorID;943975453880885268]`
}]