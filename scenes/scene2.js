// scenes/scene1.js
export const scene = [
  {
    name: "Liz",
    text: "How's the search going, Julius?",
    bg: "Images/Background/intro_game1.png",
    characters: [
      { id: "liz", img: "Images/Char/liz_happy.png", emotion: "laugh"},
    ],
    action: {
      type: "saveProgress",
      value: 2
    }
  },
  {
    name: "Julius",
    text: "A few pairs of <span color=orange> gloves, </span> a handful of <span color=orange> anti-static wrist wraps </span>, and a couple of <span color=orange> goggles </span>. As you said.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/liz_happy.png" },
    ]
  },
  {
    name: "Liz",
    text: "Nice! All according to code with the <span class='glossary' data-doc'#'> TESDA CSS NCII. </span> Good work out there!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "laugh" },
    ]
  },
  {
    name: "Julius",
    text: "Hah, thanks. But you don't have to hype me up that much. I'm only doing the bare minimum.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png", emotion: "sad" },
      { id: "liz", img: "Images/Char/liz_neutral.png" },
    ]
  },
  {
    name: "Liz",
    text: "Well, <i>you</i> don't have to be so bashful all the time either. Some rookies would panic the moment a breakdown like this starts, but you're holding it together.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_explaining.png", emotion: "laugh" },
    ]
  },
  {
    name: "Liz",
    text: "Eh, but enough dilly-dally! It seems that we've picked this part of the wing down. Let's head on over to the lower levels. Come on!",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" },
    ]
  },
  {
    bg: "Images/Background/background_black.png"
  },
  {
    bg: "Images/Background/intro_game1-2.png",
    text: "<i> TechGuard Academy Storage Room - Lower Levels </i>"
  },
  {
    name: "Liz",
    text: "It seems like the system error hasn't reached this level of the academy yet.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_neutral.png" },
    ]
  },
  {
    name: "Liz",
    text: "Perfect! That means we can access all the <span color='orange'> tools and devices </span> we need for the fix.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_approve.png" },
    ]
  },
  {
    name: "Julius",
    text: "Just say the word and I'll help, Liz.",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "laugh"  },
      { id: "liz", img: "Images/Char/liz_approve.png" },
    ]
  },
  {
    name: "Liz",
    text: "Use the units here to summon the supplies. But you need to select the <span class='glossary' data-doc='tools.pdf'> tool and its proper function first. </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_explaining.png" },
    ]
  },
  {
    name: "Julius",
    text: "That sounds easy enough, let's do it!",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" },
    ]
  },
  {
    name: "Liz",
    text: "Go get 'em, then! Remember each tool and its function and the rest will come easy.",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_approve.png" },
    ]
  },
  {
    text: "<i> Cick 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 2,              // Game 1
    }
  }
];
