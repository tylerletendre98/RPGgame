"use strict";

//each of the characters of the story
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

//runs the actual game
function runGame(){
    displayNewFoe(lion);
    attack(hercules,lion);
    displayNewFoe(hydra);
    attack(hercules,hydra);
    displayVictor(hercules);
    endGame();
    
}

//runs the actual battle of characters
function attack(hercules,otherCharacter){
    while (hercules.health >= 0 && otherCharacter.health >= 0){
        let herculesAttack = prompt(`choose an attack for hercules! ${hercules.attacks}: `);
        otherCharacter.health -= hercules.attackPower;
        let otherCharacterAttack =  otherCharacter.attacks[Math.floor(Math.random() * otherCharacter.attacks.length)];
        hercules.health -= otherCharacter.attackPower;
        alert(`${hercules.name} ${herculesAttack} ${otherCharacter.name} now ${otherCharacter.name} health is ${otherCharacter.health} then ${otherCharacter.name} comes back and ${otherCharacterAttack} now ${hercules.name} health is ${hercules.health}.`);
    }

}

//displays the victor of the battle
function displayVictor(hercules,otherCharacter){
    if (otherCharacter.health >= 0){
    alert(`${hercules.name} has defeated ${otherCharacter.name}`);
    }
    else{
        alert(`${hercules.name} has been defeated!`);
        endGame();
    }
}

//displays when a new foe has shown up
function displayNewFoe(otherCharacter){
    alert(`A new foe approaches their name is ${otherCharacter.name} their health is ${otherCharacter.health}.`);
}
function endGame(){
    if(hercules.health < 0){
    alert('You have defeated the your foes and have captured the guard dog to hell, Congrats you have comepleted the mission!');
    }
    else{
        alert(`${hercules.name} has been defeated! You failed to finish your mission.`);
    }
}



runGame();

