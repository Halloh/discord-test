const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'test',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        //Simply rolls a d6
        //TODO: Improve this by allowing user to roll any type of dice (i.e.: d20 d100 d4 etc)
        message.reply("You rolled a:  " + (Math.floor(Math.random() * 6) + 1));
    }
}


module.exports = DiceRollCommand;  //Makes sure that this gets exported so bot can import correctly
