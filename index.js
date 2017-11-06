const Discord = require('discord.js');
const commando = require('discord.js-commando');

const bot = new commando.Client({
    owner: '232028507432026112'  //Specify that I'm the owner so I can have full access to the bot from anywhere
}); //NOTE:  commando is an extension of discord client

bot.registry
    //Register custom command groups
    .registerGroups([
        ['random', 'Testing functions'],

    ])
// Registers all built-in groups, commands, and argument types
.registerDefaults();

//NOTE:  __dirname means current directory
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.on('message', function (message) {
    if(message.content === 'test'){
        message.reply('Test 1 2 3'); //Bot will @ back to user
        //message.channel.sendMessage('You are master *beep boop*');  //Send channel msg
    }
});

//DO NOT REVEAL THIS TOKEN TO ANYONE
bot.login('Mzc2NjA5MzgzNzkxOTg0NjQx.DOItDA.voX56lRolDktsP9JoDlj8gIlJNI');

