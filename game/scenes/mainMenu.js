class MainMenu extends Phaser.Scene
{
	create ()
	{
		const scene = this;
		const mainCamera = scene.cameras.main;

		const buttonColor = 0x005080;
		const padding = Dimensions.buttonPadding;
		const buttonHeight = Dimensions.buttonHeight;
		const buttonWidth = Dimensions.buttonWidth;
		const buttonStartY = 256;

		let buttonNewGame = scene.add.rectangle(padding, buttonStartY, buttonWidth, buttonHeight, buttonColor);
		buttonNewGame.setOrigin(0, 0);
		buttonNewGame.setInteractive();
		buttonNewGame.on('pointerdown', function (pointer) {
			console.log('New Game');
		});
		scene.add.text(buttonNewGame.x+padding, buttonNewGame.y + padding, 'New Game', {fontSize: '32px', fill: '#FFF'});

		let buttonCredits = scene.add.rectangle(padding, buttonNewGame.y + buttonHeight + padding,
			buttonWidth, buttonHeight,
			buttonColor);
		buttonCredits.setOrigin(0, 0);
		buttonCredits.setInteractive();
		buttonCredits.on('pointerdown', function (pointer) {
			scene.scene.stop ('MainMenu');
			scene.scene.start('Credits');
		});
		scene.add.text(buttonCredits.x+padding, buttonCredits.y+padding, 'Credits', {fontSize: '32px', fill: '#FFF'});

		let buttonQuit = scene.add.rectangle(padding, buttonCredits.y + buttonHeight + padding,
			buttonWidth, buttonHeight,
			buttonColor);
		buttonQuit.setOrigin(0, 0);
		buttonQuit.setInteractive();
		buttonQuit.on('pointerdown', function (pointer) {
			scene.scene.stop ('MainMenu');
			scene.scene.start('Quit');
		});
		scene.add.text(buttonQuit.x+padding, buttonQuit.y+padding, 'Quit', {fontSize: '32px', fill: '#FFF'});

	}
}