export const scene = [
  {
    name: "Noel",
    text: "There, we managed to salvage the most important bits of data in the server.",
    bg: "Images/Background/intro_game3-2.png",
    characters: [
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
    action: {
      type: "saveProgress",
      value: 9
    }
  },
  {
    name: "Julius",
    text: "What about the Central Computer?",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "Ugh. It looks like <span color='cyan'> Preventix </span> was a little too late on this one. Let's cut our losses now. Tell William to stand down and evacuate.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Julius",
    text: "Wait... you're telling us to give up? After the procedures we did right, all the things we've saved. It doesn't matter?",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png", emotion: "shock" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "We can't always win the day. You did well, kid. Regardless of the end result. Only William is skilled enough for that task. If he can't do his magic on that Central Computer, and with everyone still busy with their roles, this academy is doomed to fall.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Julius",
    text: "Then, I'll help him!",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png", emotion: "shock" },
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    name: "Noel",
    text: "Don't act irrationally now. The entire school is going to fall at apart any moment.",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "Not if we stabilize the Central Computer before then.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png", emotion: "shock" },
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
    {
    name: "Noel",
    text: "You're not going to perform a full fix in less than 10 minutes! I can't support the both of you either! I still have so much units to backup and save.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png", emotion: "shock" },
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "I'm sorry, sir. But this is my duty as a cadet. I have to help William in keeping this all from crashing down.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "noel", img: "Images/Char/noel_angry.png" }
    ],
  },
  {
    name: "Narration",
    text: "A long pause and a sigh were all Noel could muster as a rebuttal",
  },
  {
    name: "Noel",
    text: "Just be safe out there, you two.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png"},
      { id: "noel", img: "Images/Char/noel_sad.png" }
    ],
  },
  {
    bg: "Images/Background/background_black.png"
  },
  {
    bg: "Images/Background/intro_final.png",
    text: "<i> TechGuard Central Computer Room </i>"
  },
  {
    name: "William",
    text: "You? I told Noel not to bring the rookie in. If he's ordering me to stand down, then he has another thing-",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "I'll fix the Central Computer with you.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "William",
    text: "What?! No way! I'm not putting the fate of this school in the hands of a greenhorn like you!",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "Oh, you won't have to trust me. I'm saying is that you fight me.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "William",
    text: "What are you talking about?!",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "If you can't respect me as your peer, then you'll have to respect me as your rival.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "Julius",
    text: "If I can fix this system faster than you, then you won't talk bad of me anymore.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    name: "Narration",
    text: "William is in disbelief at first, but as soon as the implications of his challenge sets in, he slowly smiles and nods.",
  },
  {
    name: "William",
    text: "Heh, heh. You got some guts, I'll tell you that. But if I win, you'd have to leave the <span color='cyan'> Preventix </span> team. I know a hundred cadets who'd fill your spot just fine.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_excited.png" }
    ],
  },
  {
    name: "William",
    text: "<span color='orange'> Seven tasks, eight minutes. </span> I hope you're not too scared to back out now?",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_excited.png" }
    ],
  },
  {
    name: "Julius",
    text: "Maybe I would've, if I hadn't known what I'm capable of. I'm a member of the <span color='cyan'> Preventix Maintenance team </span>, and I'm going to prove it to you!",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_angry.png" }
    ],
  },
  {
    text: "<i> Click 'Next' again to enter our next game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 9,              // Game 1
    }
  }
];