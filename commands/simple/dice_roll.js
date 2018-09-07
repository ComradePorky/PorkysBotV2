const Commando = require('discord.js-commando')

class DiceRollCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice'
        });
    }

    async run(message, args)
    {
        if(args == "")
        {
            var diceRoll = Math.floor(Math.random() * 6) + 1;
            message.reply("You rolled a " + diceRoll);
        }
        else
        {
            var diceRoll = Math.floor(Math.random() * args) + 1;
            if(isNaN(diceRoll))
            {
                message.reply(args + " is not a number!");
                var diceRoll = Math.floor(Math.random() * 6) + 1;
                message.reply("You rolled a " + diceRoll);
            }
            else
            {
                message.reply("You rolled a " + diceRoll);
            };
            
        }
     }
}

module.exports = DiceRollCommand;