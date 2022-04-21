module.exports = [{
name: "c",
code: `$deleteIn[2s]
listo
$createApplicationCommand[$guildID;help;Lista de Comandos;true]
$deleteCommand
$onlyForIDs[$botOwnerID;]
`
},{
  name: "z",
  code: `$createApplicationCommand[$guildID;info;Muestra la informacion de un comando;true;CHAT_INPUT;{
"name": "Comando",
"description": "Nombre o alias del comando",
"type": 3,
"required": true
}]
$onlyForIDs[$botOwnerID;]`
},{
  name: "help",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:🛡 | Ayuda de comandos}
{color:00ffff}
{thumbnail:$userAvatar[$clientID]}
{addtimeStamp:ms}
{description:Selecciona una categoria a continuacion

Puedes usar el comando \`$getServerVar[prefix]info <comando>\` para mas informacion};{actiowRow:{button:Moderacion:secondary:mod:false}};;;yes]
`
}]
