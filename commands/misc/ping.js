module.exports = {
  name: "ping",//default command name
  aliases: [],//other command names, the bot reacts to
  usage: "",//how to use the command
  description: "",//description of the command
  run: async (client, message, args) => {
   message.channel.send("The Bot's ping is: " + client.ws.ping + "ms")
  }
}
