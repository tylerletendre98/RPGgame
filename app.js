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
    attacks : ['Spits Fire', 'bite'],
    attackPower : 40
}

//Starts the application
acceptMission();

//runs the actual game
function runGame(){
    displayNewFoe(lion);
    attack(hercules,lion);
    displayNewFoe(hydra);
    attack(hercules,hydra);
    displayVictor(hercules,hydra);
    endGame();
    
}

//runs the actual battle of characters
function attack(hercules,otherCharacter){
    while (hercules.health >= 0 && otherCharacter.health >= 0){
        let herculesAction = chooseHerculesAction(hercules);
        otherCharacter.health -= hercules.attackPower;
        let otherCharacterAttack =  otherCharacter.attacks[Math.floor(Math.random() * otherCharacter.attacks.length)];
        hercules.health -= otherCharacter.attackPower;
        alert(`${hercules.name} ${herculesAction} ${otherCharacter.name} now ${otherCharacter.name} health is ${otherCharacter.health} then ${otherCharacter.name} comes back and ${otherCharacterAttack} now ${hercules.name} health is ${hercules.health}.`);
    }

}

//Displays game start story
function acceptMission(){
    let acceptsMission = prompt('You have been tasked by King Eurstheus to go and capture the Guard Dog of the underworld Cerberus. Along the way you may encounter Large foes that you will need to defeat do you want to accept this mission: yes or no? ');
    if(acceptsMission == "yes"){
        alert('You have accepted the mission you will now being your quest!');
        runGame();
    }
    else{
        alert('I guess you dont have what it takes!');
    }
}
// Lets you pick what hercules does
function chooseHerculesAction(hercules){
    let herculesAction = prompt(`What action would you like to take? \. 1. kick \. 2. punch \. 3. throw \. 4. regenerate health`);
    switch(herculesAction){
        case '1' :{
            let herculesAction = 'kicks';
            alert('You have chosen Kick');
            hercules.attackPower = 40;
            return herculesAction;
        }
        case '2' :{
            let herculesAction = 'punches';
            alert('you have chosen Punch');
            hercules.attackPower = 50;
            return herculesAction;
        }
        case '3':{
            let herculesAction = 'throws';
            alert('You have chosen throws');
            hercules.attackPower = 20;
            return herculesAction;
        }
        case '4': {
            let herculesAction = 'regenerates health';
            alert('You have chosen Regenerate Health');
            hercules.health += 50;
            hercules.attackPower = 0;
            return herculesAction;
        }
        default: {
            alert('that was not a valid response please try again');
            return chooseHerculesAction(hercules);
        }
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


