module.exports = {
  name: "anuncio",
  aliases: ["a"],
  code: `$channelSendMessage[$findChannel[$message[1];no];@everyone/@here
{newEmbed:{title:¡Nuevo anuncio!}{description:\`\`\`
$messageSlice[1]
\`\`\`}{color:RANDOM}
{footer:$userTag}
{thumbnail:$authorAvatar}
{timestamp:ms}};no]
$sendMessage[✅** Anuncio enviado con exito al canal <#$findChannel[$message[1];no]>** {delete:4s}]
$deleteCommand
$onlyIf[$messageSlice[1]!=;⛔** Escribe un mensaje para el anuncio**]
$onlyIf[$findChannel[$message[1];no]!=;⛔** Debes mencionar un canal valido**]
$onlyPerms[admin;⛔** No eres administrador**]
`
}