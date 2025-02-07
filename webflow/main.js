(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const a={start:{label:"Does your livelihood depend on fishing?",choices:[{label:"Yes",link:"ids"},{label:"No",link:"globalTerminus"}]},ids:{label:"Can you present all of these documents?",checklist:"true",choices:[{label:"Compensation Claim form",link:"boat"},{label:"Ration Card",link:"boat"},{label:"Aadhar / PAN Card",link:"boat"},{label:"Biometric Card",link:"boat"},{label:"Copy of first page of passbook",link:"boat"}]},boat:{label:"Do you own a boat?",choices:[{label:"Yes",link:"boatIds "},{label:"No ",link:"nonBoats"}]},boatIds:{label:"Can you present all of these documents for your boat?",checklist:"true",choices:[{label:"Copy of boat license",link:"boatSize"},{label:"Boat registration documents",link:"boatSize"},{label:"Insurance pepers",link:"boatSize"},{label:"Copy of purchase or sale of boat",link:"boatSize"},{label:"Verification letter from fisherfolk society",link:"boatSize"}]},boatSize:{label:"What size is your boat?",choices:[{label:"Hodi",link:boatTerminus.hodi},{label:"1Cyl",link:boatTerminus.cyl1},{label:"2Cyl",link:boatTerminus.cyl2},{label:"3Cyl",link:boatTerminus.cyl3},{label:"4Cyl",link:boatTerminus.cyl4},{label:"6Cyl",link:boatTerminus.cyl6}]},boatTerminus:{hodi:{label:`₹ 1,75,000.00 per year for the 5 year duration of construction.

      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community...`,terminus:"true"},cyl1:{label:`₹ 2,29,810.39 per year for the 5 year duration of construction.


      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"},cyl2:{label:`₹ 2,99,795.11 per year for the 5 year duration of construction.


      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"},cyl3:{label:`₹ 3,29,774.62 per year for the 5 year duration of construction.

      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"},cyl4:{label:`₹ 4,15,366.99 per year for the 5 year duration of construction.


      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"},cyl6:{label:`₹ 4,56,903.68 per year for the 5 year duration of construction.
      
      Permanent loss of livelihood and income from fishing.

      A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"}},nonBoats:{label:"Which of these practices best describes your connection to fishing?",choices:[{label:"Tandels",link:"fisherSociety1"},{label:"Khalashi",link:"fisherSociety1"},{label:"Handpickers",link:"boat"},{label:"Castnets",link:"boat"},{label:"Fish Seller",link:"boat"}]},fisherSociety1:{label:"Are you in good standing with the fishers society?",choices:[{label:"Yes",link:""}]},fisherSociety1Yes:{label:`Permanent loss of livelihood and income from fishing.

    Compensation for 5 years of the project at approximately₹ 1,50,000.00 per year.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,terminus:"true"},globalTerminus:{label:"You are not eligible for compensation",choices:[{label:"Replay",link:"start"}]}};class s{constructor(){this.game=document.querySelector("#game"),this.title=document.querySelector("#title"),this.choiceContainer=document.querySelector("#choice-container"),this.loadMessage=document.querySelector(".load-screen"),this.fadeTime=1e3,this.currentScene=a.start,this.init()}init(){this.clearScene(),setTimeout(()=>this.renderScene(),this.fadeTime)}async clearScene(){const o=this.choiceContainer.querySelectorAll(".wrap-button");await(o.length>0?Promise.all(Array.from(o).map(n=>(n.style.filter="blur(5px)",n.style.opacity="0",new Promise(t=>setTimeout(t,this.fadeTime))))):Promise.resolve()),this.choiceContainer.innerHTML=""}async transitionToScene(o){await this.clearScene(),this.currentScene=a[o],await this.renderScene()}createChoiceButton(o){const e=document.createElement("div"),n=document.createElement("div");return e.className="wrap-button",n.className="buttons",n.textContent=o.label,e.style.transition=`
      filter ${this.fadeTime}ms ease-in-out,
      opacity ${this.fadeTime}ms ease-in-out
    `,e.style.filter="blur(5px)",e.style.opacity="0",e.addEventListener("click",()=>{this.transitionToScene(o.link)}),e.appendChild(n),e}async renderScene(){this.title.textContent=this.currentScene.label,this.currentScene.choices.map(e=>this.createChoiceButton(e)).forEach(e=>{this.choiceContainer.appendChild(e),e.offsetHeight,e.style.filter="blur(0px)",e.style.opacity="1"})}}new s;
