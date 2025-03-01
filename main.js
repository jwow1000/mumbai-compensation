// Import the data map object
import { dataMap } from "./assets/data.js";
import gsap from "gsap";

class CompensationGame {
  constructor() {
    this.game = document.querySelector('#game');
    this.title = document.querySelector('#title');
    this.choiceContainer = document.querySelector('.choice-container');
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
    

    const video = document.querySelector(".video-loop");
    if (video) {
      video.play().catch(error => console.log("Autoplay failed:", error));
    }
    
    // Start the game
    this.clearScene();
    setTimeout(() => this.renderScene(), this.fadeTime);
  }
  
  applyAnimation() {
    // Continuous rotation for button wrappers
    
    gsap.utils.toArray(".drift").forEach((el) => {
      gsap.to(el, {
        x: "random(-50, 50, 10)", // Random horizontal drift
        y: "random(-50, 50, 10)", // Random vertical drift
        duration: "random(12, 24)", // Different speeds
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    
    gsap.to([".comp-button-wrapper", ".check-list-wrapper"], {
      rotation: 360,
      duration: 24,
      repeat: -1,
      ease: "linear"
    });

    // Pause animation on hover
    document.querySelectorAll(".comp-button, .check-list-button").forEach((button) => {
      button.addEventListener("mouseenter", () => gsap.to(button, { paused: true }));
      button.addEventListener("mouseleave", () => gsap.to(button, { paused: false }));
    });


  }
  async clearScene() {
    if (!this.choiceContainer) return; // Safety check

    // Apply blur and fade-out effects
    this.choiceContainer.style.filter = 'blur(5px)';
    this.choiceContainer.style.opacity = '0';
    this.title.style.filter = 'blur(5px)';
    this.title.style.opacity = '0';

    // Wait for the fade-out effect
    await new Promise(resolve => setTimeout(resolve, this.fadeTime));

    // Clear the container after fading out
    this.choiceContainer.innerHTML = '';
  }

  async transitionToScene(nextSceneKey) {
    await this.clearScene();
    this.currentScene = dataMap[nextSceneKey];
    await this.renderScene();
  }

  createChoiceButton(choice, type) {
    const button = document.createElement('buttton');
    const buttonWrap = document.createElement('div');
    
    // change class if a checklist
    button.className = type === 'checks' ? 'check-list-button' : 'comp-button';
    button.classList.add('drift');
    buttonWrap.className = type === 'checks' ? 'check-list-wrapper' : 'comp-button-wrapper';
    button.textContent = choice.label;

    if( type === 'checks') {
      // Add click handler for toggle states
      button.addEventListener('click', () => {
        button.classList.toggle('selected');
      }); 
    } else {
      // Add click handler for choices
      button.addEventListener('click', () => {
        this.transitionToScene(choice.link);
      });
    }
    button.appendChild( buttonWrap );
    return button ;
  }

  createYesNo( yes, no ) {
    const noYesWrapper = document.createElement('div');
    noYesWrapper.className = "noYesWrapper"; 
    
    function makeButton( text ) {
      const button = document.createElement('button'); 
      const buttonWrap = document.createElement('div');
      button.className = 'comp-button';
      button.classList.add('drift');
      buttonWrap.className = 'comp-button-wrapper';
      button.innerText = text;
      button.appendChild( buttonWrap );
      return button;
    }

    // yes button
    const yesButton = makeButton('Yes');
    yesButton.addEventListener('click', () => {
      // get all checklist buttons, compare yes
      const checks = document.querySelectorAll('.check-list-button').length;
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
      console.log("checklist?")
      const buttons = this.currentScene.checklist.map(choice => { 
        return this.createChoiceButton(choice, 'checks');
      });
      // append the checks buttons to the container
      buttons.forEach( (button) => {
        this.choiceContainer.appendChild(button);
      });
      this.choiceContainer.style.filter = 'blur(0px)';
      this.choiceContainer.style.opacity = '1'; 
      this.title.style.filter = 'blur(0px)'; 
      this.title.style.opacity = '1'; 
      
      // add the corresponding yes and nos
      this.createYesNo(this.currentScene.choices[0],this.currentScene.choices[1] )
    
    } else {
      // Create and add the choices buttons
      const buttons = this.currentScene.choices.map(choice => { 
        console.log("check the buttons: ", this.createChoiceButton(choice, 'buttons'))
        return this.createChoiceButton(choice, 'buttons');
      }); 
      // append the checks buttons to the container

      buttons.forEach(button => {
        this.choiceContainer.appendChild(button);
      });

      this.choiceContainer.style.filter = 'blur(0px)';
      this.choiceContainer.style.opacity = '1';
      this.title.style.filter = 'blur(0px)'; 
      this.title.style.opacity = '1'; 
    }
    this.applyAnimation();
  }
}

// Initialize the game
const game = new CompensationGame();