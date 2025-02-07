(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const c={start:{label:"Does your livelihood depend on fishing?",choices:[{label:"Yes",link:"ids"},{label:"No",link:"globalTerminus"}]},ids:{label:"Can you present all of these documents?",checklist:[{label:"Compensation Claim form",link:"boat"},{label:"Ration Card",link:"boat"},{label:"Aadhar / PAN Card",link:"boat"},{label:"Biometric Card",link:"boat"},{label:"Copy of first page of passbook",link:"boat"}],choices:[{label:"Yes",link:"boat"},{label:"No",link:"globalTerminus"}]},boat:{label:"Do you own a boat?",choices:[{label:"Yes",link:"boatIds"},{label:"No ",link:"nonBoats"}]},boatIds:{label:"Can you present all of these documents for your boat?",checklist:[{label:"Copy of boat license",link:"boatSize"},{label:"Boat registration documents",link:"boatSize"},{label:"Insurance pepers",link:"boatSize"},{label:"Copy of purchase or sale of boat",link:"boatSize"},{label:"Verification letter from fisherfolk society",link:"boatSize"}],choices:[{label:"Yes",link:"boatSize"},{label:"No",link:"globalTerminus"}]},hodi:{label:`₹ 1,75,000.00 per year for the 5 year duration of construction.

    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community...`,choices:[{label:"Replay",link:"start"}]},cyl1:{label:`₹ 2,29,810.39 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},cyl2:{label:`₹ 2,99,795.11 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},cyl3:{label:`₹ 3,29,774.62 per year for the 5 year duration of construction.

    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},cyl4:{label:`₹ 4,15,366.99 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},cyl6:{label:`₹ 4,56,903.68 per year for the 5 year duration of construction.
    
    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},boatSize:{label:"What size is your boat?",choices:[{label:"Hodi",link:"hodi"},{label:"1Cyl",link:"cyl1"},{label:"2Cyl",link:"cyl2"},{label:"3Cyl",link:"cyl3"},{label:"4Cyl",link:"cyl4"},{label:"6Cyl",link:"cyl6"}]},nonBoats:{label:"Which of these practices best describes your connection to fishing?",choices:[{label:"Tandels",link:"fisherSociety1"},{label:"Khalashi",link:"fisherSociety1"},{label:"Handpickers",link:"fisherSociety2"},{label:"Castnets",link:"fisherSociety2"},{label:"Fish Seller",link:"fishSellerDocs"}]},fisherSociety1:{label:"Are you in good standing with the fishers society?",choices:[{label:"Yes",link:"fisherSociety1Yes"},{label:"No",link:"globalTerminus"}]},fisherSociety1Yes:{label:`Permanent loss of livelihood and income from fishing.

    Compensation for 5 years of the project at approximately₹ 1,50,000.00 per year.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},fisherSociety2:{label:"Are you in good standing with the fishers society?",choices:[{label:"Yes",link:"fisherSociety2Yes"},{label:"No",link:"globalTerminus"}]},fisherSociety2Yes:{label:`Permanent loss of livelihood and income from fishing.

    Compensation for 5 years of the project, plus another 6 years, meaning 11 years in total at  ₹ 97,790.00 per year.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,choices:[{label:"Replay",link:"start"}]},fishSellerDocs:{label:"Can you present these documents?",checklist:[{label:"Fish Selling liscense",link:"boatSize"},{label:"Recent receipt of tax payment to the market committee",link:"boatSize"},{label:"Verification letter from fisherfolk society",link:"boatSize"}],choices:[{label:"Yes",link:"boatSize"},{label:"No",link:"boatSize"}]},globalTerminus:{label:"You are not eligible for compensation",choices:[{label:"Replay",link:"start"}]}};class f{constructor(){this.game=document.querySelector("#game"),this.title=document.querySelector("#title"),this.choiceContainer=document.querySelector("#choice-container"),this.loadMessage=document.querySelector(".load-screen"),this.fadeTime=1e3,this.currentScene=c.start,this.init()}init(){this.clearScene(),setTimeout(()=>this.renderScene(),this.fadeTime)}async clearScene(){const o=this.choiceContainer.querySelectorAll(".wrap-button");await(o.length>0?Promise.all(Array.from(o).map(i=>(i.style.filter="blur(5px)",i.style.opacity="0",new Promise(e=>setTimeout(e,this.fadeTime))))):Promise.resolve()),this.choiceContainer.innerHTML=""}async transitionToScene(o){await this.clearScene(),this.currentScene=c[o],await this.renderScene()}createChoiceButton(o,t){const i=document.createElement("div"),e=document.createElement("div");return i.className="wrap-button",e.className=t==="checks"?"checkListButtons":"buttons",e.textContent=o.label,i.style.transition=`
    filter ${this.fadeTime}ms ease-in-out,
    opacity ${this.fadeTime}ms ease-in-out
    `,i.style.filter="blur(5px)",i.style.opacity="0",t==="checks"?i.addEventListener("click",()=>{i.classList.toggle("selected")}):i.addEventListener("click",()=>{this.transitionToScene(o.link)}),i.appendChild(e),i}createYesNo(o,t){const i=document.createElement("div");i.className="noYesWrapper";function e(a){const s=document.createElement("div"),r=document.createElement("div");return s.className="wrap-button",r.className="choice",r.innerText=a,s.appendChild(r),s}const l=e("Yes");l.addEventListener("click",()=>{const a=document.querySelectorAll(".checkListButtons").length;document.querySelectorAll(".selected").length>=a&&this.transitionToScene(o.link)});const n=e("No");n.addEventListener("click",()=>{this.transitionToScene(t.link)}),i.appendChild(l),i.appendChild(n),this.choiceContainer.appendChild(i)}async renderScene(){this.title.textContent=this.currentScene.label,this.currentScene.checklist?(this.currentScene.checklist.map(t=>this.createChoiceButton(t,"checks")).forEach(t=>{this.choiceContainer.appendChild(t),t.offsetHeight,t.style.filter="blur(0px)",t.style.opacity="1"}),this.createYesNo(this.currentScene.choices[0],this.currentScene.choices[1])):this.currentScene.choices.map(t=>this.createChoiceButton(t,"buttons")).forEach(t=>{this.choiceContainer.appendChild(t),t.offsetHeight,t.style.filter="blur(0px)",t.style.opacity="1"})}}new f;
