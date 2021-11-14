module.exports = {
  token: process.env.token || "", //Bot's Token
  clientId: process.env.clientId || "", //ID of the bot
  clientSecret: process.env.clientSecret || "", //Client Secret of the bot
  port: 3000, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://bit.ly/ZacDiscord", //Support Server Link
  permissions: 2205281600, //Bot Inviting Permissions
  nodes: [
    {
      identifier: "Main",
      host: "lavalink-repl.sukprasert5144.repl.co",
      port: 443,
      password: "youshallnotpass",
      //retryAmount: 5, - Optional
      //retryDelay: 1000, - Optional
      secure: true //- Optional | Default: false
    },
  ], //Lavalink servers
  embedColor: "BLUE", //Color of the embeds
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "dnd", // You can have online, idle, and dnd
    activities: [
      {
        name: "setup", //Status Text
        type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
        url: "https://twitch.tv/", // Link streaming url
      },
    ],
  },
  iconURL:
    "https://github.com/SudhanPlayz/Discord-MusicBot/raw/master/assets/logo.gif", //This icon will be in every embed's author field
};
