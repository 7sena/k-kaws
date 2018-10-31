console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "506792170322395136";


    console.log(`Online`);
client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);


client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);
         client.on('message', message => {
            if (message.content === 'ديلي ') {
              message.channel.send('#daily');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

         client.on('message', message => {
            if (message.content === '10') {
              message.channel.send('#credits @™🖤𝓕𝑶𝑿🖤 | Fox Bank 10000');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


         client.on('message', message => {
            if (message.content === '5') {
              message.channel.send('#credits @™🖤𝓕𝑶𝑿🖤 | Fox Bank 5000');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.login(process.env.BOT_TOKEN);
