
class Pet {
    constructor(hunger, sleepiness, boredom, age, name ) {

          this.hunger = hunger
          this.sleepiness = sleepiness
          this.boredom = boredom
          this.age = age
          this.name = name
    }

    eat() {
        // console.log("Eating"); //only used this for debugging 
        if (this.hunger > 0) {
            this.hunger--;
            // console.log("Hunger:", this.hunger); 
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
        // console.log("Playing"); //only used this for debugging 
        if (this.boredom > 0) {
            this.boredom--;
            // console.log("Boredom:", this.boredom);
            document.getElementById('boredom').innerText = `Boredom: ${this.boredom}`;
        } 
    
    }

    agingProcess() {
        this.age++;
        document.getElementById('age').innerText = `Age: ${this.age}`;

        //This block of code morphs the pet when it's age is 4 and when its age is 8
        if (this.age === 4) {
            document.querySelector('.pet-1').style.display = 'none';
            document.querySelector('.pet-2').style.display = 'block';//this displays the element as a block-level element
        } else if (this.age === 8) {
            document.querySelector('.pet-2').style.display = 'none';
            document.querySelector('.pet-3').style.display = 'block';
        }

    }

    
}

// the first and only new instance of the Pet class
const firstPet = new Pet(5, 5, 5, 0, "baby lion");







//This event listener sets up the beginning of the game by clicking the start game buttton
document.addEventListener('DOMContentLoaded', function() {
// I Used the'DOMContentLoaded event to have the perception of a faster loading time

    const startGameButton = document.querySelector('.start-game-event');
    startGameButton.addEventListener('click', function() {

        const petName = prompt("Enter the name of your pet:"); // the name the user enters is stored in the variable petName

        alert(`Your pet's name is ${petName}!`); //the user can't start the game until they name their pet

        initializeGame(firstPet); //the firstPet object is passed as an argument 
    });

    //------------------------------------------------------------------------------------

    function initializeGame(firstPet) {

    const feedButton = document.querySelector('.feed-button');
    const playButton = document.querySelector('.play-button');
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

    feedButton.addEventListener('click', function() {
        firstPet.eat();
    });

    playButton.addEventListener('click', function() {
        firstPet.play();
           });

    //-------------------------------------------------------------------------------
    
     // This function increases the pet's age every minute
     let ageInterval = setInterval(function() {
        firstPet.agingProcess(); // The agingProcess method is called twice in this function to increase the age by two every minute
        firstPet.agingProcess(); 
    }, 60000); // It executes every 1 minute (60,000 milliseconds)
    
      // This function increases Hunger, Sleepiness, and Boredom every 10 seconds
setInterval(function() {
    increaseMetrics();
}, 10000); // It executes every 10 seconds (10,000 milliseconds)

//-----------------------------------------------------------------------------------

function increaseMetrics() {
    if (firstPet.hunger < 10) {
        firstPet.hunger++;
    }
    if (firstPet.sleepiness < 10) {
        firstPet.sleepiness++;
    }
    if (firstPet.boredom < 10) {
        firstPet.boredom++;
    }

    updateMetricsDisplay();
    checkIfPetIsDead();
}

function updateMetricsDisplay() {
    document.getElementById('hunger').innerText = `Hunger: ${firstPet.hunger}`;
    document.getElementById('sleepiness').innerText = `Sleepiness: ${firstPet.sleepiness}`;
    document.getElementById('boredom').innerText = `Boredom: ${firstPet.boredom}`;
}

function checkIfPetIsDead() {
    if (firstPet.hunger === 10 || firstPet.sleepiness === 10 || firstPet.boredom === 10) {
        alert("Your pet is dead! Game over. ");
        clearInterval(ageInterval); //the clearInterval method is used here to stop the pet from aging after the game is over
     

     }
    }

     }



});

























