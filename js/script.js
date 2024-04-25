// alert('Project 1')

//Make a commit after you finish each of the following

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
class Pet {
    constructor(hunger, sleepiness, boredom, age  ) {
          this.hunger = hunger
          this.sleepiness = sleepiness
          this.boredom = boredom
          this.age = age
    }

    eat() {

    }

    rest() {

    }

    play() {

    }

    agingProcess() {

    }

    
}

// Instantiate your Tamagotchi (If you created a class)

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, 
// turn off the lights, 
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
    });
});



// and play with your pet.

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.

// Animate your pet across the screen while it's alive.




