// scenes/scene1.js
export const scene = [
  {
    name: "Liz",
    text: "How's the search going, Julius?",
    bg: "Images/Background/intro_game1-2.png",
    characters: [
      { id: "liz", img: "Images/Char/liz_normal.png", emotion: "laugh"},
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
      { id: "julius", img: "Images/Char/julius_approve.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Nice! All according to code with the <span class='glossary' data-doc'#'> TESDA CSS NCII. </span> Good work out there!",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "laugh" },
    ]
  },
  {
    name: "Julius",
    text: "Hah, thanks. But you don't have to hype me up that much. I'm only doing the bare minimum.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png", emotion: "sad" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Well, <i>you</i> don't have to be so bashful all the time either. Some rookies would panic the moment a breakdown like this starts, but you're holding it together.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png", emotion: "laugh" },
    ]
  },
  {
    name: "Liz",
    text: "I know I can't say the same for myself when I was in my first year. Haha! William wanted me off the team after my screw-ups.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Julius",
    text: "William treated you like that, too?",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png", emotion: "sad" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Yeah, he does it to every new addition to the team. Don't you worry about it. He'll light up to you eventually once he trusts you enough.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "He's a good friend, and an even better techician. But he takes the job a little too seriously.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_worried.png" },
    ]
  },
  {
    name: "Liz",
    text: "Eh, but enough dilly-dally! For now, help me empty this bag out.",
    characters: [
      { id: "julius", img: "Images/Char/julius_confused.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Julius",
    text: "What's in it?",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "It's all the tools and equipment I found.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Unfortunately, whoever stored these tools tangled them up into one bag. We need to sort them out.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_worried.png" },
    ]
  },
  {
    name: "Julius",
    text: "Sort them how?",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Each tool has a specific <span class='glossary' data-doc'#'> name and function </span> that makes them essential for preventative maintenance.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ]
  },
  {
    name: "Liz",
    text: "Remember those functions to heart, and the rest will come easy.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ]
  },
  {
    name: "Julius",
    text: "I see...",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Julius",
    text: "That sounds easy enough.",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Alright, let's get started!",
    characters: [
      { id: "liz", img: "Images/Char/julius_approve.png" },
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
