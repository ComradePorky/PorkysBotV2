const Commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a bit about me'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("Porky-chan")
            .addField("About Me", "Hello, my name is Porky! Beep Boop Beep Boop I'm your robotic helper and friend ^-^", true)
            .addField("Tbh", "I'm not sure what the point of this even is since I'm the only one who will be using it x3", true)
            .setColor(0xff3300)
            .setThumbnail(message.author.avatarURL)
            .setFooter("Thanks for reading. I hope I can be helpful to you =3")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;