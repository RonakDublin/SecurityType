module.exports = {
  name: "command-info",
  use: "command-info <comando>",
  des: "Muestra la informacion detallada de los comandos",
  category: "Utilidad",
  aliases: ["info", "command", "find"],
  code: `$title[1;❕ | Ayuda de Comandos]
$addField[1;Uso:;\`$commandInfo[$message;use]\`;no]
$addField[1;Categoria:;\`$commandInfo[$message;category]\`;no]
$addField[1;Cooldown:;\`$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]==];true;$commandInfo[$message;cool]];false;No tiene tiempo de espera]\`;no]
$addField[1;Alias:;\`$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]==];false;$replaceText[$commandInfo[$message;aliases];,;
]];true;No tiene alias]\`;no]
$addField[1;Descripcion:;\`$commandInfo[$message;des]\`;no]
$addField[1;Nombre:;\`$commandInfo[$message;name]\`;no]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;00ffff]
$addTimeStamp[1]
$onlyForIDs[$botOwnerID;]
`
}