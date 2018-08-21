const snekfetch = require('snekfetch')

module.exports.run = (bot, message, args, discord) => {
  snekfetch.get('https://api.chucknorris.io/jokes/random') 
  .then(response => {
      let em = new discord.RichEmbed()
      .setTitle(`Zanity Chuck Norris Jokes`)
      .setDescription(response.body.value)
      .setColor("RANDOM")
      .setThumbnail(response.body.icon_url)
      message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "chucknorris"
}
