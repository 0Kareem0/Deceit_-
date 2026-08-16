export const ANDROID_LINK =
  "https://drive.google.com/file/d/1_eCu4wxU6cSfPPScbB_Kr7A6izxLCBRn/view?usp=sharing";
export const ANDROID_DIRECT_LINK = "/ديسيت.apk";
export const IOS_LINK: string | null = null; // ضع رابط الـ App Store هنا عندما يتوفر

export interface DetailedRole extends Role {
  team: string;
  ability: string;
  constraints: string[];
  cooldown?: string;
}

export const DETAILED_ROLES: Record<string, DetailedRole> = {
  "King": {
    icon: "👑",
    name: "King",
    desc: "The king, the ruler of the kingdom and the most important character, must be protected at any cost.",
    image: "/cards/deset_king.webp",
    team: "Kingdom",
    ability: "Has no special ability.",
    constraints: [
      "Cannot use any night ability.",
      "If the king dies, the crown prince becomes the new king if alive.",
      "If the crown prince is not alive, there is no king successor.",
      "King's death does not automatically end the game if the crown prince is still alive.",
      "If both king and crown prince die, the game ends with a win for the Shadows team.",
      "King's identity is secret and not revealed to other players except via reveal or investigation abilities.",
      "King can be voted on and executed like any other player.",
      "King has no automatic immunity from attacks, poison, or voting."
    ]
  },
  "Crown Prince": {
    icon: "🤴",
    name: "Crown Prince",
    desc: "The heir to the throne, ready to take power when the king falls.",
    image: "/cards/deset_crown_prince.webp",
    team: "Kingdom",
    ability: "If the king dies, the crown prince becomes the new king.",
    constraints: [
      "Transformation to king happens automatically immediately upon king's death.",
      "No vote or approval required.",
      "Cannot transform if already dead before the king.",
      "After transforming into king, no longer treated as crown prince.",
      "Crown prince's identity is as secret as the king's.",
      "Crown prince has no night or day abilities before transforming into king.",
      "Crown prince cannot refuse or opt out of the transformation."
    ]
  },
  "Vizier": {
    icon: "📜",
    name: "Vizier",
    desc: "The king's closest advisor and holder of secret information.",
    image: "/cards/deset_vizier.webp",
    team: "Kingdom",
    ability: "Gains accurate information about a randomly chosen player's team.",
    constraints: [
      "At the start of the game, the vizier receives information about a random player.",
      "When the ability is ready again, the system selects a new random player.",
      "Vizier only knows the team the player belongs to.",
      "Does not know the player's identity or ability.",
      "The information the vizier receives is always accurate.",
      "Result is unaffected by the Forger's ability.",
      "Can use ability multiple times during the game.",
      "Cannot choose the player himself."
    ],
    cooldown: "5–7 players: one night | 8–11 players: two nights | 12–15 players: three nights | 16–20 players: four nights"
  },
  "Guard": {
    icon: "🛡️",
    name: "Guard",
    desc: "The guard, protects kingdom members from assassination attempts.",
    image: "/cards/deset_guard.webp",
    team: "Kingdom",
    ability: "Protects a player from the first direct killing attack during the night.",
    constraints: [
      "Chooses one player each night to protect.",
      "Protection only prevents the first direct killing attack.",
      "If the target is attacked again in the same night, protection does not prevent it.",
      "Does not prevent poison, voting, silence, or disable abilities.",
      "Can protect themselves.",
      "Guard does not know if the protected player is targeted.",
      "Can change the protected target each night.",
      "Cannot protect more than one player in the same night."
    ]
  },
  "Doctor": {
    icon: "💉",
    name: "Doctor",
    desc: "The doctor, treats the injured and tries to save them from death.",
    image: "/cards/deset_physician.webp",
    team: "Kingdom",
    ability: "Chooses a player each night to treat from treatable attacks.",
    constraints: [
      "Chooses one player each night.",
      "Treatment prevents or heals treatable attacks.",
      "Cannot revive a player who is already dead.",
      "Cannot prevent death caused by voting.",
      "Doctor does not know in advance if the target is injured.",
      "Can treat themselves."
    ]
  },
  "Investigator": {
    icon: "🔎",
    name: "Investigator",
    desc: "The investigator, gathers information to uncover Shadow members.",
    image: "/cards/deset_investigator.webp",
    team: "Kingdom",
    ability: "Gains accurate information about a player each night, unless the player is affected by the Forger's ability.",
    constraints: [
      "Chooses one player each night to investigate.",
      "Gains accurate information according to investigation system rules.",
      "If target is affected by Forger, gets wrong result.",
      "Does not know the result was forged.",
      "Cannot investigate themselves.",
      "Protection does not prevent investigation.",
      "Can use ability multiple times during the game.",
      "Cannot investigate a player who is already dead."
    ]
  },
  "Judge": {
    icon: "⚖️",
    name: "Judge",
    desc: "The judge, has legal authority to intervene in voting decisions.",
    image: "/cards/deset_judge.webp",
    team: "Kingdom",
    ability: "Must use ability before voting result is finalized; when activated, voting is canceled and no player is eliminated.",
    constraints: [
      "Must use ability before voting result is finalized.",
      "When activated, voting is canceled and no player is eliminated.",
      "Cannot re-vote on the same day due to challenge.",
      "After use, must wait 3 days before using again.",
      "Can use ability multiple times during the game.",
      "Cannot use ability after voting result is announced.",
      "Can use ability to save themselves.",
      "Minimum uses 2, maximum 7."
    ]
  },
  "Knight": {
    icon: "⚔️",
    name: "Knight",
    desc: "The knight, a brave warrior defending the kingdom with strength.",
    image: "/cards/deset_knight.webp",
    team: "Kingdom",
    ability: "Has a shield that protects himself or another player from a direct killing attack.",
    constraints: [
      "Chooses one shield each night (self or another player).",
      "Shield blocks one direct killing attack only.",
      "If target is attacked again, shield does not protect.",
      "Does not protect from poison or voting.",
      "If shield used on self, cannot use on others.",
      "Knight does not know if shield was targeted.",
      "Can change target each night.",
      "Shield is consumed only if actually targeted."
    ]
  },
  "Royal Guard": {
    icon: "🏰",
    name: "Royal Guard",
    desc: "Personal guard for the king, protects royal family members.",
    image: "/cards/deset_royal_guard.webp",
    team: "Kingdom",
    ability: "Protects the king and crown prince from direct killing attacks.",
    constraints: [
      "Chooses one player each night to protect.",
      "Protection prevents one direct killing attack.",
      "Does not protect from poison or voting.",
      "If king dies, focus shifts automatically to crown prince.",
      "Royal Guard does not know if target is hit.",
      "Can also protect themselves.",
      "Protection is consumed only if target is actually hit."
    ]
  },
  "Priest": {
    icon: "🙏",
    name: "Priest",
    desc: "Guides people and performs religious rituals.",
    image: "/cards/deset_priest.webp",
    team: "Kingdom",
    ability: "Can determine if a player has been converted to another team.",
    constraints: [
      "Chooses one player each night.",
      "Knows if target has been converted to another team.",
      "Does not know original or new team.",
      "Does not know who performed the conversion.",
      "Can use ability multiple times.",
      "Result is always accurate.",
      "Unaffected by Forger's ability."
    ],
    cooldown: "Two nights"
  },
  "Messenger": {
    icon: "📬",
    name: "Messenger",
    desc: "Delivers secret messages and communications between parties.",
    image: "/cards/deset_messenger.webp",
    team: "Kingdom",
    ability: "Can send a secret message to one player each night.",
    constraints: [
      "Chooses one player each night to send a message.",
      "Message reaches only the target.",
      "Messenger does not know if message was delivered.",
      "Cannot receive messages from other players.",
      "Message contains no sender identity.",
      "Can use ability multiple times."
    ]
  },
  "Wizard": {
    icon: "🧙",
    name: "Wizard",
    desc: "Possesses magical knowledge and mysterious abilities.",
    image: "/cards/deset_wizard.webp",
    team: "Kingdom",
    ability: "Can silence one player each night, preventing them from using their ability.",
    constraints: [
      "Chooses one player each night to silence.",
      "Silence prevents target from using their ability that night.",
      "Does not prevent voting.",
      "Wizard does not know if silence was successful.",
      "Can silence themselves.",
      "Can use ability multiple times.",
      "Silence does not prevent negative abilities (e.g., poison)."
    ]
  },
  "Citizen": {
    icon: "👤",
    name: "Citizen",
    desc: "Ordinary kingdom inhabitant with no special abilities.",
    image: "/cards/deset_citizen.webp",
    team: "Kingdom",
    ability: "Has no special abilities; relies on voting.",
    constraints: [
      "Cannot use any night ability.",
      "Relies only on voting.",
      "Vote is important in voting.",
      "Has no additional information."
    ]
  },
  "Shadow Leader": {
    icon: "👑",
    name: "Shadow Leader",
    desc: "Proposes the main night kill target and guides Shadows toward the appropriate victim.",
    image: "/cards/deset_shadow_leader.webp",
    team: "Shadows",
    ability: "Proposes the main night kill target.",
    constraints: [
      "Proposal is not mandatory for the team.",
      "Assassin has final decision on execution.",
      "Shadow Leader does not know who the assassin is.",
      "Shadow Leader has no direct kill ability.",
      "Can change proposal each night.",
      "Identity is secret like other Shadows."
    ]
  },
  "Assassin": {
    icon: "🗡️",
    name: "Assassin",
    desc: "Has the final decision to execute the main kill chosen by the Shadows.",
    image: "/cards/deset_assassin.webp",
    team: "Shadows",
    ability: "Executes the main kill chosen by the Shadows.",
    constraints: [
      "Has final say in executing kill.",
      "Can refuse proposal and choose another target.",
      "Cannot kill if ability is disabled.",
      "Cannot kill more than once per night.",
      "If kill fails, ability is disabled for two nights.",
      "Identity is secret."
    ]
  },
  "Spy": {
    icon: "🕵️",
    name: "Spy",
    desc: "Monitors a specific player and reveals interactions during the night.",
    image: "/cards/deset_spy.webp",
    team: "Shadows",
    ability: "Monitors a player and knows who interacts with them during the night.",
    constraints: [
      "Chooses one player each night to monitor.",
      "Knows which roles targeted the player.",
      "Does not know player names.",
      "Spy does not know who targeted them.",
      "Can monitor themselves.",
      "Monitoring is not revealed to the target."
    ]
  },
  "Poisoner": {
    icon: "☠️",
    name: "Poisoner",
    desc: "Poisons a player who will die later unless treated.",
    image: "/cards/deset_poisoner.webp",
    team: "Shadows",
    ability: "Poisons one player each night; the target dies after two nights if untreated.",
    constraints: [
      "Chooses one player each night to poison.",
      "Poison kills target after two nights if untreated.",
      "Doctor can treat poison at night or morning."
    ]
  },
  "Saboteur": {
    icon: "🔧",
    name: "Saboteur",
    desc: "Disables another player's ability for the night.",
    image: "/cards/deset_saboteur.webp",
    team: "Shadows",
    ability: "Disables one player's ability each night.",
    constraints: [
      "Chooses one player each night to disable.",
      "Disables target from using their ability.",
      "Does not prevent voting.",
      "Saboteur does not know if disable succeeded.",
      "Can disable themselves.",
      "Can use ability multiple times.",
      "Disable does not prevent negative abilities."
    ]
  },
  "Forger": {
    icon: "🎭",
    name: "Forger",
    desc: "Corrupts investigation results, making truth appear false.",
    image: "/cards/deset_forger.webp",
    team: "Shadows",
    ability: "Chooses a player each night to corrupt investigation results against them.",
    constraints: [
      "Chooses one player each night to forge.",
      "Forgery affects investigation results against target.",
      "Investigator gets wrong result.",
      "Forger does not know who achieved with target.",
      "Investigator does not know result is fake.",
      "Can forge themselves.",
      "Forgery lasts only one night."
    ]
  },
  "Impersonator": {
    icon: "🎭",
    name: "Impersonator",
    desc: "Copies another player's ability to use for one night.",
    image: "/cards/deset_impersonator.webp",
    team: "Shadows",
    ability: "Copies another player's ability and uses it for one night.",
    constraints: [
      "Chooses one player each night to copy ability.",
      "Uses copied ability same night.",
      "Does not know identity of copied player.",
      "Cannot copy abilities that cannot be copied.",
      "Copied ability can be used once.",
      "Can copy themselves (no benefit).",
      "Original player does not lose their ability."
    ]
  },
  "Slasher": {
    icon: "🩸",
    name: "Slasher",
    desc: "Chooses a player each night to kill; if successful, the target dies normally, otherwise the ability is on cooldown for one night.",
    image: "/cards/deset_slasher.webp",
    team: "Shadows",
    ability: "Kills a player directly each night.",
    constraints: [
      "Chooses one player each night to kill.",
      "Kill is direct and cannot be prevented by protection.",
      "If kill succeeds, Slasher gets additional kills.",
      "If kill fails, ability is disabled for one night.",
      "Doctor cannot heal Slasher's kill.",
      "Protection or shields cannot prevent it.",
      "He is the only one who kills and cannot be prevented."
    ]
  },
  "Trickster": {
    icon: "🎪",
    name: "Trickster",
    desc: "Manipulates players to create suspicion; wins by being voted out.",
    image: "/cards/deset_trickster.webp",
    team: "Neutral",
    ability: "Has no direct night ability; relies on manipulation and deception to get voted out.",
    constraints: [
      "Wins if voted out.",
      "Does not win if dies due to another player's ability.",
      "Does not need to stay alive after being voted out.",
      "Not told the identity of any other player.",
      "Can claim to be any character or ability.",
      "If voted out, win condition is triggered immediately.",
      "Loses if game ends without being voted out."
    ]
  }
};

