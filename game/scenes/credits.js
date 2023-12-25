class Credit extends Phaser.Scene
{
	preload ()
	{ }

	create ()
	{
		let scene = this;

		let text = scene.add.text(16, 16, 'credits', { color: '#FFFFFF' });
		text.setBlendMode(Phaser.BlendModes.ADD);
		text.scale = 2.0;
		text.setText([
			'Phaser.io for game engine',
			'Tiled for map editor',
		]);

		let button = scene.add.rectangle(0, scene.cameras.main.height - 64,
			128, 32,
			0x005080);
		button.setOrigin(0, 0);
		button.scale = scene.cameras.main.width / button.width
		button.setInteractive();

		const buttonText = this.add.text(16, 16 + button.y, '< Back To Main Menu', { color: '#FFFFFF' })
		buttonText.scale = 2.25;
		button.on('pointerup', function (){
			scene.game.scene.start('MainMenu');
			scene.game.scene.stop('Credits');
		}, this);

	}
}