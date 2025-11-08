export const scene = [
  {
    name: "Noel",
    text: "You're done with the diagnostic reports, rookie?",
    bg: "Images/Background/intro_game3.png",
    characters: [
      { id: "noel", img: "Images/Char/noel_happy.png" }
    ],
    action: {
      type: "saveProgress",
      value: 8
    }
  },
  {
    name: "Julius",
    text: "Here they are, sir. Double and triple checked to boot.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_happy.png" }
    ],
  },
  {
    name: "Noel",
    text: "Outstanding, Julius. Our repairs are coming along nicely. It's now up to William to save the Central Computer itself. Then, we-",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_approve.png" }
    ],
  },
  {
    name: "Narration",
    text: "Then, suddenly, a light on the ground is felt. Then, a rumble. Then, a roar!",
  },
  {
    name: "Narration",
    bg: "Images/Background/intro_game3-2.png",
    text: "The server room was catching fire!",
  },
  {
    name: "Noel",
    text: "Holy moly!",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Julius",
    text: "W-what's happening?",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_neutral.png" }
    ],
  },
  {
    name: "Noel",
    text: "I don't know...",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_neutral.png" }
    ],
  },
  {
    name: "Narration",
    text: "Noel takes to his radio.",
  },
  {
    name: "Noel",
    text: "William! What on earth is happening there?!",
    characters: [
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "William (on the radio)",
    text: "<i> The situation is worse than we thought! The Central Computer's functions are malformed. Nothing but a full fix or a shutdown would save the system! </i>",
    characters: [
      { id: "William (on the radio)", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "Noel",
    text: "Negative on the shutdown option. Can you stall it?",
    characters: [
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "William (on the radio)",
    text: "<i> Sure, but you better send Joanah, Liz, or yourself for this one! Not the rookie! </i>",
    characters: [
      { id: "William (on the radio)", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "Narration",
    text: "After that, the audio cut off. Looks like the communication systems were now affected as well. Everyone's in the dark.",
  },
  {
    name: "Julius",
    text: "Oh, no. William...",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "We can't worry about him now.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "Right now, I need an extra hand with the repairs. Your reports seem to be accurate by my count, and we need to salvage what little of the server room is left.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "Every diagnosis can be traced back to a problem in the system, <span class='glossary' data-doc='repair.pdf'> which traces back to a solution to fix those problems. </span> We'll be fixing those problems right now.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_explaining.png" }
    ],
  },
  {
    name: "Julius",
    text: "Understood. Let's get this started.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_neutral.png" }
    ],
  },
  {
    name: "Noel",
    text: "You take the computers over there, I'll take the ones here. Good luck.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    text: "<i> Click 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 8,              // Game 1
    }
  }
];