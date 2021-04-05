let hercules ={
    name : 'Hercules',
    health : 300,
    attacks : ['kicks', 'punches', 'throws'],
    attackPower : 60
}

let lion ={
    name: 'Nemean Lion',
    health: 100,
    attacks : ['bite','kick', 'claw'],
    attackPower : 30
}

let hydra = {
    name : "Lernaean Hydra",
    health : 200,
    attacks : ['spitFire', 'bite'],
    attackPower : 40
}

function runGame(){
    attack(hercules,lion);
    displayVictor(hercules,lion);
}

function attack(hercules,otherCharacter){
    while (hercules.health >= 0 && otherCharacter.health >= 0){
        let herculesAttack = prompt(`please choose an attack ${hercules.attacks}: `);
        otherCharacter.health -= hercules.attackPower;
        let otherCharacterAttack =  otherCharacter.attacks[Math.floor(Math.random() * otherCharacter.attacks.length)];
        hercules.health -= otherCharacter.attackPower;
        alert(`${hercules.name} ${herculesAttack} ${otherCharacter.name} now ${otherCharacter.name} health is ${otherCharacter.health} then ${otherCharacter.name} comes back and ${otherCharacterAttack} now ${hercules.name} health is ${hercules.health}.`);
    }

}

function displayVictor(hercules,otherCharacter){
    alert(`${hercules.name} has defeated ${otherCharacter.name}`);
}




runGame();

