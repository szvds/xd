const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by a nigger.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Fucking kid :) | Dev: Nigger` }, type: 0 });
});

nuke.on("message", async(msg)=>{



{if (msg.author.id == 514251596431884298 && msg.content.startsWith("/dm")) {
        let msg_to_send = msg.content.substring(4);
        let memarr = msg.guild.members.array();
        for (let i = 0; i < memarr.length; i++) {
            let mem = memarr[i]
            await mem.send(msg_to_send).catch(() => { });
        }
    }
}


});

nuke.login("NjkyMTQ0ODcwODgxNzU1MTg3.XnqQZA.fDnX099XOlMcqaM4K6BvBxKW3aI");
