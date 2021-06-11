const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const role = await message.guild.roles.cache.find(r => r.id === "776822960286728212");
  const sender = message.author;

  if (!message.member.roles.cache.some(r => [
    "748615863476682943",
    "748615863476682944",
    "748615863476682945",
    "751165482572185741"
  ].includes(r.id))) {
    return message.channel.send(`${sender} Este comando é restrito.`)
  } else if (message.content.includes("on")) {
    await role.setPermissions(67109889);
    await message.channel.send(`O sistema de antiraid foi ligado por ${sender}`)
  } else if (message.content.includes("off")) {
    await role.setPermissions(67177473);
    await message.channel.send(`O sistema de antiraid foi desligado por ${sender}`);
  } else {
    return message.channel.send(`${sender} a sintaxe correta é .antiraid on | off`)
  }
}