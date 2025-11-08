export const scene = [
  {
    name: "Narration",
    text: "Joanah still feverishly goes from one computer to another to install the antivirus software. But she was quickly puzzled at the fact that some of these computers already have them installed.",
    bg: "Images/Background/intro_game2.png",
    action: {
      type: "saveProgress",
      value: 7
    }
  },
  {
    name: "Joanah",
    text: "Wait. Did you...?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_neutral.png", emotion: "shock" }
    ],
  },
  {
    name: "Julius",
    text: "I did. Dodging those pop-up screens was a doozy, I'll tell you that.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "laugh"  },
      { id: "joanah", img: "Images/Char/joanah_neutral.png"}
    ],
  },
  {
    name: "Joanah",
    text: "But- how, I-...? No, that's a stupid thing to say.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_sad.png", emotion: "sad" }
    ],
  },
  {
    name: "Joanah",
    text: "What I should be saying is thank you! You saved the whole system from infection, all without me telling you a word!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_excited.png", emotion: "shock" }
    ],
  },
  {
    name: "Julius",
    text: "Well, technically we both did it. I just helped.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "laugh"  },
      { id: "joanah", img: "Images/Char/joanah_neutral.png"}
    ],
  },
  {
    name: "Joanah",
    text: "Alright! Be like that! Next thing I know, you've been doing this for years now and we just didn't know it!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock" }
    ],
  },
  {
    name: "Joanah",
    text: "Also, Noel radioed in to me while I was downloading. He needs assistance in the server rooms.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Julius",
    text: "That just puts me a step closer to William. I hope I don't get yelled at.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png", emotion: "sad"  },
      { id: "joanah", img: "Images/Char/joanah_neutral.png"}
    ],
  },
  {
    name: "Joanah",
    text: "Oh, please! Once he sees you operate under pressure, you'd be his best friend!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock" }
    ],
  },
  {
    name: "Joanah",
    text: "In any event, you're needed in the server rooms. I'll handle the clean-up here. Get to it and good luck!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    bg: "Images/Background/background_black.png"
  },
  {
    bg: "Images/Background/intro_game3.png",
    text: "<i> TechGuard Academy Laboratories </i>"
  },
  {
    name: "Julius",
    text: "You called for me, boss?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png", emotion: "sad"  },
    ],
  },
  {
    name: "Noel",
    text: "Why, yes. Yes, I did. I heard the glowing praises from the radio communications. It looks like being the errand boy was too small of a task for you after all.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "noel", img: "Images/Char/noel_excited.png" },
    ],
  },
  {
    name: "Julius",
    text: "It's the job I have regardless, sir. And I'm here to help in any way.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_excited.png" },
    ],
  },
  {
    name: "Noel",
    text: "Excellent! That's the hustle I need right now.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_approve.png" },
    ],
  },
  {
    name: "Noel",
    text: "I'll be handling the repairs and such with these units. I only need you to provide an accurate <span color='orange'> diagnosis </span> of each unit's problem.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_explaining.png" },
    ],
  },
  {
    name: "Noel",
    text: "An accurate diagnosis is half the battle when it comes to applying repairs. The importance of <span class='glossary' data-doc='diagnostic.pdf'> a clear and accurate diagnostis of a computer's condition can be found here.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_explaining.png" },
    ],
  },
  {
    name: "Julius",
    text: "Understood, sir. I'll make sure my observations are as accurate as can be.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_happy.png" },
    ],
  },
  {
    name: "Noel",
    text: "Get busy, then. I'll be here doing the repairs.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "noel", img: "Images/Char/noel_happy.png" },
    ],
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 7,              // Game 1
    }
  }
];