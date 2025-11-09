export const scene = [
  {
    name: "Narration",
    text: "Once upon in time in TechGuard Academy...",
    bg: "Images/Background/background_black.png",
    action: {
      type: "saveProgress",
      value: 1
    }
  },
  {
    name: "Narration",
    text: "... the <span color=orange> Central Computer System </span> has become unstable! All computers have been compromised!",
    bg: "Images/Background/background_intro.png",
  },
  {
    name: "Narration",
    text: "In these troubling times, only one team can get the job done: the <span color=cyan> Preventix Maintenance Team! </span>",
    bg: "Images/Background/background_black.png",
  },
  {
    text: "<i> Somewhere in the TechGuard Academy campus... </i>",
    bg: "Images/Background/intro_background.png",
  },
  {
    name: "Noel",
    text: "Alright! Listen up, cadets! There's an emergency afoot!",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png", emotion: "laugh" },
    ]
  },
  {
    name: "Noel",
    text: "Our systems have malfunctioned and everything's falling apart. As the Maintenance Team, we have to get our Central Computer System back online.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png", emotion: "shock" },
    ]
  },
  {
    name: "Noel",
    text: "We've been training for this moment for a long time. I expect everyone to be at their very best.",
    characters: [
      { id: "noel", img: "Images/Char//noel_explaining.png" },
    ]
  },
  {
    name: "William",
    text: "I'm always at my best.",
    characters: [
      { id: "william", img: "Images/Char/william_happy.png", emotion: "shock"},
    ]
  },
  {
    name: "Joanah",
    text: "We won't let you down, chief.",
    characters: [
      { id: "joanah", img: "Images/Char/william_happy.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock"}
    ]
  },
  {
    name: "Liz",
    text: "I'm ready, willing, and able!",
    characters: [
      { id: "liz", img: "Images/Char/william_happy.png" },
      { id: "liz", img: "Images/Char/joanah_approve.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock"}
    ]
  },
  {
    name: "Julius",
    text: "Yeah, and I'll do my very best as w-",
    characters: [
      { id: "julius", img: "Images/Char/william_happy.png" },
      { id: "julius", img: "Images/Char/joanah_approve.png" },
      { id: "julius", img: "Images/Char/liz_excited.png" },
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock" },
    ]
  },
  {
    name: "William",
    text: "Wait, wait. Hold the phone. We're bringing the rookie with us for this one?",
    characters: [
      { id: "william", img: "Images/Char/william_explaining.png", emotion: "laugh" },
      { id: "joanah", img: "Images/Char/joanah_neutral.png" },
      { id: "liz", img: "Images/Char/liz_neutral.png" },
      { id: "julius", img: "Images/Char/julius_neutral.png" },
    ]
  },
  {
    name: "Julius",
    text: "What about it, William? I passed the entrance test and got recruited to this team the same as you.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_explaining.png" },
    ]
  },
  {
    name: "William",
    text: "This isn't the entry-level work anymore, Julius. It's the real deal, and lots of things are at stake. And I know greenhorns like you ain't ready.",
    characters: [
      { id: "julius", img: "Images/Char/julius_angry.png" },
      { id: "william", img: "Images/Char/william_explaining.png" },
    ]
  },
  {
    name: "Joanah",
    text: "Would you knock it off, William?! Just because you're the school's top technician doesn't give you any right to pick on your teammates.",
    characters: [
      { id: "joanah", img: "Images/Char/joanah_angry.png", emotion: "intense" },
      { id: "liz", img: "Images/Char/liz_sad.png" },
    ]
  },
  {
    name: "Liz",
    text: "Besides, we'll be there to guide him through. That's what seniors are for, after all.",
    characters: [
      { id: "joanah", img: "Images/Char/joanah_angry.png" },
      { id: "liz", img: "Images/Char/liz_sad.png", emotion: "sad" },
    ]
  },
  {
    name: "Noel",
    text: "Well said, girls.",
    characters: [
      { id: "noel", img: "Images/Char/noel_approve.png" },
    ]
  },
    {
    name: "Noel",
    text: "William, Julius, we're not going to succeed by doing these tasks alone. I need you all to work together as a team to save the academy. Do you understand?",
    characters: [
      { id: "noel", img: "Images/Char/noel_angry.png" },
    ]
  },
  {
    name: "Julius",
    text: "We do, chief!",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png", emotion: "laugh" },
      { id: "william", img: "Images/Char/william_angry.png" },
    ]
  },
  {
    name: "William",
    text: "Just don't get in my way.",
    characters: [
      { id: "julius", img: "Images/Char/julius_happy.png" },
      { id: "william", img: "Images/Char/william_angry.png", emotion: "shock" },
    ]
  },
  {
    name: "Noel",
    text: "Well, that's close enough.",
    characters: [
      { id: "noel", img: "Images/Char/noel_sad.png", emotion: "sad" },
    ]
  },
  {
    name: "Noel",
    text: "This system error is stretching far and deep fast, so we'll be dividing responsibilities to cover the most bases.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
    ]
  },
  {
    name: "Noel",
    text: "William, you and me are going to the central computer itself. We have to run diagnostics before things go out of hand.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "noel", img: "Images/Char/william_neutral.png" }
    ]
  },
  {
    name: "William",
    text: "Ain't no problem from me.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "william", img: "Images/Char/william_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "Joanah. Some of the computers aren't up-to-date. They won't survive this crash if they not undergo a full reformat.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "noel", img: "Images/Char/joanah_neutral.png" }
    ]
  },
  {
    name: "Joanah",
    text: "I'll make sure they're in top condition, sir!",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "Joanah", img: "Images/Char/joanah_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "Liz. We're not going to fix all of this with what little equipment we brought along. Time to raid the storage wing for supplies.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "noel", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    name: "Liz",
    text: "I call dibs when I see a new set of gloves!",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "And what about me, captain?",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "Oh, right, right. For Julius... uh...",
    characters: [
      { id: "noel", img: "Images/Char/noel_sad.png" },
      { id: "julius", img: "Images/Char/julius_neutral.png" }
    ]
  },
  {
    name: "Noel",
    text: "... We'll call you when we need you!",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png", emotion: "shock"  },
      { id: "julius", img: "Images/Char/julius_sad.png" }
    ]
  },
  {
    name: "Liz",
    text: "I'll go first! I need someone to carry all the equipment out of storage.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "Excellent. That's your first task, Julius.",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "Well, as long as I can help...",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "William",
    text: "You can say that again.",
    characters: [
      { id: "william", img: "Images/Char/william_neutral.png" },
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "Alright, no time to waste. Preventix Team, to your stations!",
    characters: [
      { id: "noel", img: "Images/Char/noel_explaining.png" },
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_excited.png", emotion: "shock" }
    ]
  },
  {
    name: "Everyone",
    text: "Yes, sir!",
    characters: [
      { id: "Everyone", img: "Images/Char/william_happy.png", emotion: "shock" },
      { id: "Everyone", img: "Images/Char/joanah_approve.png", emotion: "shock" },
      { id: "Everyone", img: "Images/Char/liz_approve.png", emotion: "shock" },
      { id: "Everyone", img: "Images/Char/julius_neutral.png", emotion: "shock" },
    ]
  },
  {
    bg: "Images/Background/background_black.png"
  },
  {
    bg: "Images/Background/intro_game1.png",
    text: "<i> TechGuard Academy Storage Room - Upper Levels </i>"
  },
  {
    name: "Liz",
    text: "Welcome to the storage wing, Jules!",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "I never knew the academy could be this big. I haven't been here before.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_approve.png"}
    ]
  },
  {
    name: "Liz",
    text: "Rarely anyone goes here, since our storage system automates supply organization for us.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_explaining.png", emotion: "shock" }
    ]
  },
  {
    name: "Liz",
    text: "Looks like the system error got here before we did, because there's not a working unit here in sight.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_sad.png"}
    ]
  },
  {
    name: "Liz",
    text: "Lucky for you, I happen to know the storage system like the back of my hand. With your help, we can get these supplies the old fashion way.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "Awesome! Where do we start?",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_approve.png"}
    ]
  },
  {
    name: "Liz",
    text: "I like your energy already, rookie!",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Liz",
    text: "But first, I gotta ask: do you know anything about <span color='orange'> Personal Protective Equipment? </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_happy.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "Uhh, sure. At least, I hope so...",
    characters: [
      { id: "julius", img: "Images/Char/julius_sad.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    name: "Liz",
    text: "Haha! Don't sweat it, rookie. I'll catch you up to speed.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    name: "Liz",
    text: "To ensure cadet safety and to properly handle the materials we're dabbling with, we need PPEs to do the job. Tools and equipment used to make our maintenance job a bit easier.",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_explaining.png" }
    ]
  },
  {
    name: "Liz",
    text: "You can learn more by <span class='glossary' data-doc='safety.pdf'> clicking this link in the text. </span>",
    characters: [
      { id: "julius", img: "Images/Char/julius_neutral.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    text: "<i> Always look out for those links, as they would lead to the learning materials and lectures you would need for preventative maintenance. </i>"
  },
  {
    name: "Julius",
    text: "Hmm, I see.",
    characters: [
      { id: "julius", img: "Images/Char/julius_explaining.png" },
      { id: "liz", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    name: "Julius",
    text: "Okay, I think I know what to do now.",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/liz_happy.png" }
    ]
  },
  {
    name: "Liz",
    text: "Great! Gather the supplies and meet me back here. We need to get these equipment to the team, ASAP. Good luck.",
    characters: [
      { id: "julius", img: "Images/Char/julius_excited.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" }
    ]
  },
  {
    text: "<i> Cick 'Next' again to enter our first game. </i>",
    bg: "Images/Background/background_black.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 9,              // Game 1
    }
  }
];
