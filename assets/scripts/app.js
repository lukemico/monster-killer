const ATTACK_VALUE = 10; // use Uppercase to declare a Global variable.
const MONSTER_ATTACK = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
	const damage = dealMonsterDamage(ATTACK_VALUE);
	currentMonsterHealth -= damage;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
	currentPlayerHealth -= playerDamage;
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won!');
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert('You lost!');
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
	}
}

attackBtn.addEventListener('click', attackHandler);
