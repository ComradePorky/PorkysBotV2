const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const Token = 'NDg2NjAxNzg2NjIzMjYyNzYx.DnHjsw.El5uA1ATUs3IBxridDYKlvrwSkY';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hello')
    (
        message.channel.sendMessage('Hewwo '+ message.author + ', how are you?')
    )
    if(message.content == "I'm good")
    (
        message.channel.sendMessage("That's Great!")
    )
    if(message.content == 'Join')
    {
        message.member.send("Welcome to the Server");
    }
});

global.servers = {};

bot.on('ready',function(){
    console.log('Ready');
})
bot.on("guildMemberAdd", function(member)
{
    message.member.send("Welcome!");
    let memberRole = member.guild.roles.find("name", "Ferry's Slaves");
    member.addRole(memberRole);
});

bot.login(Token);
