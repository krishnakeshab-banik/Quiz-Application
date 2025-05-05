import { Question } from '../types';

export const imageQuestions: Question[] = [
  {
    id: 501,
    text: "What landmark is shown in this image?",
    image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg",
    options: [
      { id: "i1a", text: "Burj Khalifa", isCorrect: false },
      { id: "i1b", text: "Eiffel Tower", isCorrect: true },
      { id: "i1c", text: "Tokyo Tower", isCorrect: false },
      { id: "i1d", text: "CN Tower", isCorrect: false }
    ],
    explanation: "This is the Eiffel Tower, a wrought-iron lattice tower on the Champ de Mars in Paris, France. It was constructed from 1887-1889 as the entrance to the 1889 World's Fair.",
    category: "images"
  },
  {
    id: 502,
    text: "What animal is shown in this image?",
    image: "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg",
    options: [
      { id: "i2a", text: "Jaguar", isCorrect: false },
      { id: "i2b", text: "Leopard", isCorrect: false },
      { id: "i2c", text: "Cheetah", isCorrect: true },
      { id: "i2d", text: "Tiger", isCorrect: false }
    ],
    explanation: "This is a cheetah (Acinonyx jubatus), recognized by its distinctive solid black spots, slender body, and the black 'tear marks' running from the inner corners of its eyes down the sides of its nose.",
    category: "images"
  },
  {
    id: 503,
    text: "What musical instrument is shown?",
    image: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg",
    options: [
      { id: "i3a", text: "Violin", isCorrect: false },
      { id: "i3b", text: "Cello", isCorrect: false },
      { id: "i3c", text: "Guitar", isCorrect: true },
      { id: "i3d", text: "Banjo", isCorrect: false }
    ],
    explanation: "This is an acoustic guitar. You can identify it by its hourglass-shaped wooden body, long neck with frets, six strings, and hollow sound hole in the body.",
    category: "images"
  },
  {
    id: 504,
    text: "Which famous painting is shown in this image?",
    image: "https://images.pexels.com/photos/20967/pexels-photo.jpg",
    options: [
      { id: "i4a", text: "The Starry Night", isCorrect: true },
      { id: "i4b", text: "The Scream", isCorrect: false },
      { id: "i4c", text: "Guernica", isCorrect: false },
      { id: "i4d", text: "The Persistence of Memory", isCorrect: false }
    ],
    explanation: "This is 'The Starry Night' by Vincent van Gogh, painted in June 1889. It depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, with the addition of an idealized village.",
    category: "images"
  },
  {
    id: 505,
    text: "What type of flower is shown in this image?",
    image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
    options: [
      { id: "i5a", text: "Tulip", isCorrect: false },
      { id: "i5b", text: "Rose", isCorrect: true },
      { id: "i5c", text: "Lily", isCorrect: false },
      { id: "i5d", text: "Sunflower", isCorrect: false }
    ],
    explanation: "This is a rose, specifically one with blue petals (which is not found naturally and is typically created through dyeing or genetic modification). Roses are identified by their layered petals, typically fragrant scent, and often thorny stems.",
    category: "images"
  },
  {
    id: 506,
    text: "What type of transportation is shown in this image?",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
    options: [
      { id: "i6a", text: "Train", isCorrect: false },
      { id: "i6b", text: "Cruise ship", isCorrect: false },
      { id: "i6c", text: "Hot air balloon", isCorrect: false },
      { id: "i6d", text: "Airplane", isCorrect: true }
    ],
    explanation: "This is a commercial passenger airplane (jet airliner) shown during landing or takeoff. You can identify it by its wings, fuselage, jet engines, and landing gear extended beneath the aircraft.",
    category: "images"
  },
  {
    id: 507,
    text: "What type of building is shown in this image?",
    image: "https://images.pexels.com/photos/356812/pexels-photo-356812.jpeg",
    options: [
      { id: "i7a", text: "Skyscraper", isCorrect: false },
      { id: "i7b", text: "Castle", isCorrect: true },
      { id: "i7c", text: "Mosque", isCorrect: false },
      { id: "i7d", text: "Stadium", isCorrect: false }
    ],
    explanation: "This is a medieval castle, likely the famous Neuschwanstein Castle in Bavaria, Germany. Castles are characterized by their stone construction, towers, fortified walls, and historical purpose as defensive structures and noble residences.",
    category: "images"
  },
  {
    id: 508,
    text: "What sport is being played in this image?",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    options: [
      { id: "i8a", text: "American Football", isCorrect: false },
      { id: "i8b", text: "Basketball", isCorrect: false },
      { id: "i8c", text: "Soccer (Football)", isCorrect: true },
      { id: "i8d", text: "Rugby", isCorrect: false }
    ],
    explanation: "This is soccer (also called football in most countries outside the United States). The image shows a soccer ball and a green grass pitch with field markings characteristic of a soccer field.",
    category: "images"
  },
  {
    id: 509,
    text: "What celestial body is shown in this image?",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg",
    options: [
      { id: "i9a", text: "Earth", isCorrect: false },
      { id: "i9b", text: "Mars", isCorrect: true },
      { id: "i9c", text: "Venus", isCorrect: false },
      { id: "i9d", text: "Jupiter", isCorrect: false }
    ],
    explanation: "This is Mars, the fourth planet from the Sun in our solar system. It's often called the 'Red Planet' due to its reddish appearance, which is caused by iron oxide (rust) on its surface.",
    category: "images"
  },
  {
    id: 510,
    text: "What dish is shown in this image?",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    options: [
      { id: "i10a", text: "Pizza", isCorrect: true },
      { id: "i10b", text: "Pasta", isCorrect: false },
      { id: "i10c", text: "Burger", isCorrect: false },
      { id: "i10d", text: "Sushi", isCorrect: false }
    ],
    explanation: "This is a pizza, specifically what appears to be a Margherita pizza with tomato sauce, mozzarella cheese, and basil. Pizza is a savory dish of Italian origin consisting of a round, flattened base of leavened wheat-based dough topped with various ingredients.",
    category: "images"
  },
  {
    id: 511,
    text: "What electronic device is shown in this image?",
    image: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    options: [
      { id: "i11a", text: "Smartphone", isCorrect: true },
      { id: "i11b", text: "Tablet", isCorrect: false },
      { id: "i11c", text: "Laptop", isCorrect: false },
      { id: "i11d", text: "Digital camera", isCorrect: false }
    ],
    explanation: "This is a smartphone. You can identify it by its compact size, touchscreen interface, and typical smartphone features like app icons visible on the screen.",
    category: "images"
  },
  {
    id: 512,
    text: "What type of vehicle is shown in this image?",
    image: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg",
    options: [
      { id: "i12a", text: "Sedan", isCorrect: false },
      { id: "i12b", text: "SUV", isCorrect: false },
      { id: "i12c", text: "Sports car", isCorrect: true },
      { id: "i12d", text: "Truck", isCorrect: false }
    ],
    explanation: "This is a sports car, characterized by its sleek, low-profile design, aerodynamic shape, and performance-oriented features. Sports cars typically prioritize speed, handling, and driving experience over practicality.",
    category: "images"
  },
  {
    id: 513,
    text: "What insect is shown in this image?",
    image: "https://images.pexels.com/photos/51002/moth-insect-macro-nature-51002.jpeg",
    options: [
      { id: "i13a", text: "Butterfly", isCorrect: false },
      { id: "i13b", text: "Moth", isCorrect: true },
      { id: "i13c", text: "Dragonfly", isCorrect: false },
      { id: "i13d", text: "Beetle", isCorrect: false }
    ],
    explanation: "This is a moth. While they look similar to butterflies, moths typically have feathery or comb-like antennae (unlike butterflies' thin, club-tipped antennae), stouter bodies, and generally hold their wings flat when resting (as shown in the image).",
    category: "images"
  },
  {
    id: 514,
    text: "What famous structure is shown in this image?",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    options: [
      { id: "i14a", text: "Taj Mahal", isCorrect: false },
      { id: "i14b", text: "Great Wall of China", isCorrect: true },
      { id: "i14c", text: "Machu Picchu", isCorrect: false },
      { id: "i14d", text: "Stonehenge", isCorrect: false }
    ],
    explanation: "This is the Great Wall of China, a series of fortifications built along the historical northern borders of China to protect Chinese states against nomadic groups. It is one of the most famous landmarks in the world and a UNESCO World Heritage site.",
    category: "images"
  },
  {
    id: 515,
    text: "What type of natural formation is shown in this image?",
    image: "https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg",
    options: [
      { id: "i15a", text: "Mountain", isCorrect: false },
      { id: "i15b", text: "Canyon", isCorrect: false },
      { id: "i15c", text: "Waterfall", isCorrect: true },
      { id: "i15d", text: "Volcano", isCorrect: false }
    ],
    explanation: "This is a waterfall, a point where water flows over a vertical drop in the course of a river or stream. Waterfalls form when a river or stream flows over resistant bedrock and then to an area of less resistant rock, or when the river's course is interrupted by a fault or landslide.",
    category: "images"
  }
];