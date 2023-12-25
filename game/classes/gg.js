class GivingGame //implements BearPokeInterface
{
	constructor()
	{
		this.score = 0;
	}
	shared()
	{
		return GivingGame.shared();
	}

	static shared()
	{
		let shared = SharedGG;
		if (!shared)
		{
			shared = GivingGame.newGame();
			SharedGG = shared;
		}
		return shared;
	}

	static newGame()
	{
		SharedGG = new GivingGame();
		return GivingGame.shared();
	}

}
SharedGG = new GivingGame();
