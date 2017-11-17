//Command to message list of updates
const commando = require('discord.js-commando');

class ListChangelogUpdate extends commando.Command {
    constructor(client){
        super(client, {
            name: 'update',
            group: 'update',
            memberName: 'update',
            description: 'Displays list of new features and updates',
            examples: ['!update']
        })
    }

    run(msg){
         return msg.say('Hi, I\'m awake!');  //NOTE:  .say() is commando's version of message.channel.send
    }
};
