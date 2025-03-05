// Import the data map object
import { dataMap } from "./assets/data.js";
import { introData } from "./assets/introData.js";
import gsap from "gsap";

class CompensationGame {
  constructor() {
    this.game = document.querySelector('#game');
    this.title = document.querySelector('#title');
    this.container = document.querySelector('.container');
    this.introContainer = document.querySelector('.intro-container');
    this.choiceContainer = document.querySelector('.choice-container');
    this.loadMessage = document.querySelector('.load-screen');
    this.fadeTime = 1000;
    this.currentIntroScene = 0;
    this.currentScene = dataMap.start;
    this.introTransitionActive = false;
    this.init();
  }
  
  init() {
    this.clearScene();
    this.introTransitionActive = true;
    setTimeout(() => this.renderIntroScene(), this.fadeTime);
    if (this.introContainer) {
      this.introContainer.addEventListener("click", () => {
        if(!this.introTransitionActive) {
          this.introTransitionActive = true;
          if(this.currentIntroScene >= 5) {
            console.log("start the game!")
            // Start the game
            this.clearIntroScene();
            

            setTimeout(() => {
              this.introContainer.style.pointerEvents = 'none';
              this.renderScene()
            
            
            
            }, this.fadeTime);
          } else {
            console.log("trigger container event?", this.currentIntroScene)
            this.transitionIntro();
          }
        }
      });
      
    }
    
  }

  async transitionIntro() {
    await this.clearIntroScene();
    this.currentIntroScene = this.currentIntroScene + 1;
    await this.renderIntroScene();
  }
  
  async renderIntroScene() {
    const currentScene = introData[this.currentIntroScene];
    // make the circular div with children that wrap it
    const introButton = document.createElement("div");
    // add the class
    introButton.classList.add('introButton');
    
    // make the text element
    const textElem = document.createElement("p");
    textElem.classList.add("introButtonText");
    textElem.textContent = currentScene.text;
    introButton.appendChild( textElem );
    // make the wrappers
    const wrappers = [];

    for( let i=0; i<3; i++) {
      
      const wrappButton = document.createElement("div"); 
      wrappButton.classList.add('introButtonWrapper');
      wrappButton.classList.add('driftIntro');
      wrappButton.style.width = `${100 + (i*20)}%` 
      wrappButton.style.height = `${100 + (i*20)}%` 
      wrappers.push( wrappButton );
      
      introButton.appendChild(wrappButton); // Append to the last created wrapper
    }
    this.introContainer.appendChild(introButton);
    // apply the animation
    this.applyAnimation();
    // fade in
    this.introContainer.style.filter = 'blur(0px)';
    this.introContainer.style.opacity = '1';
    
    this.introTransitionActive = false;
  }
  applyAnimation() {
    // Continuous rotation for button wrappers
    
    gsap.utils.toArray(".drift").forEach((el) => {
      gsap.to(el, {
        x: "random(-50, 50, 10)", // Random horizontal drift
        y: "random(-50, 50, 10)", // Random vertical drift
        duration: "random(24, 48)", // Different speeds
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    // drift for intro
    gsap.utils.toArray(".driftIntro").forEach((el, idx) => {
      // const scaler = 50/(idx+1 * 5);
      const scaler = 50;
      gsap.to(el, {
        x: `random(${-scaler}, ${scaler}, 1)`, // Random horizontal drift
        y: `random(${-scaler}, ${scaler}, 1)`, // Random vertical drift
        duration: "random(24, 48)", // Different speeds
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
      // spin for intro button
      const invert = ((idx%2) * 2) - 1;
      gsap.to(el, {
        rotation: 360 * invert,
        duration: "random(24, 148)",
        repeat: -1,
        ease: "linear",
        force3D: true
      });
    });
    
    gsap.to([".comp-button-wrapper", ".check-list-wrapper"], {
      rotation: 360,
      duration: "random(24, 48)",
      repeat: -1,
      ease: "linear"
    });
    
    

    
    document.querySelectorAll(".comp-button, .check-list-button").forEach((button) => {
      // Pause animation on hover
      button.addEventListener("mouseenter", () => {
        gsap.getTweensOf(button).forEach(tween => tween.pause());
      });
      button.addEventListener("mouseleave", () => {
        gsap.getTweensOf(button).forEach(tween => tween.resume());
      });
      
    });


  }
  async clearIntroScene() {
    this.introContainer.style.filter = 'blur(5px)';
    this.introContainer.style.opacity = '0';
    // Wait for the fade-out effect
    await new Promise(resolve => setTimeout(resolve, this.fadeTime));
    // Clear the introContainer after fading out
    this.introContainer.innerHTML = '';
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
    const button = document.createElement('button');
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
    noYesWrapper.style.display = 'flex'; 
    noYesWrapper.style.flexFlow = 'row'; 
    
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

// start the bg video
const video = document.querySelector(".video-loop");
if (video) {
  video.play().catch(error => console.log("Autoplay failed:", error));
}
// start the introduction 

// Initialize the game
const game = new CompensationGame();