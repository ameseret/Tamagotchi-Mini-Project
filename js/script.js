// alert('Project 1')

//Make a commit after you finish each of the following

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
class Pet {
    constructor(hunger, sleepiness, boredom, age, name ) {

          this.hunger = hunger
          this.sleepiness = sleepiness
          this.boredom = boredom
          this.age = age
          this.name = name
    }

    eat() {
        console.log("Eating");
        if (this.hunger > 0) {
            this.hunger--;
            console.log("Hunger:", this.hunger); 
            document.getElementById('hunger').innerText = `Hunger: ${this.hunger}`;
        } 
    }

    rest() {
        if (this.sleepiness > 0) {
            this.sleepiness--;
            document.getElementById('sleepiness').innerText = `Sleepiness: ${this.sleepiness}`;
        }
    }


    play() {
        console.log("Playing");
        if (this.boredom > 0) {
            this.boredom--;
            console.log("Boredom:", this.boredom);
            document.getElementById('boredom').innerText = `Boredom: ${this.boredom}`;
        } 
    
    }

    agingProcess() {
        this.age++;
        document.getElementById('age').innerText = `Age: ${this.age}`;

    }

    
}

// Instantiate your Tamagotchi (If you created a class)

const firstPet = new Pet(10, 10, 10, 10, "baby lion");

// Display a character of your choice on the screen to represent your pet
//-------- I already have the character displayed

// Display the following metrics for your pet:
//------- I have the metrics displayed in html and css now I have to make them active in javascript

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age

// Add buttons to the screen to feed your pet, 
// and play with your pet.
//----------1. I have the buttons displayed in html and css now I have to make them active in javascript
document.addEventListener('DOMContentLoaded', function() {
    const feedButton = document.querySelector('.feed-button');
    const playButton = document.querySelector('.play-button');

    feedButton.addEventListener('click', function() {
        firstPet.eat();
    });

    playButton.addEventListener('click', function() {
        firstPet.play();
    });
});


// turn off the lights, 
//-----1. These two buttons were the first buttons I made active in javascript 
document.addEventListener('DOMContentLoaded', function() {
    const lightsOnBtn = document.querySelector('.lights-on');
    const lightsOffBtn = document.querySelector('.lights-off');
    const background1 = document.querySelector('.background-1');
    const background2 = document.querySelector('.background-2');

    lightsOnBtn.addEventListener('click', function() {
        background1.style.display = 'block';
        background2.style.display = 'none';
        document.body.style.backgroundColor = 'aquamarine';
    });

    lightsOffBtn.addEventListener('click', function() {
        background1.style.display = 'none';
        background2.style.display = 'block';
        document.body.style.backgroundColor = 'black';
        firstPet.rest();
    });
});






// Add the ability to name your pet.

// Style the page.
//------1. Some styling is already done I might update it more later in the build

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.
//------1. I have the different versions of my pet already written in html and css I just have to add the morphing feature in javascript

// Animate your pet across the screen while it's alive.




