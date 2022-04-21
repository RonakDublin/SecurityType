module.exports = {
  name: "update",
  aliases: ["up"],
  code: `$deleteIn[1s]
listo
$updateCommands
$deleteCommand
$onlyForIDs[$botOwnerID;]
`
} 