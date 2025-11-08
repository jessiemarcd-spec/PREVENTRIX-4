export const scene = [
  {
    name: "Julius",
    text: "All done and dusted!",
    bg: "Images/Background/intro_game2.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock" },
    ],
    action: {
      type: "saveProgress",
      value: 5
    }
  },
  {
    name: "Julius",
    text: "Or should it be 'undusted'?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
    ],
  },
  {
    name: "Joanah",
    text: "Hah! Whatever the case, these units look brand new with how thorough you were. Good job, Julius!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock"  }
    ],
  },
  {
    name: "Julius",
    text: "Just doing my part. What's next on the chopping block?",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock"  }
    ],
  },
  {
    name: "Joanah",
    text: "I made space here in the labs for all the damaged computers. We need to connect the wires you brought here to make them functional again.",
    bg: "Images/Background/intro_game2-2.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_neutral.png"  }
    ],
  },
  {
    name: "Joanah",
    text: "There are four wires needed to pass the bare minimum requirements for a boot-up: <span color='orange'> The 24-Pin ATX, the 8-Pin ATX, the SATA power cable, and the SATA data cable. </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png" }
    ],
  },
  {
    name: "Joanah",
    text: "Each wire has a <span class='glossary' data-doc='wire.pdf'> specific port and function within the computer's system. </span> So we need to make sure we connected them right.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png" }
    ],
  },
  {
    name: "Julius",
    text: "These tasks are getting heavier, but I'm not one to back out from a challenge. Give me the wires I need and I'll help you.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png", emotion: "shock"  }
    ],
  },
  {
    name: "Joanah",
    text: "Thanks a bunch, Julius. You're a real life-saver right now!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_excited.png" }
    ],
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 5,              // Game 1
    }
  }
];