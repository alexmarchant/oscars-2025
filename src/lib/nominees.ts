export interface Category {
  name: string
  nominees: string[]
  points: number
}

export const Categories: Category[] = [
  {
    name: "Best Picture",
    nominees: [
      "Anora",
      "The Brutalist",
      "A Complete Unknown",
      "Conclave",
      "Dune: Part Two",
      "Emilia Pérez",
      "I'm Still Here",
      "Nickel Boys",
      "The Substance",
      "Wicked"
    ],
    points: 10
  },
  {
    name: "Best Director",
    nominees: [
      "Sean Baker — Anora",
      "Brady Corbet — The Brutalist",
      "James Mangold — A Complete Unknown",
      "Jacques Audiard — Emilia Pérez",
      "Coralie Fargeat — The Substance"
    ],
    points: 8
  },
  {
    name: "Best Actor in a Leading Role",
    nominees: [
      "Adrien Brody — The Brutalist",
      "Timothée Chalamet — A Complete Unknown",
      "Colman Domingo — Sing Sing",
      "Ralph Fiennes — Conclave",
      "Sebastian Stan — The Apprentice"
    ],
    points: 8
  },
  {
    name: "Best Actress in a Leading Role",
    nominees: [
      "Cynthia Erivo — Wicked",
      "Karla Sofía Gascón — Emilia Pérez",
      "Mikey Madison — Anora",
      "Demi Moore — The Substance",
      "Fernanda Torres — I'm Still Here"
    ],
    points: 8
  },
  {
    name: "Best Actor in a Supporting Role",
    nominees: [
      "Yura Borisov — Anora",
      "Kieran Culkin — A Real Pain",
      "Edward Norton — A Complete Unknown",
      "Guy Pearce — The Brutalist",
      "Jeremy Strong — The Apprentice"
    ],
    points: 6
  },
  {
    name: "Best Actress in a Supporting Role",
    nominees: [
      "Monica Barbaro — A Complete Unknown",
      "Ariana Grande — Wicked",
      "Felicity Jones — The Brutalist",
      "Isabella Rossellini — Conclave",
      "Zoe Saldaña — Emilia Pérez"
    ],
    points: 6
  },
  {
    name: "Best Original Screenplay",
    nominees: [
      "Anora — Sean Baker",
      "The Brutalist — Brady Corbet, Mona Fastvold",
      "A Real Pain — Jesse Eisenberg",
      "September 5 — Moritz Binder, Tim Fehlbaum; Co-Written by Alex David",
      "The Substance — Coralie Fargeat"
    ],
    points: 5
  },
  {
    name: "Best Adapted Screenplay",
    nominees: [
      "A Complete Unknown — James Mangold, Jay Cocks",
      "Conclave — Peter Straughan",
      "Emilia Pérez — Jacques Audiard; In collaboration with Thomas Bidegain, Léa Mysius and Nicolas Livecchi",
      "Nickel Boys — RaMell Ross & Joslyn Barnes",
      "Sing Sing — Clint Bentley, Greg Kwedar; Story by Clint Bentley, Greg Kwedar, Clarence Maclin, John 'Divine G' Whitfield"
    ],
    points: 5
  },
  {
    name: "Best Costume Design",
    nominees: [
      "A Complete Unknown — Arianne Phillips",
      "Conclave — Lisy Christl",
      "Gladiator II — Janty Yates and Dave Crossman",
      "Nosferatu — Linda Muir",
      "Wicked — Paul Tazewell"
    ],
    points: 3
  },
  {
    name: "Best Makeup and Hairstyling",
    nominees: [
      "A Different Man",
      "Emilia Pérez",
      "Nosferatu",
      "The Substance",
      "Wicked"
    ],
    points: 3
  },
  {
    name: "Best Cinematography",
    nominees: [
      "The Brutalist — Lol Crawley",
      "Dune: Part Two — Greig Fraser",
      "Emilia Pérez — Paul Guilhaume",
      "Maria — Ed Lachman",
      "Nosferatu — Jarin Blaschke"
    ],
    points: 4
  },
  {
    name: "Best Visual Effects",
    nominees: [
      "Alien: Romulus",
      "Better Man",
      "Dune: Part Two",
      "Kingdom of the Planet of the Apes",
      "Wicked"
    ],
    points: 3
  },
  {
    name: "Best Sound",
    nominees: [
      "A Complete Unknown",
      "Dune: Part Two",
      "Emilia Pérez",
      "Wicked",
      "The Wild Robot"
    ],
    points: 2
  },
  {
    name: "Best Film Editing",
    nominees: [
      "Anora — Sean Baker",
      "The Brutalist — David Jancso",
      "Conclave — Nick Emerson",
      "Emilia Pérez — Juliette Welfling",
      "Wicked — Myron Kerstein"
    ],
    points: 3
  },
  {
    name: "Best Production Design",
    nominees: [
      "The Brutalist",
      "Conclave",
      "Dune: Part Two",
      "Nosferatu",
      "Wicked"
    ],
    points: 3
  },
  {
    name: "Best Original Score",
    nominees: [
      "The Brutalist — Daniel Blumberg",
      "Conclave — Volker Bertelmann",
      "Emilia Pérez — Clément Ducol and Camille",
      "Wicked — John Powell and Stephen Schwartz",
      "The Wild Robot — Kris Bowers"
    ],
    points: 4
  },
  {
    name: "Best Original Song",
    nominees: [
      "El Mal — Emilia Pérez",
      "The Journey — The Six Triple Eight",
      "Like A Bird — Sing Sing",
      "Mi Camino — Emilia Pérez",
      "Never Too Late — Elton John: Never Too Late"
    ],
    points: 3
  },
  {
    name: "Best Animated Feature Film",
    nominees: [
      "Flow",
      "Inside Out 2",
      "Memoir of a Snail",
      "Wallace & Gromit: Vengeance Most Fowl",
      "The Wild Robot"
    ],
    points: 5
  },
  {
    name: "Best International Feature Film",
    nominees: [
      "Brazil — I'm Still Here",
      "Denmark — The Girl with the Needle",
      "France — Emilia Pérez",
      "Germany — The Seed of the Sacred Fig",
      "Latvia — Flow"
    ],
    points: 4
  },
  {
    name: "Best Animated Short Film",
    nominees: [
      "Beautiful Men",
      "In the Shadow of the Cypress",
      "Magic Candies",
      "Wander to Wonder",
      "Yuck!"
    ],
    points: 2
  },
  {
    name: "Best Live Action Short Film",
    nominees: [
      "A Lien",
      "Anuja",
      "I'm Not a Robot",
      "The Last Ranger",
      "The Man Who Could Not Remain Silent"
    ],
    points: 2
  },
  {
    name: "Best Documentary Feature Film",
    nominees: [
      "Black Box Diaries",
      "No Other Land",
      "Porcelain War",
      "Soundtrack to a Coup d'Etat",
      "Sugarcane"
    ],
    points: 4
  },
  {
    name: "Best Documentary Short Film",
    nominees: [
      "Death by Numbers",
      "I Am Ready, Warden",
      "Incident",
      "Instruments of a Beating Heart",
      "The Only Girl in the Orchestra"
    ],
    points: 2
  }
];

export const CategoryMap = Categories.reduce((acc, category) => {
  acc[category.name] = category
  return acc
}, {} as Record<string, Category>)