export type Role = { icon: string; name: string; desc: string; image?: string };
export type Character = Role & { faction: string; color: string };

export const SHADOW_ROLES: Role[] = [
  { icon: "👑", name: "Shadow Leader", desc: "Proposes the main night kill target and guides Shadows toward the appropriate victim.", image: "/cards/deset_shadow_leader.webp" },
  { icon: "🗡️", name: "Assassin", desc: "Has the final decision to execute the main kill chosen by the Shadows.", image: "/cards/deset_assassin.webp" },
  { icon: "🕵️", name: "Spy", desc: "Monitors a specific player and reveals interactions during the night. Helps in knowing who moves and active players.", image: "/cards/deset_spy.webp" },
  { icon: "☠️", name: "Poisoner", desc: "Poisons a player who will die later unless treated. Works slowly, making it a deceptive killer.", image: "/cards/deset_poisoner.webp" },
  { icon: "🔧", name: "Saboteur", desc: "Disables another player's ability for the night. Excellent for stopping protection or investigation.", image: "/cards/deset_saboteur.webp" },
  { icon: "🎭", name: "Forger", desc: "Corrupts investigation results, turning truth upside down. Makes investigators see false information.", image: "/cards/deset_forger.webp" },
  { icon: "🎭", name: "Impersonator", desc: "Copies another player's ability to use for one night only. Allows temporary use of any ability.", image: "/cards/deset_impersonator.webp" },
  { icon: "🩸", name: "Slasher", desc: "Chooses a player each night to kill. If successful, the target dies normally. If failed, Slasher's ability enters a one-night cooldown.", image: "/cards/deset_slasher.webp" }
];

