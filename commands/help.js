module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('help?');

  m.edit(`👋 **| Olá, sou o Cloud!**\n**Lista de comandos:**\n------------------------------ **\n> c!antiraid __on__ | __off__\n> c!avatar __@user__\n> c!aviso __texto__\n> c!clear __Núm 1-99__\n> c!coinflip __cara__ | __coroa__\n> c!embed __texto__\n> c!emoji __emoji__\n> c!ideia __texto__\n> c!ping\n> c!say __texto__\n> c!uptime**`

  );
};