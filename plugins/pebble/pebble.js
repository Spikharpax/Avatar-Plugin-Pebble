require('colors');

exports.action = function(data, callback){
  
  // Transfert le client
  var client = Avatar.currentRoom ? Avatar.currentRoom : Config.default.client;
  
  var tblCommand = {
		listen: function() {
			Avatar.Socket.getClientSocket(client).emit('start_listen');
		},
		listen_pebble: function() {
			var qs = { 
				'cmd' : 'mute',
				'sync' : true
			};
			Avatar.remote(qs, client, function() {
				Avatar.ia.action(data.action.sentence, client);
			});
			
		},
		freebox: function() {
			Avatar.run('freebox', { client: client, action: {command: data.action.freebox_cmd, noSpeak: true}});
		},
		stop_listen: function() {
			Avatar.Socket.getClientSocket(client).emit('stop_record');
		},
		listen_from_room: function() {
			// Idem listen mais par menu
			tblCommand['listen']();
		},
		muteOnOff: function() {
			Avatar.run('generic', {client: client, action: {command: 'muteOnOff', set: data.action.muteOnOff_cmd}});
		},
		muteOnOffClient: function() {
			Avatar.run('generic', {client: client, action: {command: 'muteOnOffClient', set: data.action.muteOnOffClient_cmd}});
		},
		set_speaker: function() {
			Avatar.run('generic', {client: client, action: {command: 'set_speaker', set: data.action.set_speaker_cmd}});	
		},
		SonosPlayer: function() {
			switch (data.action.SonosPlayer_cmd) {
			case 'volumeSonosLow' :
				Avatar.run('SonosPlayer', { client: client, action: {command: 'wakeup_volume', value: '15'}});
				break;
			case 'volumeSonosMedium' :
				Avatar.run('SonosPlayer', { client: client, action: {command: 'wakeup_volume', value: '45'}});
				break;
			case 'volumeSonosHight' :
				Avatar.run('SonosPlayer', { client: client, action: {command: 'wakeup_volume', value: '70'}});
				break;
			case 'Pause' :	
				Avatar.run('SonosPlayer', { client: client, action: {command: 'pause'}});
				break;
			case 'Play' :	
				Avatar.run('SonosPlayer', { client: client, action: {command: 'play'}});
				break;
			case 'Next' :	
				Avatar.run('SonosPlayer', { client: client, action: {command: 'next'}});
				break;
			}
		}
	}; 
	
	info("pebble command:", data.action.command.yellow, "From:", (data.client) ? data.client.yellow : 'unknow'.yellow);
	tblCommand[data.action.command]();
	callback();
}

