const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => (Math.floor(Math.random() * (dragon.strength - 14) + 15));
const danoWarrior = () => (Math.floor(Math.random() * (warrior.weaponDmg - warrior.strength + 1) + warrior.strength));
const danoMago = () => {
  const obj = {};
  if (mage.mana < 15) {
    obj.mana = 0;
    obj.dano = 'Não possui mana suficiente';
  } else {
    obj.mana = 15;
    obj.dano = Math.floor(Math.random() * (mage.intelligence + 1) + mage.intelligence);
  }
  return obj;   
}

const warriorAtack = (danWarrior) => {
  warrior.damage = danWarrior();
  dragon.healthPoints = dragon.healthPoints - warrior.damage;
};

const mageAtack = (danMage) => {
  mage.damage = danMage().dano;
  mage.mana = mage.mana - danMage().mana;
  (typeof mage.damage === 'number') ? dragon.healthPoints = dragon.healthPoints - mage.damage : mage.damage = danMage().dano;
};

const dragonAtack = (danDragon) => {
  dragon.damage = danDragon();
  warrior.healthPoints -= dragon.damage;
  mage.healthPoints -= dragon.damage;
};

const gameActions = {
  // Crie as HOFs neste objeto.
  actionWorrior: warriorAtack,
  actionMage: mageAtack,
  actionDragon: dragonAtack,
  resulTurn: () => battleMembers,
};

gameActions.actionWorrior(danoWarrior);
gameActions.actionMage(danoMago);
gameActions.actionDragon(danoDragon);

console.log(gameActions.resulTurn());

