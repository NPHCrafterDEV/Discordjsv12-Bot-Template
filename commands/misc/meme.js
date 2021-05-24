const fetch = require("node-fetch")
const Discord = require("discord.js")
module.exports = {
  name: "meme", //command name
  aliases: [],
  usage: "",
  description: "",
  run: async (client, message, args, async) => {
   const data = await fetch(
      "https://www.reddit.com/r/memes/random/.json" 
    ).then((res) => res.json());

    const children = data[0].data.children[0];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;
    const title = children.data.title;
    const upvotes = children.data.ups;
    const comments = children.data.num_comments;

    const meme = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(`${title}`)
      .setURL(url)
      .setImage(image)
      .setFooter(`👍| ${upvotes} 💬| ${comments}`);

    message.channel.send(meme);
  },
};
  
