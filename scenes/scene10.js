export const scene = [
  {
    name: "Narration",
    text: "Thanks to the efforts of both William and Julius, their combined speed and skill saved the Central Computer from fully breaking down.",
    bg: "Images/Background/end.png",
    action: {
      type: "saveProgress",
      value: 9
    }
  },
  {
    name: "Noel",
    text: "They did it...",
    characters: [
      { id: "Noel", img: "Images/Char/noel_happy.png" },
    ],
  },
  {
    name: "Joanah",
    text: "It's William and our new wonder kid. I can't think of two other people who can pull this off.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_happy.png" },
      { id: "Joanah", img: "Images/Char/joanah_approve.png" },
    ],
  },
  {
    name: "Liz",
    text: "Look! Here comes the heroes of the day!",
    characters: [
      { id: "Noel", img: "Images/Char/noel_happy.png" },
      { id: "Joanah", img: "Images/Char/joanah_approve.png" },
      { id: "Liz", img: "Images/Char/liz_excited.png" }
    ],
  },
  {
    name: "Julius and William",
    text: "...",
    characters: [
      { id: "Julius and William", img: "Images/Char/julius_neutral.png" },
      { id: "Julius and William", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Julius",
    text: "Look, I just made that dare so we could work together. I'm not here to show you up or anything...",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "William",
    text: "...",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Noel",
    text: "Outstanding work, the both of you! I always knew you had it in you, Julius. I just didn't know to what extent, frankly.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_approve.png" },
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Joanah",
    text: "We'd all be in the rubble if it weren't for you guys!",
    characters: [
      { id: "Joanah", img: "Images/Char/joanah_approve.png" },
      { id: "Liz", img: "Images/Char/liz_happy.png" },
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Liz",
    text: "That was some fine tech work, rookie!",
    characters: [
      { id: "Joanah", img: "Images/Char/joanah_approve.png" },
      { id: "Liz", img: "Images/Char/liz_approve.png" },
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Julius",
    text: "That's all quite flattering, but uh... I didn't do it alone. I couldn't have done it without-",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "William",
    text: "Oh, shut up.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Noel",
    text: "Huh. Maybe an attitude adjustment I was sensing from you was wishful thinking.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_angry.png" },
      { id: "Joanah", img: "Images/Char/joanah_neutral.png" },
      { id: "Liz", img: "Images/Char/liz_neutral.png" }
    ],
  },
  {
    name: "Joanah",
    text: "Don't listen to him, Julius. You just can't win some people over.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_angry.png" },
      { id: "Joanah", img: "Images/Char/joanah_angry.png" },
      { id: "Liz", img: "Images/Char/liz_neutral.png" }
    ],
  },
  {
    name: "Liz",
    text: "You're such a soilsport, man.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_angry.png" },
      { id: "Joanah", img: "Images/Char/joanah_angry.png" },
      { id: "Liz", img: "Images/Char/liz_angry.png" }
    ],
  },
  {
    name: "William",
    text: "How about all of you shut up as well and let me finish?",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_angry.png" },
    ],
  },
  {
    name: "William",
    text: "Julius, he...",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_angry.png" },
    ],
  },
  {
    name: "William",
    text: "He saved me out there.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "William",
    text: "I was completely out of my depth, solving problems I don't know the answer to, and somehow... Julius helped me through it.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "william", img: "Images/Char/william_sad.png" },
    ],
  },
  {
    name: "Noel",
    text: "... Beg your pardon?",
    characters: [
      { id: "Noel", img: "Images/Char/noel_neutral.png" },
      { id: "Joanah", img: "Images/Char/joanah_neutral.png" },
      { id: "Liz", img: "Images/Char/liz_neutral.png" }
    ],
  },
  {
    name: "Joanah",
    text: "... Who are you?",
    characters: [
      { id: "Noel", img: "Images/Char/noel_neutral.png" },
      { id: "Joanah", img: "Images/Char/joanah_neutral.png" },
      { id: "Liz", img: "Images/Char/liz_neutral.png" }
    ],
  },
  {
    name: "Liz",
    text: "I think my hearing's off, guys.",
    characters: [
      { id: "Noel", img: "Images/Char/noel_neutral.png" },
      { id: "Joanah", img: "Images/Char/joanah_neutral.png" },
      { id: "Liz", img: "Images/Char/liz_neutral.png" }
    ],
  },
  {
    name: "William",
    text: "See what happens when you let me finish speaking?",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "william", img: "Images/Char/william_angry.png" },
    ],
  },
  {
    name: "William",
    text: "Ugh. Anyways, a deal is a deal. Even for a short while, he was a better technician than me. And it's about time I give it its due.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "william", img: "Images/Char/william_neutral.png" },
    ],
  },
  {
    name: "William",
    text: "You're one heck of a cadet, Julius. And you'll make it far here.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_happy.png" },
    ],
  },
  {
    name: "Julius",
    text: "Haha. Wow, William. That sounds... different, coming from someone as skilled as you.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_happy.png" },
    ],
  },
  {
    name: "William",
    text: "Don't let it get to your head, greenhorn. You're still my understudy.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_happy.png" },
    ],
  },
  {
    name: "Julius",
    text: "And I'm real honored to be.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_happy.png" },
    ],
  },
  {
    name: "William",
    text: "Gross.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_neutral.png" },
    ],
  },
  {
    name: "Narration",
    text: "With a hearty laugh amongst friends, the Preventix team completed yet another successful mission.",
  },
    {
    name: "Narration",
    bg: "Images/Background/end2.png",
    text: "There will come a time where systems would fall and the academy would be in peril once again. But when that time comes, they know who to call.",
  },
  {
    text: "<i> THE END </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoPage",
      url: "dashboard.html"              // Game 1
    }
  }
];