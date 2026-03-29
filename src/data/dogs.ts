export interface Dog {
  id: number;
  name: string;
  origin: string;
  category: 'working' | 'sporting' | 'toy' | 'herding' | 'hound' | 'terrier';
  size: 'small' | 'medium' | 'large' | 'giant';
  description: string;
  traits: string[];
  stats: {
    energy: number;
    friendliness: number;
    intelligence: number;
    grooming: number;
    trainability: number;
  };
  color: string;
  emoji: string;
  funFact: string;
}

export const dogBreeds: Dog[] = [
  {
    id: 1,
    name: "Golden Retriever",
    origin: "Scotland",
    category: "sporting",
    size: "large",
    description: "Friendly, reliable, and devoted companions known for their golden coats and gentle temperament.",
    traits: ["Friendly", "Loyal", "Intelligent", "Active"],
    stats: { energy: 80, friendliness: 100, intelligence: 85, grooming: 70, trainability: 95 },
    color: "#FCD34D",
    emoji: "🦮",
    funFact: "Golden Retrievers have such soft mouths they can carry raw eggs without breaking them!"
  },
  {
    id: 2,
    name: "German Shepherd",
    origin: "Germany",
    category: "herding",
    size: "large",
    description: "Confident, courageous, and smart. The world's leading police, guard, and military dog.",
    traits: ["Loyal", "Confident", "Courageous", "Smart"],
    stats: { energy: 85, friendliness: 70, intelligence: 95, grooming: 60, trainability: 90 },
    color: "#92400E",
    emoji: "🐕‍🦺",
    funFact: "German Shepherds can learn a new command in less than 5 repetitions!"
  },
  {
    id: 3,
    name: "French Bulldog",
    origin: "France",
    category: "toy",
    size: "small",
    description: "Playful, adaptable, and completely irresistible. Perfect city companions with bat-like ears.",
    traits: ["Playful", "Adaptable", "Smart", "Affectionate"],
    stats: { energy: 50, friendliness: 90, intelligence: 70, grooming: 30, trainability: 75 },
    color: "#D4A574",
    emoji: "🐶",
    funFact: "French Bulldogs cannot swim due to their body structure - they're too front-heavy!"
  },
  {
    id: 4,
    name: "Siberian Husky",
    origin: "Russia",
    category: "working",
    size: "medium",
    description: "Outgoing, mischievous, and loyal. Built for endurance in the frozen tundra.",
    traits: ["Outgoing", "Mischievous", "Loyal", "Athletic"],
    stats: { energy: 95, friendliness: 85, intelligence: 75, grooming: 80, trainability: 60 },
    color: "#93C5FD",
    emoji: "🐺",
    funFact: "Huskies can change their metabolism to run for hours without getting tired or burning fat!"
  },
  {
    id: 5,
    name: "Labrador Retriever",
    origin: "Canada",
    category: "sporting",
    size: "large",
    description: "Outgoing, active, and friendly. America's most popular dog breed for decades.",
    traits: ["Friendly", "Active", "Outgoing", "Gentle"],
    stats: { energy: 85, friendliness: 100, intelligence: 85, grooming: 50, trainability: 95 },
    color: "#854D0E",
    emoji: "🐕",
    funFact: "Labs have webbed toes which make them excellent swimmers!"
  },
  {
    id: 6,
    name: "Corgi",
    origin: "Wales",
    category: "herding",
    size: "small",
    description: "Bold, intelligent, and full of personality. The Queen's favorite breed!",
    traits: ["Bold", "Intelligent", "Affectionate", "Alert"],
    stats: { energy: 75, friendliness: 85, intelligence: 80, grooming: 60, trainability: 80 },
    color: "#F97316",
    emoji: "🦊",
    funFact: "Legend says Corgis were used by Welsh fairies as battle steeds!"
  },
  {
    id: 7,
    name: "Poodle",
    origin: "Germany",
    category: "toy",
    size: "medium",
    description: "Proud, active, and very smart. Don't let the fancy haircut fool you - they're athletes!",
    traits: ["Intelligent", "Active", "Alert", "Faithful"],
    stats: { energy: 70, friendliness: 80, intelligence: 100, grooming: 100, trainability: 100 },
    color: "#E5E5E5",
    emoji: "🐩",
    funFact: "Poodles are the second smartest dog breed in the world!"
  },
  {
    id: 8,
    name: "Beagle",
    origin: "England",
    category: "hound",
    size: "small",
    description: "Merry, curious, and friendly. Their incredible nose guides them through adventures.",
    traits: ["Curious", "Friendly", "Merry", "Determined"],
    stats: { energy: 80, friendliness: 90, intelligence: 70, grooming: 40, trainability: 65 },
    color: "#D97706",
    emoji: "🐕",
    funFact: "Beagles have 220 million scent receptors compared to humans' 5 million!"
  },
  {
    id: 9,
    name: "Rottweiler",
    origin: "Germany",
    category: "working",
    size: "large",
    description: "Loyal, loving, and confident guardian. A gentle giant with the right training.",
    traits: ["Loyal", "Confident", "Loving", "Protective"],
    stats: { energy: 70, friendliness: 65, intelligence: 85, grooming: 30, trainability: 80 },
    color: "#1C1917",
    emoji: "🐕‍🦺",
    funFact: "Rottweilers were originally bred to herd cattle and pull carts for butchers!"
  },
  {
    id: 10,
    name: "Yorkshire Terrier",
    origin: "England",
    category: "terrier",
    size: "small",
    description: "Feisty, affectionate, and glamorous. Big personality in a tiny package.",
    traits: ["Bold", "Confident", "Affectionate", "Spirited"],
    stats: { energy: 65, friendliness: 75, intelligence: 75, grooming: 95, trainability: 70 },
    color: "#A78BFA",
    emoji: "🐕",
    funFact: "Yorkies were originally bred to catch rats in clothing mills!"
  },
  {
    id: 11,
    name: "Dachshund",
    origin: "Germany",
    category: "hound",
    size: "small",
    description: "Curious, clever, and courageous. The iconic 'wiener dog' with a big heart.",
    traits: ["Clever", "Stubborn", "Devoted", "Playful"],
    stats: { energy: 60, friendliness: 70, intelligence: 75, grooming: 40, trainability: 55 },
    color: "#B45309",
    emoji: "🌭",
    funFact: "Dachshunds were bred to hunt badgers - 'Dachs' means badger in German!"
  },
  {
    id: 12,
    name: "Boxer",
    origin: "Germany",
    category: "working",
    size: "large",
    description: "Fun-loving, bright, and active. Forever young at heart with boundless energy.",
    traits: ["Playful", "Patient", "Bright", "Energetic"],
    stats: { energy: 90, friendliness: 85, intelligence: 75, grooming: 25, trainability: 75 },
    color: "#DC8A5C",
    emoji: "🥊",
    funFact: "Boxers are named for the way they play - standing on hind legs and 'boxing' with paws!"
  },
  {
    id: 13,
    name: "Shiba Inu",
    origin: "Japan",
    category: "hound",
    size: "small",
    description: "Alert, attentive, and cat-like. The internet's favorite meme dog!",
    traits: ["Alert", "Active", "Attentive", "Independent"],
    stats: { energy: 70, friendliness: 60, intelligence: 80, grooming: 70, trainability: 50 },
    color: "#EA580C",
    emoji: "🦊",
    funFact: "Shiba Inus are famous for the 'Shiba scream' - a unique vocalization when excited!"
  },
  {
    id: 14,
    name: "Great Dane",
    origin: "Germany",
    category: "working",
    size: "giant",
    description: "Friendly, patient, and dependable. The gentle giant of the dog world.",
    traits: ["Friendly", "Patient", "Dependable", "Gentle"],
    stats: { energy: 55, friendliness: 90, intelligence: 70, grooming: 30, trainability: 75 },
    color: "#6B7280",
    emoji: "🐕",
    funFact: "Despite their size, Great Danes think they're lap dogs and love to cuddle!"
  },
  {
    id: 15,
    name: "Border Collie",
    origin: "Scotland",
    category: "herding",
    size: "medium",
    description: "Energetic, intelligent, and athletic. The Einstein of the dog world.",
    traits: ["Intelligent", "Energetic", "Alert", "Athletic"],
    stats: { energy: 100, friendliness: 75, intelligence: 100, grooming: 60, trainability: 100 },
    color: "#1F2937",
    emoji: "🐾",
    funFact: "Border Collies can learn over 1,000 words and commands!"
  },
  {
    id: 16,
    name: "Australian Shepherd",
    origin: "USA",
    category: "herding",
    size: "medium",
    description: "Exuberant, smart, and work-oriented. Beautiful multicolored coats and boundless energy.",
    traits: ["Smart", "Work-oriented", "Exuberant", "Protective"],
    stats: { energy: 95, friendliness: 80, intelligence: 90, grooming: 70, trainability: 90 },
    color: "#3B82F6",
    emoji: "🐕",
    funFact: "Australian Shepherds aren't actually from Australia - they're American!"
  },
  {
    id: 17,
    name: "Pomeranian",
    origin: "Germany",
    category: "toy",
    size: "small",
    description: "Lively, bold, and inquisitive. A fluffy ball of confident energy.",
    traits: ["Lively", "Bold", "Inquisitive", "Playful"],
    stats: { energy: 70, friendliness: 75, intelligence: 75, grooming: 90, trainability: 70 },
    color: "#FDBA74",
    emoji: "🐻",
    funFact: "Pomeranians descended from large sled dogs and were once much bigger!"
  },
  {
    id: 18,
    name: "Doberman",
    origin: "Germany",
    category: "working",
    size: "large",
    description: "Loyal, fearless, and alert. Elegant athletes with incredible devotion.",
    traits: ["Loyal", "Fearless", "Alert", "Intelligent"],
    stats: { energy: 85, friendliness: 70, intelligence: 90, grooming: 25, trainability: 85 },
    color: "#7C2D12",
    emoji: "🐕‍🦺",
    funFact: "Dobermans were created by a tax collector who needed a protection dog!"
  },
  {
    id: 19,
    name: "Cavalier King Charles",
    origin: "England",
    category: "toy",
    size: "small",
    description: "Affectionate, gentle, and graceful. The perfect lap dog with royal heritage.",
    traits: ["Affectionate", "Gentle", "Graceful", "Sociable"],
    stats: { energy: 50, friendliness: 100, intelligence: 70, grooming: 75, trainability: 75 },
    color: "#B91C1C",
    emoji: "👑",
    funFact: "King Charles II loved these dogs so much he decreed they could enter any building!"
  },
  {
    id: 20,
    name: "Bernese Mountain Dog",
    origin: "Switzerland",
    category: "working",
    size: "giant",
    description: "Good-natured, calm, and strong. A fluffy giant from the Swiss Alps.",
    traits: ["Good-natured", "Calm", "Strong", "Loyal"],
    stats: { energy: 60, friendliness: 95, intelligence: 75, grooming: 80, trainability: 80 },
    color: "#374151",
    emoji: "🏔️",
    funFact: "Bernese Mountain Dogs were bred to pull carts up to 1,000 pounds!"
  }
];

export const categories = [
  { id: 'all', label: 'All Breeds', emoji: '🐕' },
  { id: 'working', label: 'Working', emoji: '🛠️' },
  { id: 'sporting', label: 'Sporting', emoji: '🎾' },
  { id: 'toy', label: 'Toy', emoji: '🧸' },
  { id: 'herding', label: 'Herding', emoji: '🐑' },
  { id: 'hound', label: 'Hound', emoji: '🔍' },
  { id: 'terrier', label: 'Terrier', emoji: '⚡' },
];
