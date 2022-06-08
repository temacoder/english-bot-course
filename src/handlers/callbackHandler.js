const { InlineKeyboard } = require('../buttons')
const messages = require('../messages.json')

module.exports.CallbackHandler = (bot, db) => {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery, session } = ctx


  })
}