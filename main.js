// // import the dataMap object
// import { dataMap } from "./assets/data.js";

// const game = document.querySelector('#game');
// const title = document.querySelector('#title');
// const choiceContainer = document.querySelector('#choice-container');
// const loadMessage = document.querySelector('.load-screen');
// const fadeTime = 1000; // fade time out in ms

// // start at "start"
// loadMessage.addEventListener("click", (event) => {
//   event.target.style.opacity = 0;
//   event.target.style.pointerEvents = "none";
// });

// let render = dataMap.start;

// function clearButtons() {
//   // fade transition
//   const allButtons = choiceContainer.querySelectorAll(".wrap-button");
//   allButtons.forEach((button) => {
//     button.style.filter = "blur(5px)";
//     button.style.opacity = "0";

//   });
//   const delay = setTimeout(() => {
//     // Clears all child elements (the buttons) inside #game
//     choiceContainer.innerHTML = '';
//   }, fadeTime);

// }

// function renderContent() {
  
//   // create the title
//   title.textContent = render.label;
  
//   // create all the buttons
//   render.choices.forEach( (choice) => {
//     console.log( "choiiice", choice)
//     const buttonWrap = document.createElement("div");
//     const button = document.createElement("div");
//     buttonWrap.className = "wrap-button";
//     button.className = "buttons";
//     button.textContent = choice.label;
//     buttonWrap.addEventListener( "click", () => {
//       clearButtons();
//       render = dataMap[choice.link];
//       setTimeout(() => {
//         renderContent();
      
//       }, fadeTime); 
//     });
//     // add transition
//     buttonWrap.style.transition = `filter ${fadeTime}ms ease-in-out`;
//     buttonWrap.style.transition = `opacity ${fadeTime}ms ease-in-out`;
//     buttonWrap.style.filter = "blur(5px)";
//     buttonWrap.style.opacity = "0";
//     buttonWrap.appendChild( button );
//     choiceContainer.appendChild( buttonWrap );
//     buttonWrap.style.filter = "blur(0px)";
//     buttonWrap.style.opacity = "1";
//   });


// }  
// // clear buttons on init
// clearButtons();
// setTimeout(() => {
//   renderContent();

// }, fadeTime);

// Import the data map object
import { dataMap } from "./assets/data.js";

class CompensationGame {
  constructor() {
    this.game = document.querySelector('#game');
    this.title = document.querySelector('#title');
    this.choiceContainer = document.querySelector('#choice-container');
    this.loadMessage = document.querySelector('.load-screen');
    this.fadeTime = 1000;
    this.currentScene = dataMap.start;

    this.init();
  }

  init() {
    // // Set up load screen listener
    // this.loadMessage.addEventListener('click', () => {
    //   this.loadMessage.style.opacity = 0;
    //   this.loadMessage.style.pointerEvents = 'none';
    // });

    // Start the game
    this.clearScene();
    setTimeout(() => this.renderScene(), this.fadeTime);
  }

  async clearScene() {
    const buttons = this.choiceContainer.querySelectorAll('.wrap-button');
    const fadeOut = buttons.length > 0
      ? Promise.all(
          Array.from(buttons).map(button => {
            button.style.filter = 'blur(5px)';
            button.style.opacity = '0';
            return new Promise(resolve => setTimeout(resolve, this.fadeTime));
          })
        )
      : Promise.resolve();

    await fadeOut;
    this.choiceContainer.innerHTML = '';
  }

  async transitionToScene(nextSceneKey) {
    await this.clearScene();
    this.currentScene = dataMap[nextSceneKey];
    await this.renderScene();
  }

  createChoiceButton(choice, type) {
    const buttonWrap = document.createElement('div');
    const button = document.createElement('div');
    
    buttonWrap.className = 'wrap-button';
    // change class if a checklist
    button.className = type === 'checks' ? 'checkListButtons' : 'buttons';
    button.textContent = choice.label;
    
    // Set up transitions
    buttonWrap.style.transition = `
    filter ${this.fadeTime}ms ease-in-out,
    opacity ${this.fadeTime}ms ease-in-out
    `;
    buttonWrap.style.filter = 'blur(5px)';
    buttonWrap.style.opacity = '0';

    if( type === 'checks') {
      // Add click handler for toggle states
      buttonWrap.addEventListener('click', () => {
        buttonWrap.classList.toggle('selected');
      }); 
    } else {
      // Add click handler for choices
      buttonWrap.addEventListener('click', () => {
        this.transitionToScene(choice.link);
      });
    }

    buttonWrap.appendChild(button);
    return buttonWrap;
  }

  createYesNo( yes, no ) {
    const noYesWrapper = document.createElement('div');
    noYesWrapper.className = "noYesWrapper"; 
    function makeButton( text ) {
      const buttonWrap = document.createElement('div');
      const button = document.createElement('div'); 
      buttonWrap.className = 'wrap-button';
      button.className = 'choice';
      button.innerText = text;
      buttonWrap.appendChild( button );
      return buttonWrap;
    }

    // yes button
    const yesButton = makeButton('Yes');
    yesButton.addEventListener('click', () => {
      // get all checklist buttons, compare yes
      const checks = document.querySelectorAll('.checkListButtons').length;
      const checksYes = document.querySelectorAll('.selected').length;
      if( checksYes >= checks ) {
        this.transitionToScene(yes.link);
      } else {
        // some kind of no
      }
    });

    // no button
    const noButton = makeButton('No');
    noButton.addEventListener('click', () => {
      this.transitionToScene(no.link);
    });

    noYesWrapper.appendChild( yesButton );
    noYesWrapper.appendChild( noButton );
    this.choiceContainer.appendChild( noYesWrapper );
  }

  async renderScene() {
    // Update title
    this.title.textContent = this.currentScene.label;
    
    if( this.currentScene.checklist ) {
      // Create and add checks buttons
      const buttons = this.currentScene.checklist.map(choice => { 
        return this.createChoiceButton(choice, 'checks');
      });
      // append the checks buttons to the container
      buttons.forEach( (button) => {
        this.choiceContainer.appendChild(button);
        // Trigger reflow to ensure transition works
        button.offsetHeight;
        button.style.filter = 'blur(0px)';
        button.style.opacity = '1';
      });
      // add the corresponding yes and nos
      this.createYesNo(this.currentScene.choices[0],this.currentScene.choices[1] )
    } else {
      // Create and add the choices buttons
      const buttons = this.currentScene.choices.map(choice => { 
        return this.createChoiceButton(choice, 'buttons');
      }); 
      // append the checks buttons to the container
      buttons.forEach(button => {
        this.choiceContainer.appendChild(button);
        // Trigger reflow to ensure transition works
        button.offsetHeight;
        button.style.filter = 'blur(0px)';
        button.style.opacity = '1';
      });
    }
  }
}

// Initialize the game
const game = new CompensationGame();