const fetch = require('node-fetch')
module.exports = {
  name: "advice",
  aliases: [],
  usage: "",
  description: "",
  run: async (client, message, args, async) => {
  const data = await fetch("https://api.adviceslip.com/advice").then(res => res.json());
  message.channel.send(data.slip.advice);
    }
};
  
  
  
