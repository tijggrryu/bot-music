module.exports = {
  Admins: ["675507024930537473"], //Admins of the bot
  ExpressServer: false, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!b", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://bit.ly/ZacDiscord", //Support Server Link
  Token: process.env.Token || "",//Discord Bot Token
  ClientID: process.env.Discord_ClientID || "909041808976265268", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "eJmBU9UOqJL2KOm-EY0AbL_jwZIlXsOE", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink-repl.sukprasert5144.repl.co",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "bf0762149d4d4007bf9a7e278e5cd4c3", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "258a3d1d35f24fc4b900ffccdc119f6e", //Spotify Client Secret
  },
};
