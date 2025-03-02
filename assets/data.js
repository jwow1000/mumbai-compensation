export const dataMap = {
  "start": {
    "label": "Does your livelihood depend on fishing?",
    "choices": [
      {"label": "Yes", "link": "ids"},
      {"label": "No", "link": "globalTerminus"},
    ]
  },

  // you need all fuve

  "ids": {
    "label": "Can you present all of these documents?",
    "checklist": [
      {"label": "Compensation Claim form", "link": "boat"},
      {"label": "Ration Card", "link": "boat"},
      {"label": "Aadhar / PAN Card", "link": "boat"},
      {"label": "Biometric Card", "link": "boat"},
      {"label": "Copy of first page of passbook", "link": "boat"},
    ],
    "choices": [
      {"label": "Yes", "link": "boat"},
      {"label": "No", "link": "globalTerminus"},
    ] 
  },

  "boat": {
    "label": "Do you own a boat?",
    "choices": [
      {"label": "Yes", "link": "boatIds"},
      {"label": "No ", "link": "nonBoats"},
    ]
  },
  // need all five here too
  "boatIds": {
    "label": "Can you present all of these documents for your boat?",
    "checklist": [
      {"label": "Copy of boat license", "link": "boatSize"},
      {"label": "Boat registration documents", "link": "boatSize"},
      {"label": "Insurance papers", "link": "boatSize"},
      {"label": "Copy of purchase or sale of boat", "link": "boatSize"},
      {"label": "Verification letter from fisherfolk society", "link": "boatSize"},
    ],
    "choices": [
      {"label": "Yes", "link": "boatSize"},
      {"label": "No", "link": "globalTerminus"},
    ]

  },
  
  "hodi": {
    "label": `₹ 1,75,000.00 per year for the 5 year duration of construction.

    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community...`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },
  "cyl1": {
    "label": `₹ 2,29,810.39 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },
  "cyl2": {
    "label": `₹ 2,99,795.11 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },
  "cyl3": {
    "label": `₹ 3,29,774.62 per year for the 5 year duration of construction.

    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },
  "cyl4": {
    "label": `₹ 4,15,366.99 per year for the 5 year duration of construction.


    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },
  "cyl6": {
    "label": `₹ 4,56,903.68 per year for the 5 year duration of construction.
    
    Permanent loss of livelihood and income from fishing.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,

    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  },

  "boatSize": {
    "label": "What size is your boat?",
    "choices": [
      {"label": "Hodi", "link": "hodi"},
      {"label": "1Cyl", "link": "cyl1"},
      {"label": "2Cyl", "link": "cyl2"},
      {"label": "3Cyl", "link": "cyl3"},
      {"label": "4Cyl", "link": "cyl4"},
      {"label": "6Cyl", "link": "cyl6"},
    ]
  },

  "nonBoats": {
    "label": "Which of these practices best describes your connection to fishing?",
    "choices": [
      {"label": "Tandels", "link": "fisherSociety1"},
      {"label": "Khalashi", "link": "fisherSociety1"},
      {"label": "Handpickers", "link": "fisherSociety2"},
      {"label": "Castnets", "link": "fisherSociety2"},
      {"label": "Fish Seller", "link": "fishSellerDocs"},
    ]  
  },

  "fisherSociety1": {
    "label": "Are you in good standing with the fishers society?",
    "choices": [
      {"label": "Yes", "link": "fisherSociety1Yes"},
      {"label": "No", "link": "globalTerminus"},
    ]
  },

  "fisherSociety1Yes": {
    "label": `Permanent loss of livelihood and income from fishing.

    Compensation for 5 years of the project at approximately₹ 1,50,000.00 per year.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,
    "choices": [
      {"label": "Replay", "link": "start"},
    ] 
  },
  
  "fisherSociety2": {
    "label": "Are you in good standing with the fishers society?",
    "choices": [
      {"label": "Yes", "link": "fisherSociety2Yes"},
      {"label": "No", "link": "globalTerminus"},
    ]
  },

  "fisherSociety2Yes": {
    "label": `Permanent loss of livelihood and income from fishing.

    Compensation for 5 years of the project, plus another 6 years, meaning 11 years in total at  ₹ 97,790.00 per year.

    A host of welfare benefits aimed at inproving your livelihood as part of the fishing community..`,
    "choices": [
      {"label": "Replay", "link": "start"},
    ] 
  },

  "fishSellerDocs": {
    "label": "Can you present these documents?",
    "checklist": [
      {"label": "Fish Selling liscense", "link": "boatSize"},
      {"label": "Recent receipt of tax payment to the market committee", "link": "boatSize"},
      {"label": "Verification letter from fisherfolk society", "link": "boatSize"},
    ],
    "choices": [
      {"label": "Yes", "link": "boatSize"},
      {"label": "No", "link": "boatSize"},

    ]
  },

  "globalTerminus": {
    "label": "You are not eligible for compensation",
    "choices": [
      {"label": "Replay", "link": "start"},
    ]
  }

}

