//Processo INICIAL - Configurações básicas//

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

//Processo INICIAL - Configurações básicas//

//Processo INICIAL - Start//

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

//Processo INICIAL - Start//

//Processo SECUNDÁRIO - Descrição//

client.on("ready", () => {
  let activities = [
    `${config.prefix}help`,
    `by ρv#0672`
  ],
  i = 0;
  setInterval( () =>
  client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 500 * 60);
  client.user
  .setStatus("online")
  .catch(console.error);
console.log(`Estamos ONLINE!

---------------------------------------------------------------------------------

☁ CloudBot
 Um bot não-profissional (bem parecido com a Lorrita) do meu servidor do discord

Lista de Comandos
   c!antispam {on/off} (Ativa o modo de antiraid nos canais)

   c!avatar {user} (Mostra o avatar do usuario mencionado)

   c!notas {text} (Manda um aviso ao canal #Avisos)

   c!clear {num<99} (Limpa as mensagens até 14 dias atrás)

   c!coinflip {cara/coroa} (Cara ou Coroa!)

   c!embed {text}

   c!emoji {emoji} (Aumenta o tamanho do emoji)

   c!help (A Lista de comandos)

   c!sugestão {text} (Manda uma sugestão)

   c!ping (Informa o ping do servidor)

   c!say {text} (Manda uma msg)

   c!temp-msg {text} (Manda uma mensagem temporária)

   c!uptime (Mostra o tempo ativo)
   `)
});

//Processo SECUNDÁRIO - Descrição//

//Processo TERCIÁRIO - Login//

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

//Processo TERCIÁRIO - Login//