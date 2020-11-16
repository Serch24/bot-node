const teleg = require('telegraf');
const TOKEN = "1xxxxxxxxxxx:Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxw";

const bot = new teleg.Telegraf(TOKEN);

bot.start((ctx)=>{
    ctx.reply(`Hola mi rey ${ctx.from.username} estoy viendo todo qwq`);
});

bot.help((ctx)=>{
    ctx.reply('¿En que te ayudo papi?');
});

//crear mi propio comando
bot.command(['esto','es','una','prueba'],(ctx)=>{
    for (const key in ctx) {
        ctx.reply(`': ${key}'`);
    }
});

//escucha y funciona cuando ve 'pc'
bot.hears('hola',(ctx)=>{
    ctx.reply('Hola guapo');
});

//siempre que se escriba algo responderá lo mismo.
bot.on('text',(ctx)=>{
    console.log(ctx.from.username);
    console.log(ctx.message.text);
    ctx.reply(`${ctx.from.username} estas escribiendo: **${ctx.message.text}**`)
});

bot.on('sticker',(ctx)=>{
    ctx.reply('nice sticker!');
})

bot.launch();