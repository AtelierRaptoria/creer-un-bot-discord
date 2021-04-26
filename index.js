// Imports
// =============================================================================

const Discord = require("discord.js");
const config = require("./config.json");


// Création d'un client Discord
// =============================================================================

const client = new Discord.Client();


// Lancement du client
// =============================================================================

client.on("ready", () => {
    console.log(`${ client.user } est dans la place !`)
});


// Message de bienvenue
// =============================================================================

// Le client scrute les nouvelles arrivées
client.on("guildMemberAdd", member => {
    // On récupère le salon dans lequel le message de bienvenue sera posté
    const channel = client.channels.cache.get(config.GREETINGS_CHANNEL);
    // Le message est envoyé en apostrophant les nouvelles arrivées
    channel.send(`Bienvenue sur le serveur, ${ member } !`);
});


// Connexion du bot sur le serveur
// =============================================================================

client.login(config.BOT_TOKEN);
