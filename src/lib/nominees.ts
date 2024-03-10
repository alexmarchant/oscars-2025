export interface Category {
  name: string
  nominees: string[]
  points: number
}

export const Categories: Category[] = [
  {
    "name": "Best Picture",
    "nominees": [
      "American Fiction",
      "Anatomy of a Fall",
      "Barbie",
      "The Holdovers",
      "Killers of the Flower Moon",
      "Maestro",
      "Oppenheimer",
      "Past Lives",
      "Poor Things",
      "The Zone of Interest"
    ],
    points: 10
  },
  {
    "name": "Best Director",
    "nominees": [
      "Justine Triet — Anatomy of a Fall",
      "Martin Scorsese — Killers of the Flower Moon",
      "Christopher Nolan — Oppenheimer",
      "Yorgos Lanthimos — Poor Things",
      "Jonathan Glazer — The Zone of Interest"
    ],
    points: 8
  },
  {
    "name": "Best Actor in a Leading Role",
    "nominees": [
      "Bradley Cooper — Maestro",
      "Colman Domingo — Rustin",
      "Paul Giamatti — The Holdovers",
      "Cillian Murphy — Oppenheimer",
      "Jeffrey Wright — American Fiction"
    ],
    points: 8
  },
  {
    "name": "Best Actress in a Leading Role",
    "nominees": [
      "Annette Bening — Nyad",
      "Lily Gladstone — Killers of the Flower Moon",
      "Sandra Hüller — Anatomy of a Fall",
      "Carey Mulligan — Maestro",
      "Emma Stone — Poor Things"
    ],
    points: 8
  },
  {
    "name": "Best Actor in a Supporting Role",
    "nominees": [
      "Sterling K. Brown — American Fiction",
      "Robert De Niro — Killers of the Flower Moon",
      "Robert Downey Jr. — Oppenheimer",
      "Ryan Gosling — Barbie",
      "Mark Ruffalo — Poor Things"
    ],
    points: 6
  },
  {
    "name": "Best Actress in a Supporting Role",
    "nominees": [
      "Emily Blunt — Oppenheimer",
      "Danielle Brooks — The Color Purple",
      "America Ferrera — Barbie",
      "Jodie Foster — Nyad",
      "Da’Vine Joy Randolph — The Holdovers"
    ],
    points: 6
  },
  {
    "name": "Best Original Screenplay",
    "nominees": [
      "Anatomy of a Fall — Justine Triet and Arthur Harari",
      "The Holdovers — David Hemingson",
      "Maestro — Bradley Cooper and Josh Singer",
      "May December — Samy Burch and Alex Mechanik",
      "Past Lives — Celine Song"
    ],
    points: 5
  },
  {
    "name": "Best Adapted Screenplay",
    "nominees": [
      "American Fiction — Cord Jefferson",
      "Barbie — Greta Gerwig and Noah Baumbach",
      "Oppenheimer — Christopher Nolan",
      "Poor Things — Tony McNamara",
      "The Zone of Interest — Jonathan Glazer"
    ],
    points: 5
  },
  {
    "name": "Best Costume Design",
    "nominees": [
      "Barbie — Jacqueline Durran",
      "Killers of the Flower Moon — Jacqueline West",
      "Napoleon — Janty Yates and David Crossman",
      "Oppenheimer — Ellen Mirojnick",
      "Poor Things — Holly Waddington"
    ],
    points: 3
  },
  {
    "name": "Best Makeup and Hairstyling",
    "nominees": [
      "Golda — Karen Hartley Thomas, Suzi Battersby, and Ashra Kelly-Blue",
      "Maestro — Kazu Hiro, Kay Georgiou, and Lori McCoy-Bell",
      "Oppenheimer — Luisa Abel",
      "Poor Things — Nadia Stacey, Mark Coulier, and Josh Weston",
      "Society of the Snow — Ana López-Puigcerver, David Martí, and Montse Ribé"
    ],
    points: 3
  },
  {
    "name": "Best Cinematography",
    "nominees": [
      "El Conde",
      "Killers of the Flower Moon",
      "Maestro",
      "Oppenheimer",
      "Poor Things"
    ],
    points: 4
  },
  {
    "name": "Best Visual Effects",
    "nominees": [
      "The Creator",
      "Godzilla Minus One",
      "Guardians of the Galaxy Vol. 3",
      "Mission: Impossible – Dead Reckoning Part One",
      "Napoleon"
    ],
    points: 3
  },
  {
    "name": "Best Sound",
    "nominees": [
      "The Creator",
      "Maestro",
      "Mission: Impossible – Dead Reckoning Part One",
      "Oppenheimer",
      "The Zone of Interest"
    ],
    points: 2
  },
  {
    "name": "Best Film Editing",
    "nominees": [
      "Anatomy of a Fall",
      "The Holdovers",
      "Killers of the Flower Moon",
      "Oppenheimer",
      "Poor Things"
    ],
    points: 3
  },
  {
    "name": "Best Production Design",
    "nominees": [
      "Barbie",
      "Killers of the Flower Moon",
      "Napoleon",
      "Oppenheimer",
      "Poor Things"
    ],
    points: 3
  },
  {
    "name": "Best Original Score",
    "nominees": [
      "American Fiction — Laura Karpman",
      "Indiana Jones and the Dial of Destiny — John Williams",
      "Killers of the Flower Moon — Robbie Robertson",
      "Oppenheimer — Ludwig Göransson",
      "Poor Things — Jerskin Fendrix"
    ],
    points: 4
  },
  {
    "name": "Best Original Song",
    "nominees": [
      "“The Fire Inside” — Flamin’ Hot",
      "“I’m Just Ken” — Barbie",
      "“It Never Went Away” — American Symphony",
      "“Wahzhazhe (A Song for My People)” — Killers of the Flower Moon",
      "“What Was I Made For?” — Barbie"
    ],
    points: 3
  },
  {
    "name": "Best Animated Feature Film",
    "nominees": [
      "The Boy and the Heron",
      "Elemental",
      "Nimona",
      "Robot Dreams",
      "Spider-Man: Across the Spider-Verse"
    ],
    points: 5
  },
  {
    "name": "Best International Feature Film",
    "nominees": [
      "Io Capitano — Italy",
      "Perfect Days — Japan",
      "Society of the Snow — Spain",
      "The Teachers’ Lounge — Germany",
      "The Zone of Interest — UK"
    ],
    points: 4
  },
  {
    "name": "Best Animated Short Film",
    "nominees": [
      "Letter to a Pig",
      "Ninety-Five Senses",
      "Our Uniform",
      "Pachyderme",
      "War Is Over! Inspired by the Music of John & Yoko"
    ],
    points: 2
  },
  {
    "name": "Best Live Action Short Film",
    "nominees": [
      "The After",
      "Invincible",
      "Knight of Fortune",
      "Red, White and Blue",
      "The Wonderful Story of Henry Sugar"
    ],
    points: 2
  },
  {
    "name": "Best Documentary Feature Film",
    "nominees": [
      "Bobi Wine: The People’s President",
      "The Eternal Memory",
      "Four Daughters",
      "To Kill a Tiger",
      "20 Days in Mariupol"
    ],
    points: 4
  },
  {
    "name": "Best Documentary Short Film",
    "nominees": [
      "The ABCs of Book Banning",
      "The Barber of Little Rock",
      "Island in Between",
      "The Last Repair Shop",
      "Nǎi Nai & Wài Pó"
    ],
    points: 2
  }
]

export const CategoryMap = Categories.reduce((acc, category) => {
  acc[category.name] = category
  return acc
}, {} as Record<string, Category>)