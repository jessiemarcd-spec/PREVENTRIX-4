export const scene = [
  {
    name: "Joanah",
    text: "And the last one goes... here!",
    bg: "Images/Background/intro_game2-2.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png", emotion: "shock" },
    ],
    action: {
      type: "saveProgress",
      value: 6
    }
  },
  {
    name: "Julius",
    text: "Yes, we're done!",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock"  },
      { id: "joanah", img: "Images/Char/joanah_excited.png"}
    ],
  },
  {
    name: "Joanah",
    text: "Indeed. Barring a total disaster, our work here is-",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png"},
      { id: "joanah", img: "Images/Char/joanah_excited.png", emotion: "shock"  }
    ],
  },
  {
    name: "Narration",
    text: "Before she could finish the thought, loud alert noises rang throughout the room from each computer.",
  },
  {
    name: "Joanah",
    text: "Oh no!",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png"},
      { id: "joanah", img: "Images/Char/joanah_sad.png", emotion: "sad"  }
    ],
  },
  {
    name: "Julius",
    text: "Wait! What's happening?!",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png"},
      { id: "joanah", img: "Images/Char/joanah_sad.png"}
    ],
  },
  {
    name: "Joanah",
    text: "The system error uninstalled their virus protection software. If we don't reinstall them soon, the system would downright collapse!",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png"},
      { id: "joanah", img: "Images/Char/joanah_sad.png"}
    ],
  },
  {
    name: "Joanah",
    text: "I gotta stop it! Call Noel on the radio. Tell them to prepare for the worst!",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png"},
      { id: "joanah", img: "Images/Char/joanah_explaining.png"}
    ],
  },
  {
    name: "Narration",
    text: "Without missing a beat, Joanah rushes to the other units, trying to prevent a malware attack before it starts infecting the systems. Right behind her, Julius motions to the computers near him.",
  },
  {
    name: "Julius",
    bg: "Images/Background/intro_game2-3.png",
    text: "I may be a rookie, but I'm also a member of the digital age. Even I know the <span class='glossary' data-doc='antivirus.pdf'> dangers of malware and the importance of virus and system security. </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png"},
    ],
  },
  {
    name: "Julius",
    text: "The captain and William are too occupied to be saddled with this.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png"},
    ],
  },
  {
    name: "Julius",
    text: "No! I can do my part here. I can help!",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png"},
    ],
  },
  {
    name: "Narration",
    text: "He boots up one of the newly-cleaned computers and starts the download.",
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 6,              // Game 1
    }
  }
];