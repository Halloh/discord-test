//Command to message list of updates
const commando = require('discord.js-commando');

class ChangelogCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'changelog',
            group: 'commands',
            memberName: 'update',
            description: 'Displays list of new features and updates',
            examples: ['!changelog']
        })
    }

    run(msg){
         return msg.say('Master is almost done figuring out Commando.js.  Now if only he can finally give me a decent feature...');  //NOTE:  .say() is commando's version of message.channel.send
    }
};

module.exports = ChangelogCommand;  //Makes sure that this gets exported so bot can import correctly