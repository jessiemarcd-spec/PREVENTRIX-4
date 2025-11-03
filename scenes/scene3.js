export const scene = [
  {
    name: "Liz",
    text: "Looks like everything is in order then. Good job per usual, rookie.",
    bg: "Images/Background/intro_game1-2.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "laugh" },
    ],
    action: {
      type: "saveProgress",
      value: 3
    }
  },
  {
    name: "Julius",
    text: "Thanks, but-",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ],
  },
  {
    name: "Liz",
    text: "Op, op, op! Cut it on the modesty, remember?",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ],
  },
  {
    name: "Julius",
    text: "... Thanks?",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_normal.png"},
    ],
  },
  {
    name: "Liz",
    text: "There we go!",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "laugh" },
    ],
  },
  {
    name: "Liz",
    text: "Now, we need to find the room with all the spare computer parts. We're going to need it if we're gonna repair these systems.",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ],
  },
  {
    name: "Julius",
    text: "Alright. Just tell me where we-",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ],
  },
  {
    name: "Liz",
    text: "Yeah, well... that's the problem.",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
      { id: "liz", img: "Images/Char/liz_worried.png", emotion: "shock" },
    ],
  },
  {
    name: "Liz",
    text: "It's behind this door. But it looks like they changed the pattern combination.",
    bg: "Images/Background/intro_game1-3.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
      { id: "liz", img: "Images/Char/liz_worried.png" },
    ],
  },
  {
    name: "Julius",
    text: "That's horrible! How are we going to get to those supplies now?",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/liz_worried.png" },
    ],
  },
  {
    name: "Liz",
    text: "I'll be handling this one. There's bound to be a document by the supply office here somewhere. Stay here while I find some clues.",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ],
  },
  {
    name: "Narration",
    text: "Liz disappears in the dark fog of the Lower Storage, leaving Julius alone with the door. And his own thoughts as well.",
  },
  {
    name: "Julius",
    text: "Some TechAcademy Cadet you're turning out to be, huh Julius?",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png", emotion: "sad" },
    ],
  },
  {
    name: "Julius",
    text: "Sitting around while the rest of your team is rushing to save the whole school...",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
    ],
  },
  {
    name: "Julius",
    text: "Come on! There has to be something I can do!",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
    ],
  },
  {
    name: "Narration",
    text: "Julius faces the door, nudging, pushing, and kicking it off its hinges to no avail. Nothing but the pattern code would solve this.",
  },
  {
    name: "Julius",
    text: "Okay, prying a titanium door with my bare hands? Not the best strategy...",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
    ],
  },
  {
    name: "Narration",
    text: "But he found a peculiar little thing on the floor. Markings. He read them all aloud...",
  },
  {
    name: "Julius",
    text: "SD... UP... CLN... UD... BU?",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
    ],
  },
  {
    name: "Julius",
    text: "Wait, I know this! These aren't just letters... <span class='glossary' data-doc='maintenance.pdf'> these are steps! </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_cheering.png", emotion: "shock" },
    ],
  },
    {
    name: "Julius",
    text: "I know exactly what this code is!",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png" },
    ],
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 3,              // Game 1
    }
  }
];