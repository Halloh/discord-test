const commando = require('discord.js-commando');
const mtg = require('mtgsdk');

module.exports = class MtgSearch extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'mtg',
            group: 'random',
            memberName: 'mtg',
            description: 'Searches mtg image',
            examples: ['!mtg <card name>'],
            /*
            args: [
                {
                    key: 'text',
                    prompt: 'I need a magic card name.  To clarify, Magic the Gathering',
                    type: 'string'
                }
            ]*/
        });
    }

    run(){
      mtg.card.find(3)
      .then(result => {
          console.log(result); // "Black Lotus stuff"
      }) 
    };
}
