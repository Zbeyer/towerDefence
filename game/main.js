class BootScene extends Phaser.Scene
{ create () { this.game.scene.start('Preloader'); this.game.scene.stop('Boot'); }}

class PreloadScene extends Phaser.Scene
{
		preload () {
			this.load.baseURL = './game/assets/';
		} create () { this.scene.start('MainMenu'); this.scene.stop('Preloader'); }
}

class QuitScreen extends Phaser.Scene
{ create (){ this.game.destroy(true); }}

class Game
{
	static 	newGame = function ()
	{
		const gameConfig = {
			render: {
				pixelArt: true,
			},
			scale: {
				mode: Phaser.AUTO,
				height: 720,
				width: 1280,
			},
			audio: {
				disableWebAudio: false,
			}
			
		};
		let game = new Phaser.Game(gameConfig);
		this.game = game;
		
		game.scene.add('Boot', BootScene);
		game.scene.add('Preloader', PreloadScene);
		game.scene.add('MainMenu', MainMenu);
		// game.scene.add('MainGame', MainGame);
		game.scene.add('GameOver', GameOver);
		game.scene.add('Credits', Credit);
		game.scene.add('Quit', QuitScreen);
//		
		game.scene.start('Boot');
		return game;
	}
	
	static quit = function ()
	{
		let game = this.game;
		game.destroy(true);
	}
	
}

Game.newGame();