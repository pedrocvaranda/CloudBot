const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const role = await message.guild.roles.cache.find(r => r.id === "871219270883868702");
  const sender = message.author;

  if (!message.member.roles.cache.some(r => [
    "861690841214484511",
    "886042479030317106",
    "871908994850123866"
  ].includes(r.id))) {
    return message.channel.send(`${sender} Este comando é restrito.`)
  } else if (message.content.includes("on")) {
    await role.setPermissions(67109889);
    await message.channel.send(`O sistema de antiraid foi ligado por ${sender}`)
  } else if (message.content.includes("off")) {
    await role.setPermissions(67177473);
    await message.channel.send(`O sistema de antiraid foi desligado por ${sender}`);
  } else {
    return message.channel.send(`${sender} a sintaxe correta é c!antiraid on | off`)
  }
}