const { InlineKeyboard } = require('../buttons')
const messages = require('../messages.json')

module.exports.CallbackHandler = (bot, db) => {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery, session } = ctx

    if (callbackQuery.data === 'about-course') {
      await ctx.editMessageText(messages['about-course'], InlineKeyboard.back())
    }

    if (callbackQuery.data === 'back') {

      if (session.step === 'end') {
        await ctx.replyWithHTML(messages.start, InlineKeyboard.start())
      } else {
        await ctx.editMessageText(messages.start, InlineKeyboard.start())
      }

    }

    if (callbackQuery.data === 'signup') {
      session.step = 'fio'
      await ctx.editMessageText(messages.fio)
    }

    if (callbackQuery.data === 'card') {
      session.step = 'end'
      session.payments = 'Банковская карта'
      await ctx.deleteMessage()
      await ctx.replyWithHTML(`${messages.end}\n\n<b>Ваши данные:</b>\nВаше имя: ${session.name}\nВаш номер телефона: ${session.phone}\nВаш email: ${session.email}\nСпособ оплаты: ${session.payments}`, InlineKeyboard.back())

      //Записываем данные юзера в базу даных
      db.set('Object', {
        [ctx.chat.id]: {
          name: session.name,
          phone: session.phone,
          email: session.email,
          payments: session.payments
        }
      })
    }

    if (callbackQuery.data === 'crypto') {
      session.step = 'end'
      session.payments = 'Криптовалюта'
      await ctx.deleteMessage()
      await ctx.replyWithHTML(`${messages.end}\n\n<b>Ваши данные:</b>\nВаше имя: ${session.name}\nВаш номер телефона: ${session.phone}\nВаш email: ${session.email}\nСпособ оплаты: ${session.payments}`, InlineKeyboard.back())

      //Записываем данные юзера в базу даных
      db.set('Object', {
        [ctx.chat.id]: {
          name: session.name,
          phone: session.phone,
          email: session.email,
          payments: session.payments
        }
      })
    }
  })
}