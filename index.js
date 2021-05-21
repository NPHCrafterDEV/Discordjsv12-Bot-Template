const Discord = require('discord.js')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const client = new Discord.Client()
const fetch = require('node-fetch');



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();


const Categories = ["misc"]; //commands => misc put your .js file in the "misc" folder!

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`[Command Handler] Error In Command \n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`[Command Handler] A File Does Not Ends With .js!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`[Command Handler] No Command Name & Command Aliases In A File`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => {

  let Prefix = config.prefix

  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
const nocommand = new Discord.MessageEmbed()
.setTitle('No Command found!')
.setDescription('Try it again or check your spelling!')
.setTimestamp()
.setColor(`RED`)
.setFooter(`${client.user.username} by ${config.ownername}`)
  if (!command) return message.channel.send(nocommand);
  if (command) {
    command.run(client, message, args);
  };
});


client.on("ready", () => {
  console.log("Logged in as " + client.user.tag);
  client.user.setActivity(`My Prefix is ${config.prefix}`)
  });







client.login(config.token)