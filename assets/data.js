export const dataMap = {
  "start": {
    "label": "Does your livelihood depend on fishing?",
    "choices": [
      {"label": "Yes", "link": "ids"},
      {"label": "No", "link": "end"},
    ]
  },

  "end": {
    "label": "You do not get compensation, try again",
    "choices": [
      {"label": "Try Again", "link": "start"}
    ] 
  },

  "ids": {
    "label": "Choose Your Identification Method",
    "choices": [
      {"label": "Compensation Claim form", "link": "boat"},
      {"label": "Ration Card", "link": "boat"},
      {"label": "Aadhar / PAN Card", "link": "boat"},
      {"label": "Biometric Card", "link": "boat"},
      {"label": "Copy of first page of passbook", "link": "boat"},
    ] 
  },

  "boat": {
    "label": "Do you own a boat?",
    "choices": [
      {"label": "Yes", "link": "boatIds "},
      {"label": "No ", "link": "nonBoats"},
       
    ]
  },

  "boatIds": {
    "label": "Choose a way to identify your boat",
    "choices": [
      {"label": "Copy of boat license", "link": "boatSize"},
      {"label": "Boat registration documents", "link": "boatSize"},
      {"label": "Insurance pepers", "link": "boatSize"},
      {"label": "Copy of purchase or sale of boat", "link": "boatSize"},
      {"label": "Verification letter from fisherfolk society", "link": "boatSize"},

    ]
  },

  "boatSize": {
    "label": "What size is your boat?",
    "choices": [
      {"label": "Hodi", "link": "hodi"},
      {"label": "1Cyl", "link": "1cyl"},
      {"label": "2Cyl", "link": "2cyl"},
      {"label": "3Cyl", "link": "3cyl"},
      {"label": "4Cyl", "link": "4cyl"},
      {"label": "6Cyl", "link": "6cyl"},
    ]
  },

  // "hodi": {
  //   "label": `₹ 1,75,000.00 per year for the 5 year duration of construction.

  //     Permanent loss of livelihood and income from fishing.

  //     A host of community welfare benefits that no longer benefit you because you can no longer sell fish because there are no fish.`,
  //   ""
  // }


}