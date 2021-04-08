require("dotenv").config();
const { QuickDiscordBot } = require("quick-chat-bot");
const path = require("path");
const bot = new QuickDiscordBot({
  botToken: process.env.BOT_TOKEN,
  commandsDir: path.join(__dirname, "commands"), // ex. 'commands'
  ignoreChannels: [], //array of channels to ignore messages
  testMode: false,
  testChannel: "test", //single channel to listen to while in test mode
  ignoreBots: true, //ignore messages from bots
  showLiveMessages: true, // outputs all chat from the discord server to the console
});
bot.connect();
