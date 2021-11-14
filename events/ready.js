module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
      game: {
        name: 'setup by zac',
        type: "STREAMING",
        url: "https://www.twitch.tv/"
      },
});
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
