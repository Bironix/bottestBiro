const Discod = require('discord.js');

const Client = new Discod.Client();

var prefix = ("/");
var randnum = 0;

Client.login('NDQ0NTY5NzQ2NjA0ODE4NDMy.Ddgsdg.EsLyzm2MMQIhocOB102RYSGaWnA');
//NDQ0NTY5NzQ2NjA0ODE4NDMy.Ddgsdg.EsLyzm2MMQIhocOB102RYSGaWnA
Client.on('ready', () => {
    Client.user.setActivity('Executer du JavaScript');
    console.log("Bot Ready"); 
});


//MSG BIENVENUE//
Client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`:raised_hands: Bienvenue ${member} :smile:`)
    rejoinmember()
    console.log(`${member.user.username} nous a rejoin`);
})


//MSG BYE BYE//
Client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`:wave: Bye Bye ${member}`)
    quitemember()
    console.log(`${member.user.username} nous a quiter`);
})


Client.on('message', message => {
    
    //KICK//
    if (message.content.startsWith(prefix + "kick")) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de kick !");

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentioner un utilisateur")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if (!kick) {
            return message.channel.send("L'utilisateur n'existe pas")
        }

        if (!message.guild.member(Client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas les permission pour kick");
        }

        kick.kick().then(member => {
            //message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
            member.guild.channels.find("name", "expultion").send(`${member.user.username} a été kick par ${message.author.username}`)
            console.log(`${message.author.username} a kick ${member.user.username}`);
        });
    
    }


    if (message.content === (prefix + "testbot")){
        message.channel.send("Le bot est bien co");
        console.log('Bot bien co');
    }


    //BAN//
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de ban !");

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentioner un utilisateur")
        }

        var ban = message.guild.member(message.mentions.users.first());
        if (!ban) {
            return message.channel.send("L'utilisateur n'existe pas")
        }

        if (!message.guild.member(Client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas les permission pour ban");
        }

        ban.ban().then(member => {
            //message.channel.send(`${member.user.username} est ban par ${message.author.username}`)
            member.guild.channels.find("name", "expultion").send(`${member.user.username} a été ban par ${message.author.username}`)
            console.log(`${message.author.username} a ban ${member.user.username}`);
        });
    
    }


    //MUTE//
    if (message.content.startsWith(prefix + "mute")) {
        if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de mute")

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentioner un utilisateur");
        }

        var mute = message.guild.member(message.mentions.users.first())
        if (!mute) {
            return message.channel.send("l'utilisateur n'existe pas");
        }

        if (!message.guild.member(Client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("Je n'ai pas la permission de mute");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            member.guild.channels.find("name", "expultion").send(`${message.author.username} a mute ${mute.user.username}`)
            console.log(`${message.author.username} a mute ${mute.user.username}`);
        })

    }


    //UNMUTE//
    if (message.content.startsWith(prefix + "unmute")) {
        if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de mute")

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentioner un utilisateur");
        }

        var mute = message.guild.member(message.mentions.users.first())
        if (!mute) {
            return message.channel.send("l'utilisateur n'existe pas");
        }

        if (!message.guild.member(Client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("Je n'ai pas la permission de unmute");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            member.guild.channels.find("name", "expultion").send(`${message.author.username} a unmute ${mute.user.username}`)
            console.log(`${message.author.username} a unmute ${mute.user.username}`);
        })

    }
    

    //CLEAR//
    if (message.content.startsWith(prefix + "clear")) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("vous n'avez pas la permission de clear");

        let args = message.content.split(" ").slice(1);

        if (!args[0]) return message.channel.send("tu doit preciser un nombre de message a suprimer")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été suprimés par ${message.author.username}`)
            console.log(`${message.author.username} a effectuer un clear de ${args[0]} messages`);
        })
    }


    //CLEAR 2.0//
    if (message.content.startsWith(prefix + "CLEAR")) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("vous n'avez pas la permission de clear");

        let args = message.content.split(" ").slice(1);

        if (!args[0]) return message.channel.send("tu doit preciser un nombre de message a suprimer")
        message.channel.bulkDelete(args[0]).then(() => {
            console.log(`${message.author.username} a effectuer un CLEAR de ${args[0]} messages`);
        })
    }


    //TEST//
    if (message.content === (prefix + "BiroBot")){
        message.channel.send("oui?");
        console.log('BiroBot a repondu');
    }


    //CONV//
    if (message.content === (prefix + "conv")) {
        message.author.createDM().then(channel => {
            channel.send("Hey, bienvenue");
        })
    }


    //AVATAR BOT//
    if (message.content === (prefix + "botavatar")) {
        var avatarbot_embed = new Discod.RichEmbed()
        .setColor('#ff6600')
        .setTitle(`Voici l'avatar du bot :fencer: :`)
        .setImage(Client.user.avatarURL)
        .setFooter("Le Birobot est un bot de test !  Il n'est pas fini...")
        message.channel.sendEmbed(avatarbot_embed)
        console.log(`${message.author.username} a demander l'avatar du bot`)
    }


    //AVATAR//
    if (message.content.startsWith(prefix + "logo")) {

        if (message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentioner un utilisateur");
        }

        var avat1 = message.guild.member(message.mentions.users.first())
        if (!avat1) {
            return message.channel.send("l'utilisateur n'existe pas");
        }
        var avatar_embed = new Discod.RichEmbed()
        .setColor('#ff6600')
        .setTitle(`Voici l'avatar de ${avat1.user.username} :fencer: :`)
        .setImage(avat1.user.avatarURL)
        .setFooter("Le Birobot est un bot de test !  Il n'est pas fini...")
        message.channel.sendEmbed(avatar_embed)
        console.log(`${message.author.username} a demander l'avatar de ${avat1.user.user}`);
        

    }


    //UP CLIENT//
    if (message.content === prefix + "botclient"){
        let roleclient = message.guild.roles.find("name", "client bot")

        if (message.member.roles.find("name", "client bot")){
            message.member.removeRole(roleclient)
            message.reply(` vous n'avez plus le ${roleclient}`)
        }
        else{
            message.member.addRole(roleclient)
            message.reply(` vous avez désormais le ${roleclient}`)
        }
    }
    


    //EMBED HELP//
    if (message.content === prefix + "helpbot"){
        var helpbots = new Discod.RichEmbed()
        .setColor('#ff6600')
        .addField("Commandes du Bot :page_facing_up:", "  - /helpbot : Affiche les commandes du bot")
        .addField("Info :bar_chart:", "- /infobot : Le bot donne des infos sur lui et sur le serv")
        .addField("Help me :raised_hands:", "- /helpme : le bot m'envoye un mp d'aide (plutot utiliser cette commande que le /helpbot pour eviter d'encombrer de tchat")
        .addField("Test :mag:", "- /testbot : Le bot répond s'il est co")
        .addField("Tirage au sort", "- /Lancer : Le Bot effectu un tirrage au sort pour un grade ou rien")
        .addField("kick :soon:", "- /kick @usersname : Le bot kick le membre (msg dans le salon expultion)")
        .addField("ban :end:", "- /ban @usersname : Le bot ban le membre (msg dans le salon expultion)")
        .addField("Mute", "- /mute @username : Le bot mute la personne mentioner (ce n'est pas temporaire)")
        .addField("Unmute", "- /unmute @username : Le bot unmute la personne mentioner")
        .addField("clear :outbox_tray: ", "- /clear [nbe message] : Le bot suprime le nombre de message donnés")
        .addField("CLEAR :outbox_tray: ", "- /CLEAR [nbe message] : Le bot suprime le nombre de message donnés proprement")
        .addField("Conversation pv :envelope:", "- /conv : le bot crée une discution privé avec vous")
        .addField("Avatar bot :fencer: ", "- /botavatar : Le bot montre son avatar")
        .addField("Avatar :fencer: ", "- /logo : Le bot montre ton avatar")
        .setThumbnail(Client.user.avatarURL)
        .setFooter("Le Birobot est un bot de test !  Il n'est pas fini...")
        message.channel.sendEmbed(helpbots)
        console.log("Commande helpbot demandée");
    }


    //EMBED help ME//
    if (message.content === prefix + "helpme"){
        message.author.createDM().then(channel => {
        channel.send("Voila de l'aide pour m'utiliser :white_check_mark:")
        var helpmebots = new Discod.RichEmbed()
        .setColor('#ff6600')
        .addField("Commandes du Bot :page_facing_up:", "  - /helpbot : Affiche les commandes du bot")
        .addField("Info :bar_chart:", "- /infobot : Le bot donne des infos sur lui et sur le serv")
        .addField("Help me :raised_hands:", "- /helpme : le bot m'envoye un mp d'aide (plutot utiliser cette commande que le /helpbot pour eviter d'encombrer de tchat")
        .addField("Test :mag:", "- /testbot : Le bot répond s'il est co")
        .addField("Tirage au sort", "- /Lancer : Le Bot effectu un tirrage au sort pour un grade ou rien")
        .addField("kick :soon:", "- /kick @usersname : Le bot kick le membre (msg dans le salon expultion)")
        .addField("ban :end:", "- /ban @usersname : Le bot ban le membre (msg dans le salon expultion)")
        .addField("Mute", "- /mute @username : Le bot mute la personne mentioner (ce n'est pas temporaire)")
        .addField("Unmute", "- /unmute @username : Le bot unmute la personne mentioner")
        .addField("clear :outbox_tray: ", "- /clear [nbe message] : Le bot suprime le nombre de message donnés")
        .addField("CLEAR :outbox_tray: ", "- /CLEAR [nbe message] : Le bot suprime le nombre de message donnés proprement")
        .addField("Conversation pv :envelope:", "- /conv : le bot crée une discution privé avec vous")
        .addField("Avatar bot :fencer: ", "- /botavatar : Le bot montre son avatar")
        .addField("Avatar :fencer: ", "- /logo : Le bot montre ton avatar")
        .setThumbnail(Client.user.avatarURL)
        .setFooter("Le Birobot est un bot de test !  Il n'est pas fini...")
        channel.sendEmbed(helpmebots)
        })
    }


    //EMBED INFO//
    if (message.content === prefix + "infobot"){
        var infobots = new Discod.RichEmbed()
        .setColor('#ff6600')
        .addField("BiroBot :shield:", "____________________")
        .addField("Développeur :keyboard::bar_chart: :", "Bironix_")
        .addField("Nom du bot :robot: :", `${Client.user.tag}`, true)
        .addField("# du bot :", `#${Client.user.discriminator}`)
        .addField("Id du bot :", `${Client.user.id-2}`)
        .addField("Type de bot", "bot de modération")
        .addField("Info sur le serv :chart_with_upwards_trend: :", `Il ya a ${message.guild.members.size} membres sur le serv`)
        .addField("Ce bot est connecté sur les serveurs :arrows_counterclockwise: :", "Test bot")
        .addField("_", "Discord developpement")
        .addField("_", "nouveau habbo")
        .addField("_", "et c'est deja bien pour l'instant") 
        .addField("...", ".")
        .setThumbnail(Client.user.avatarURL)
        .setFooter("Le Birobot est un bot de test !  Il n'est pas fini...")
        message.channel.sendEmbed(infobots)
        console.log("Commande infobot demandée");
    }


    //TIRAGE AU SORT//
    if (message.content === prefix + "Lancer"){
       random();

       if (randnum == 0){
        message.reply("(Grade numéro 1), gg tu a gagner un grade !");
        console.log("Grade numéro 1 gagner");
       }

       if (randnum == 1){
        message.reply("(rien), tu n'a rien gagner; dommage...");
        console.log("Rien n'a été gagner");
       }
    } 

});


//FUNCTION TIRAGE AU SORT//
function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}


//FONCTION MEMBRE QUAND REJOIN//
function rejoinmember() {
    message.author.createDM().then(channel => {
        channel.send("Hey, bienvenue a toi sur le discord [nom du discord]");
        message.member.addRole(Membre)
    })
}


//FONCTION MEMBRE QUAND QUITE//
function quitemember() {
    message.author.createDM().then(channel => {
        channel.send("Hey, tu est bien sur de quiter [nom du discord]?");
    })
}
