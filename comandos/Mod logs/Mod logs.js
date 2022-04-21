module.exports = [{
  type: "banAdd",
  channel: "$getServerVar[modlogs]",
  code: `$title[1;Mod logs | Baneo]
$addField[1;Rason:;$replaceText[$replaceText[$checkCondition[$getBanReason[$authorID;$guildID]==];true;Sin Rason];false;$getBanReason[$authorID;$guildID]];no]
$addField[1;Realizado por:;$getAuditLogs[1;;MEMBER_BAN_ADD;$guildID;{executor.tag} - {executor.id}];no]
$addField[1;Baneado:;$userTag - $authorID;no]
$addTimeStamp[1]
$color[1;ff0000]
$onlyIf[$guildID==943807935841181757;]`
},{
  type: "messageDelete",
  channel: "$getServerVar[modlogs]",
  code: `$title[1;Mod logs | Mensaje eliminado]
$color[1;ff0000]
$addField[1;Mensaje eliminado:;$message;no]
$addField[1;Realizado por:;$userTag - $authorID;no]
$addField[1;Canal:;<#$channelUsed> - $channelUsed;no]
$addTimeStamp[1]
$onlyIf[$guildID==943807935841181757;]
`
},{
  type: "banRemove",
  channel: "$getServerVar[modlogs]",
  code: `$title[1;Mod logs | Desbaneo]
$addField[1;Realizado por:;$getAuditLogs[1;;MEMBER_BAN_REMOVE;$guildID;{executor.tag} - {executor.id}];no]
$addField[1;Desbaneado:;$userTag - $authorID;no]
$addTimeStamp[1]
$color[1;ff0000]
$onlyIf[$guildID==943807935841181757;]
`
},{
  type: "roleCreate",
  channel: "$getServerVar[modlogs]",
  code: `$title[1;Mod logs | Rol creado]
$addField[1;Realizado por:;$getAuditLogs[1;;ROLE_CREATE;$guildID;{executor.tag} - {executor.id}];no]
$addField[1;Nuevo rol:;<@&$newRole[id]> - $newRole[id];no]
$color[1;ff0000]
$addTimeStamp[1]
$onlyIf[$guildID==943807935841181757;]`
},{
  type: "channelCreate",
  channel: "$getServerVar[modlogs]",
  code: `$title[1;Mod logs | Canal creado]
$addField[1;Realizado por:;$getAuditLogs[1;;CHANNEL_CREATE;$guildID;{executor.tag} - {executor.id}];no]
$addField[1;Tipo de canal:;$replaceText[$replaceText[$replaceText[$replaceText[$newChannel[type];GUILD_NEWS;Canal de Noticias];GUILD_TEXT;Canal de Texto];GUILD_VOICE;Canal de Voz];GUILD_STAGE_VOICE;Canal de Voz de Escenario];no]
$addField[1;Canal creado:;<#$newChannel[id]> - $newChannel[id];no]
$addTimeStamp[1]
$color[1;ff0000]`
}]