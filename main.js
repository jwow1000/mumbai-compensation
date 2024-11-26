// import the dataMap object
import { dataMap } from "./assets/data.js";

const game = document.querySelector('#game');
const title = document.querySelector('#title');
const choiceContainer = document.querySelector('#choice-container');


// start at "start"

let render = dataMap.start

function clearButtons() {
  // Clears all child elements (the buttons) inside #game
  choiceContainer.innerHTML = '';
}

function renderContent() {
  // create the title
  title.textContent = render.label;
  
  // create all the buttons
  render.choices.forEach( (choice) => {
    console.log( "choiiice", choice)
    const button = document.createElement("div");
    button.className = "buttons";
    button.textContent = choice.label;
    button.addEventListener( "click", () => {
      clearButtons();
      render = dataMap[choice.link];
      
      renderContent();
    })
    choiceContainer.appendChild( button );
  });


}  
renderContent();

