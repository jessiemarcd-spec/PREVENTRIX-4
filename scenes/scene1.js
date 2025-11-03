export const scene = [
  {
    name: "Narration",
    text: "Once upon in time in TechGuard Academy...",
    bg: "Images/Background/black_background.png",
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
    text: "In these troubling times, only one team can get the job done: the <span color=cyan> Preventrix Maintenance Team! </span>",
    bg: "Images/Background/black_background.png",
  },
  {
    text: "<i> Somewhere in the TechGuard Academy campus... </i>",
    bg: "Images/Background/intro_background.png",
  },
  {
    name: "Noel",
    text: "Alright! Listen up, cadets! There's an emergency afoot!",
    characters: [
      { id: "noel", img: "Images/Char/noel.png", emotion: "laugh" },
    ]
  },
  {
    name: "Noel",
    text: "Our systems have malfunctioned and everything's falling apart. As the Maintenance Team, we have to get our Central Computer System back online.",
    characters: [
      { id: "noel", img: "Images/Char/noel.png", emotion: "shock" },
    ]
  },
  {
    name: "Noel",
    text: "We've been training for this moment for a long time. I expect everyone to be at their very best.",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
    ]
  },
  {
    name: "William",
    text: "I'm always at my best.",
    characters: [
      { id: "william", img: "Images/Char/william_smug.png", emotion: "shock"},
    ]
  },
  {
    name: "Joanah",
    text: "We won't let you down, chief.",
    characters: [
      { id: "joanah", img: "Images/Char/william_smug.png" },
      { id: "joanah", img: "Images/Char/joanah_approve.png", emotion: "shock"}
    ]
  },
  {
    name: "Liz",
    text: "I'm ready, willing, and able!",
    characters: [
      { id: "liz", img: "Images/Char/william_smug.png" },
      { id: "liz", img: "Images/Char/joanah_approve.png" },
      { id: "liz", img: "Images/Char/liz_cheering.png", emotion: "shock"}
    ]
  },
  {
    name: "Julius",
    text: "Yeah, and I'll do my very best as w-",
    characters: [
      { id: "julius", img: "Images/Char/william_smug.png" },
      { id: "julius", img: "Images/Char/joanah_approve.png" },
      { id: "julius", img: "Images/Char/liz_cheering.png" },
      { id: "julius", img: "Images/Char/julius_determined.png", emotion: "shock" },
    ]
  },
  {
    name: "William",
    text: "Wait, wait. Hold the phone. We're bringing the rookie with us for this one?",
    characters: [
      { id: "william", img: "Images/Char/william_smug.png", emotion: "laugh" },
      { id: "joanah", img: "Images/Char/joanah_shocked.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
      { id: "julius", img: "Images/Char/julius_thinking.png" },
    ]
  },
  {
    name: "Julius",
    text: "What about it, William? I passed the entrance test and got recruited to this team the same as you.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "william", img: "Images/Char/william_smug.png" },
    ]
  },
  {
    name: "William",
    text: "This isn't the entry-level work anymore, Julius. It's the real deal, and lots of things are at stake. And I know greenhorns like you ain't ready.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "william", img: "Images/Char/william_smug.png" },
    ]
  },
  {
    name: "Joanah",
    text: "Would you knock it off, William?! Just because you're the school's top technician doesn't give you any right to pick on your teammates.",
    characters: [
      { id: "joanah", img: "Images/Char/joanah_confused.png", emotion: "intense" },
      { id: "liz", img: "Images/Char/liz_worried.png" },
    ]
  },
  {
    name: "Liz",
    text: "Besides, we'll be there to guide him through. That's what seniors are for, after all.",
    characters: [
      { id: "joanah", img: "Images/Char/joanah_confused.png" },
      { id: "liz", img: "Images/Char/liz_worried.png", emotion: "sad" },
    ]
  },
  {
    name: "Noel",
    text: "Well said, girls. William, Julius, we're not going to succeed by doing these tasks alone. I need you all to work together as a team to save the academy. Do you understand?",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
    ]
  },
  {
    name: "Julius",
    text: "We do, chief!",
    characters: [
      { id: "julius", img: "Images/Char/julius_determined.png", emotion: "laugh" },
      { id: "william", img: "Images/Char/william_smug.png" },
    ]
  },
  {
    name: "William",
    text: "Just don't get in my way.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "william", img: "Images/Char/william_smug.png", emotion: "shock" },
    ]
  },
  {
    name: "Narration",
    text: "And with that, the team is off to work. TechGuard Academy's fate is in the hands of these five cadets.",
  },
  {
    bg: "Images/Background/black_background.png",
  },
  {
    text: "<i> TechGuard Academy Storage Wing</i>",
    bg: "Images/Background/intro_game1.png",
  },
  {
    name: "William",
    text: "Drats! This system error is running deeper than we thought. Our inventory system is all out of whack.",
    characters: [
      { id: "william", img: "Images/Char/william_angry.png", emotion: "shock" },
    ]
  },
  {
    name: "Noel",
    text: "No better place to start patching things up, I guess.",
    characters: [
      { id: "william", img: "Images/Char/william_angry.png" },
      { id: "noel", img: "Images/Char/noel.png", emotion: "shock"  }
    ]
  },
  {
    name: "Noel",
    text: "William, Joanah, try and save as much of the system as you can.",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "william", img: "Images/Char/william_angry.png" },
      { id: "joanah", img: "Images/Char/joanah_think.png" }
    ]
  },
  {
    name: "Joanah & William",
    text: "Yes, sir!",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "Joanah & William", img: "Images/Char/william_angry.png", emotion: "shock" },
      { id: "Joanah & William", img: "Images/Char/joanah_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Noel",
    text: "As for rest of you... Liz.",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
      { id: "julius", img: "Images/Char/julius_thinking.png" }
    ]
  },
  {
    name: "Liz",
    text: "Yes, chief?",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "liz", img: "Images/Char/liz_normal.png", emotion: "shock" },
      { id: "julius", img: "Images/Char/julius_thinking.png" }
    ]
  },
  {
    name: "Noel",
    text: "You and Julius go to the storage rooms below. Salvage what little equipment and tools you can. I'll handle the major systems here.",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
      { id: "julius", img: "Images/Char/julius_thinking.png" }
    ]
  },
  {
    name: "Liz",
    text: "You got it, chief! Come on now, Julius! There's no time to waste!",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" },
      { id: "liz", img: "Images/Char/julius_thinking.png" }
    ]
  },
  {
    name: "Julius",
    text: "Wha... Hey! Wait for me!",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
      { id: "julius", img: "Images/Char/julius_worried.png", emotion: "laugh"  }
    ]
  },
  {
    name: "Noel",
    text: "...",
    characters: [
      { id: "noel", img: "Images/Char/noel.png" },
    ]
  },
  {
    name: "William",
    text: "Are you really sure you can trust him, Noel?",
    characters: [
      { id: "william", img: "Images/Char/william_angry.png" },
      { id: "noel", img: "Images/Char/noel.png" }
    ]
  },
  {
    name: "Noel",
    text: "Never been surer. Now let's get to work.",
    characters: [
      { id: "william", img: "Images/Char/william_angry.png" },
      { id: "noel", img: "Images/Char/noel.png", emotion: "shock"  }
    ]
  },
  {
    bg: "Images/Background/black_background.png",
  },
  {
    text: "<i> TechGuard Academy Lower Storage Rooms</i>",
    bg: "Images/Background/intro_game1-2.png",
  },
  {
    name: "Liz",
    text: "Alright, we're here! Welcome to the Lower Rooms, rookie.",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
      { id: "liz", img: "Images/Char/liz_approve.png", emotion: "shock" }
    ]
  },
  {
    name: "Julius",
    text: "Wow. I've never been here before.",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
      { id: "liz", img: "Images/Char/liz_approve.png" },
    ]
  },
  {
    name: "Liz",
    text: "Rarely anyone has. The inventory system automates our supplies for us.",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Lucky for you, I know the tools and eqiupment system like the back of my hand!",
    characters: [
      { id: "julius", img: "Images/Char/julius_worried.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ]
  },
  {
    name: "Julius",
    text: "Well, in that case, I'll follow your lead. What do we do first?",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "That's the spirit! First, we take all the equipment and tools we need. You do know what your <span color=orange> PPEs </span> are, right?",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ]
  },
  {
    name: "Julius",
    text: "Uh, sure... At least, I think.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Haha! Well, in any case, you can view the most essential of our <span color=orange> Personal Protective Equipment </span> right now.",
    characters: [
      { id: "julius", img: "Images/Char/julius_thinking.png" },
      { id: "liz", img: "Images/Char/liz_pointing.png" },
    ]
  },
  {
    name: "Narrator",
    text: "Look out for <span class='glossary' data-doc='safety.pdf'> these types of links </span> in the dialogue. They're links to PDFs that contain our instructional material or hints for each game. Click it now to view the PDF.",
  },
  {
    name: "Julius",
    text: "Oh. Well, that's good to know. I think I'm ready now!",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_normal.png" },
    ]
  },
  {
    name: "Liz",
    text: "Yeah! We'll split apart and gather as much of our essential equipment as we can. Good luck, Julius!",
    characters: [
      { id: "julius", img: "Images/Char/julius_approve.png" },
      { id: "liz", img: "Images/Char/liz_approve.png" },
    ]
  },
  {
    text: "<i> Cick 'Next' again to enter our first game. </i>",
    bg: "Images/Background/black_background.png",
  },
  {
      action: {
      type: "gotoGame",
      id: 1,              // Game 1
    }
  }
];
