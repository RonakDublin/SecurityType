module.exports = (bot) => {
bot.readyCommand({
 channel: '',
 code: `$wait[2d]
$log[$djseval[
 require("table").table([["Desarrollador", client.application.owner.tag],["Bot",client.user.tag], ["Comandos cargados", client.cmd.default.size],["Ping de WebSocket", client.ws.ping+"ms"], ["Version", "v$packageVersion"]]);yes]]`
})
}