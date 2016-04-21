/*:
 * @plugindesc MMORPG Devkit
 * @author Vinxce

 * @help
 * TODO --> Link to API doc.
 */

//=============================================================================
// MMO.js
//=============================================================================
//
// Needs to be rewritten into a core file, with more modularity.
// Will be configured by a .conf file (feature to do)
//


var $mmo;

(function() {

	var parameters = PluginManager.parameters('mmo_core');

	// Testing purpose, can it be turned in something useful?
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'MMO') {
            switch (args[0]) {
	            case 'Command':
	            	console.log("Do action");
	        }
	    }
    };


	//-----------------------------------------------------------------------------
	// MMO
	//
	// Lot of work to do here!
	//

    var MMO = function() {
    	this.initialize();
    }

    MMO.prototype.initialize = function() {
    	// SceneManager.
    	this._bindBaseEvents();
    }

    MMO.prototype._bindBaseEvents = function() {
    }

    $mmo = new MMO();

})();
