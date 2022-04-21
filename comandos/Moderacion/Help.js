module.exports = {
  name: "help",
  code: `$title[1;🛡 | Ayuda de comandos]
$color[1;00ffff]
$thumbnail[1;$userAvatar[$clientID]]
$addTimestamp[1;$dateStamp]
$description[1;Selecciona una categoria a continuacion

Puedes usar el comando \`$getServerVar[prefix]info <comando>\` para mas informacion]
$onlyForIDs[$botOwnerID;]`
} 