const Discord = require('discord.js');
const Commando = require('discord.js-commando');
/*
client.on("ready", () => {
    client.user.setPresence({ game: { name: "with my code", type: 0 } });
});
*/
const client = new Commando.Client({
    owner: '232028507432026112'  //Specify that I'm the owner so I can have full access to the bot from anywhere
}); //NOTE:  commando is an extension of discord client

client.registry
    //Register custom command groups
    .registerGroups([
        ['random', 'Testing functions'],
        ['update', 'Describe my updates'],
    ])
// Registers all built-in groups, commands, and argument types
.registerDefaults();

//NOTE:  __dirname means current directory
client.registry.registerCommandsIn(__dirname + "/commands");

client.on("message", (message) => {
    if (message.content.startsWith("Wisp bot")) {
        message.channel.send("*Beep boop*");
    }
});

client.on('message', function (message) {
    if(message.content === 'test'){
        message.reply('Test 1 2 3'); //Bot will @ back to user
        //message.channel.sendMessage('You are master *beep boop*');  //Send channel msg
    }
});

//Anti 2 stock joke function
//NOTE: supposedly, sendMessage() is deprecated.  Use something else if possible
client.on("message", message => {
    if(message.content === '2 stock'){
        message.author.sendMessage("What the fuck did you just fucking say about my master, you little bitch? I’ll have you know I graduated top of my class in Bot School, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over Discord? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."); 
    }
});

//DO NOT REVEAL THIS TOKEN TO ANYONE
client.login('Mzc2NjA5MzgzNzkxOTg0NjQx.DOItDA.voX56lRolDktsP9JoDlj8gIlJNI');

