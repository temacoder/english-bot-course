const Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
  start: () => {
    return Markup.inlineKeyboard([
      [ Markup.button.callback('О курсе', 'about-course') ],
      [ Markup.button.callback('Записаться на курс', 'signup') ],
      [ Markup.button.webApp('Наш сайт', 'https://046b-2003-c5-672f-bf61-e5f2-f6f9-5e06-1f7e.eu.ngrok.io/') ]
    ])
  },
  back: () => {
    return Markup.inlineKeyboard([
      [ Markup.button.callback('⬅️ На главную', 'back') ]
    ])
  },
  payments: () => {
    return Markup.inlineKeyboard([
      [ Markup.button.callback('Карта', 'card'), Markup.button.callback('Крипта', 'crypto') ]
    ])
  },
}