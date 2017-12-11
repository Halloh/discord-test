const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const path = require('path');
const Weather = require('weather-js'); //NOTE:  not implemented yet
const mtg = require('mtgsdk');  //NOTE:  Not sure if need this

/*
client.on("ready", () => {
    client.user.setPresence({ game: { name: "with my code", type: 0 } });
});
*/
const client = new Commando.Client({
    commandPrefix: '!', //What you must type first to use bot command
    owner: '232028507432026112'  //Specify that I'm the owner so I can have full access to the bot from anywhere
}); //NOTE:  commando is an extension of discord client

client.registry
    //Register custom command groups
    .registerGroups([
        ["test", `Under Testing (shouldn't be working right now)`],
        ["random", "Random Commands"],
        ["changelog", "Other"]
    ])
    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory 
    //NOTE:  __dirname means current directory
    .registerCommandsIn(__dirname + "/commands")

    /*
    //You can disable default commands in here.  Just pass an object that contains command name and set the property to 'false
    .registerDefaultCommands({
        help: false
    });*/


client.on('ready', () => {
    console.log('Wisp is logged in');
    client.user.setGame('Mergic der Gertering');
    //NOTE:  If setGame() isn't working, use setActivity();
})

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


//Global settings
const prefix = '~' // This is the prefix, you can change it to whatever you want


// listener Event:  Message Recieved (this will run every time a message is recieved)
client.on("message", message => {
    
/*
    //Variables
    let sender = message.author; // The person who sent the message
    let msg = message.content.toUpperCase(); // Takes the message, and makes it all upercase
    let cont = message.content.slice(prefix.length).split(" "); //This variable slices off the prefix
    let args 
    //Weather command - requires weather.js
    if (msg.startsWith(prefix + 'WEATHER')) {
        weather.find({search: args.join(" "), degreeType: 'F'}, function (err, result){
            if(err) {
                message.send(err);
            }
            
            message.channel.send(JSON.stringify(result[0].current, null, 2)); //This posts the CURRENT part of the FIRST result
            
        });  
    }    */

    //Anti 2 stock joke function
    if(message.content === '2 stock' || message.content === '2-stock' || message.content === '2stock' || message.content === 'two stock'){

        //Deleting specific messages (messages that are not an ID for me)
        if (message.channel.id === '346801330817466368' || message.channel.id === '376477068017532930') //First id is 'general'.  Second id is 'testing'
        {
                message.delete() // This deletes message
        }

        sender.send("What the fuck did you just fucking say about my master, you little bitch? I’ll have you know I graduated top of my class in Bot School, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over Discord? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."); 
    }
});

client.login(process.env.BOT_TOKEN);
//process.env.BOT_TOKEN