//Command to message list of updates
const commando = require('discord.js-commando');

class ListChangelogUpdate extends commando.Command {
    constructor(client){
        super(client, {
            name: 'changelog',
            group: 'Updates',
            memberName: 'changelog',
            description: 'Displays list of new features and updates'
        })
    }

    async run(message, args){
        
    }
}
