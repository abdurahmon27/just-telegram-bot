const TelegramBot = require("node-telegram-bot-api");

// Telegram bot API token
const token = "TELEGRAM-BOT-TOKEN";

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

//bot commands
bot.setMyCommands([{ command: "/start", description: "Start" }]);

//bot | send and recieve messages | take msg
bot.on("message", async (msg) => {
  //first start command
  if (msg.text === "/start") {
    bot.sendMessage(
      msg.from.id,
      `Assalomu alaykum <b>${msg.from.first_name}</b>. Siz <b><i>Jizzax turizmini rivojlantirish websahifalar yasash tanlovi botidasiz.</i> </b>`,
      { parse_mode: "HTML" }
    );

    //secont start command

    if (msg.text === "/start") {
      bot.sendMessage(msg.from.id, "Birini tanlang:", {
        reply_markup: {
          keyboard: [[{ text: "Ovoz berish" }], [{ text: "Forwe jamoasi" }]],
        },
      });
    }
  }

  //for seeing all msg items

  console.log(msg);

  if (msg.text === "Ovoz berish") {
    bot.sendMessage(
      msg.from.id,
      `Kanalimizga o'buna bo'lib, O'buna bo'lganligingiz haqida screenshot va kimga ovoz berishingiz haqida qisqacha yozing.! Iltimos usernameni ham qo'shib yozing <i>(@abdurahmon_27)</i> kabi...`,

      { parse_mode: "HTML" }
    );
  }
  if (msg.text === "Forwe jamoasi") {
    bot.sendMessage(
      msg.from.id,
      `<b>https://t.me/dasturlash_forwe</b> | Biz bilan qoling.`,

      { parse_mode: "HTML" }
    );
  }

  //recieve messages to my ID
  bot.sendMessage(
    (msg.chat.id = 1924353326),
    `Admin sizga <b>${msg.chat.first_name}</b> <b>@${msg.chat.username}</b> dan yangi xabar. Xabar: <b>   ${msg.text}</b> . Yuboruvchini ID raqami: <b>${msg.from.id}</b>`,
    { parse_mode: "HTML" }
  );
});

// send message test 1