export const KINGDOM_ROLES: Role[] = [
  { icon: "👑", name: "King", desc: "King, the ruler of the kingdom, decisions determine everyone's fate. Important and influential leadership role.", image: "/cards/deset_king.webp" },
  { icon: "🛡️", name: "Guard", desc: "Protects one player from any attack during the night. Basic defensive role for the kingdom.", image: "/cards/deset_guard.webp" },
  { icon: "💉", name: "Doctor", desc: "Treats players who are injured or at risk of death. Essential for countering poison and killing abilities.", image: "/cards/deset_physician.webp" },
  { icon: "🔎", name: "Investigator", desc: "Gathers information to reveal a player's true role. Helps discover Shadows.", image: "/cards/deset_investigator.webp" },
  { icon: "⚔️", name: "Knight", desc: "Brave warrior defending the kingdom with strength. Possesses combat abilities and protective skills.", image: "/cards/deset_knight.webp" },
  { icon: "🏰", name: "Royal Guard", desc: "Personal guard for the king, protects royal family members.", image: "/cards/deset_royal_guard.webp" },
  { icon: "⚖️", name: "Judge", desc: "Judges disputes and decides fate. Plays a crucial role in pivotal decisions.", image: "/cards/deset_judge.webp" },
  { icon: "📜", name: "Vizier", desc: "King's advisor, manages kingdom affairs. Holds great influence and knowledge.", image: "/cards/deset_vizier.webp" },
  { icon: "🙏", name: "Priest", desc: "Guides people and performs religious rituals. May have spiritual abilities or special knowledge.", image: "/cards/deset_priest.webp" },
  { icon: "📬", name: "Messenger", desc: "Transmits messages and secret communications between parties. Important for coordination and secret communication.", image: "/cards/deset_messenger.webp" },
  { icon: "🧙", name: "Wizard", desc: "Possesses magical knowledge and mysterious abilities. Has a unique ability that can change the game's course.", image: "/cards/deset_wizard.webp" },
  { icon: "👤", name: "Citizen", desc: "Ordinary kingdom inhabitant. No special abilities, but vote is important in voting.", image: "/cards/deset_citizen.webp" },
  { icon: "🤴", name: "Crown Prince", desc: "Heir to the throne, ready to take power when the king falls.", image: "/cards/deset_crown_prince.webp" },
  { icon: "🎪", name: "Trickster", desc: "A character who tries to convince players they are a threat or part of an opposing team, until eliminated by vote.", image: "/cards/deset_trickster.webp" }
];

export const NEUTRAL_ROLES: Role[] = [
  { icon: "🎪", name: "Trickster", desc: "A character who tries to convince players they are a threat or part of an opposing team, until eliminated by vote.", image: "/cards/deset_trickster.webp" }
];

export const INTERACTIONS: { title: string; steps: string[] }[] = [
  { title: "Assassination meets protection", steps: ["Assassin attacks target", "Guard protects same target", "Attack fails and target survives"] },
  { title: "Poison meets antidote", steps: ["Poisoner poisons a player", "Doctor treats same player", "Poison is blocked and target survives"] },
  { title: "Sabotage meets investigation", steps: ["Saboteur disables investigator's ability", "Investigator attempts investigation", "No result appears due to sabotage"] }
];