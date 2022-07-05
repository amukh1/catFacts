/**
 * @name catFacts
 * @version 0.0.1
 * @description Sends cat facts!
 * @updateURL https://raw.githubusercontent.com/amukh1/catFacts/main/catFacts.plugin.js
 * @website https://amukh1.dev
 * @author Amukh1
 * @source https://raw.githubusercontent.com/amukh1/catFacts/main/catFacts.plugin.js
 * @donate https://cash.app/$amukh1
 */

 
 module.exports =  class ExamplePlugin {
    constructor() {
    this.changelog = [
        {title: "What's Fixed?", type: "improved", items: ["Stuff."]},
    ]
}
    load() {
        const request = require("request");
        request("https://catfact.ninja/fact", function (error, response, body) {
            if (error) {
                console.log(error);
            }else {
                console.log(body);
                BdApi.alert('Cat facts!', JSON.parse(body).fact, 'e', 'b')
            }});
        // let res = await fetch('https://catfact.ninja/fact?max_length=100')
        // let json = await res.json()
    } // Optional function. Called when the plugin is loaded in to memory

    start() {
  console.log('STARTING!')
        // if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        // ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), " https://raw.githubusercontent.com/amukh1/catFacts/main/catFacts.plugin.js");
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {
        console.log('Cat facts closing...')
    } // Required function. Called when the plugin is deactivated

    getSettingsPanel() {
        return `<div class="settings"> <h1>Cat facts!</h1> <p>This is a plugin that sends cat facts!</p> </div>`
    }
}
