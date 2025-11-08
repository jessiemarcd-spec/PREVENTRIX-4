export const scene = [
  {
    name: "Julius",
    text: "Wait. I... did it?",
    bg: "Images/Background/intro_game1-3-open.png",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
    ],
    action: {
      type: "saveProgress",
      value: 4
    }
  },
  {
    name: "Julius",
    text: "I did it! It's opened!",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock"  },
    ],
  },
  {
    name: "Liz",
    text: "No luck, Julius. I'll report back to Noel that-",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_sad.png", emotion: "shock" },
    ],
  },
  {
    name: "Liz",
    text: "Wait... You managed to open it?",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_explaining.png", emotion: "shock" },
    ],
  },
  {
    name: "Julius",
    text: "Sure did! The pattern was for the <span color='orange'> steps for preventative maintenance. </span> Glad that was still in my memory.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "shock"  },
      { id: "liz", img: "Images/Char/liz_explaining.png" }
    ],
  },
  {
    name: "Liz",
    text: "Oh, Julius! That's amazing! Quick, grab all you can and book it to Joanah at the laboratory wing. She needs those spare wires right now! I'll take care of things here.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" },
    ],
  },
  {
    name: "Julius",
    text: "Understood. Good luck here!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "liz", img: "Images/Char/liz_excited.png" },
    ],
  },
  {
    name: "Liz",
    text: "Oh, and Jules?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" },
    ],
  },
  {
    name: "Julius",
    text: "Hmm? What is it?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_excited.png",},
    ],
  },
  {
    name: "Liz",
    text: "William is dead-wrong about you! Dead wrong!",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" },
    ],
  },
  {
    name: "Julius",
    text: "Thanks!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "liz", img: "Images/Char/liz_approve.png",},
    ],
  },
  {
    bg: "Images/Background/background_black.png"
  },
  {
    bg: "Images/Background/intro_game2.png",
    text: "<i> TechGuard Academy Laboratories </i>"
  },

  {
    name: "Julius",
    text: "Room service! Someone ordered spare wires?",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "shock"  },
    ],
  },
  {
    name: "Joanah",
    text: "Well, look who it is! Liz told me about your heroics down there in the storage room. Very impressive, rookie!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_excited.png", emotion: "shock"  }
    ],
  },
  {
    name: "Julius",
    text: "Thanks, but Liz told me that she'll take it from there. If you need help, just ask.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Joanah",
    text: "Oh, yes. As you can see, I'm gonna need some help too.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Joanah",
    text: "You got a blower and brush with you from the storage wing, right?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png" }
    ],
  },
  {
    name: "Julius",
    text: "All here with me.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Joanah",
    text: "Great! Now, what I want you to do is to go to every system unit here and clean out all the dust and debris.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Joanah",
    text: "Computers, like any other machine, needs some internal cleaning from time-to-time. Both in its <span color='orange'> software </span> and its <span color='orange'> hardware. </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png" }
    ],
  },
    {
    name: "Joanah",
    text: "Cleaning computers are a lot more complicated than it looks. It requires certain procedures that need careful, expert hands. <span class='glossary' data-doc='clean.pdf'> You can learn more about it here </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_explaining.png" }
    ],
  },
  {
    name: "Julius",
    text: "That sounds tough...",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "joanah", img: "Images/Char/joanah_neutral.png" }
    ],
  },
  {
    name: "Julius",
    text: "But I promised not to be a burden. Let me at it, then!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_happy.png" }
    ],
  },
  {
    name: "Joanah",
    text: "You really are something else, huh? Alright, sport. Grab the blower and the brush and get to cleaning!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_excited.png", emotion: "laugh" }
    ],
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 4,              // Game 1
    }
  }
];