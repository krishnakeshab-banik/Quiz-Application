import { Question } from '../types';

export const marineQuestions: Question[] = [
  {
    id: 301,
    text: "What is the main function of a ship's bilge system?",
    options: [
      { id: "m1a", text: "To provide drinking water", isCorrect: false },
      { id: "m1b", text: "To collect and remove water that accumulates in the bilge", isCorrect: true },
      { id: "m1c", text: "To cool the engines", isCorrect: false },
      { id: "m1d", text: "To balance the ship", isCorrect: false }
    ],
    explanation: "A ship's bilge system is designed to collect and pump out water that accumulates in the bilge (the lowest part of the ship's hull) from condensation, leaks, or other sources.",
    category: "marine"
  },
  {
    id: 302,
    text: "What is cavitation in marine propellers?",
    options: [
      { id: "m2a", text: "The formation of bubbles on propeller blades that can cause damage", isCorrect: true },
      { id: "m2b", text: "The gradual wearing down of propeller material over time", isCorrect: false },
      { id: "m2c", text: "The optimal rotation speed for maximum propulsion", isCorrect: false },
      { id: "m2d", text: "The hollow center of a propeller shaft", isCorrect: false }
    ],
    explanation: "Cavitation is a phenomenon where rapid changes in pressure create vapor-filled cavities (bubbles) on propeller blades. When these bubbles collapse, they can create shock waves that erode the propeller surface over time.",
    category: "marine"
  },
  {
    id: 303,
    text: "Which of these is NOT a common type of marine propulsion system?",
    options: [
      { id: "m3a", text: "Diesel engine", isCorrect: false },
      { id: "m3b", text: "Gas turbine", isCorrect: false },
      { id: "m3c", text: "Nuclear propulsion", isCorrect: false },
      { id: "m3d", text: "Antimatter drive", isCorrect: true }
    ],
    explanation: "Antimatter drive is a theoretical propulsion system not currently used in marine vessels. Diesel engines, gas turbines, and nuclear propulsion are all common propulsion systems for various types of ships.",
    category: "marine"
  },
  {
    id: 304,
    text: "What is the primary purpose of a bulbous bow on a ship?",
    options: [
      { id: "m4a", text: "To increase cargo capacity", isCorrect: false },
      { id: "m4b", text: "To reduce wave-making resistance and improve fuel efficiency", isCorrect: true },
      { id: "m4c", text: "To break through ice in polar regions", isCorrect: false },
      { id: "m4d", text: "To house sonar equipment", isCorrect: false }
    ],
    explanation: "A bulbous bow is a protruding bulb at the bow (front) of a ship below the waterline, designed to modify the flow of water around the hull, reducing drag and increasing speed, range, and fuel efficiency.",
    category: "marine"
  },
  {
    id: 305,
    text: "What is the function of a ship's ballast system?",
    options: [
      { id: "m5a", text: "To provide emergency flotation in case of hull breach", isCorrect: false },
      { id: "m5b", text: "To adjust the ship's stability, trim, and draft", isCorrect: true },
      { id: "m5c", text: "To reduce the ship's weight", isCorrect: false },
      { id: "m5d", text: "To power the ship in case of engine failure", isCorrect: false }
    ],
    explanation: "A ship's ballast system allows the vessel to take in or discharge water to adjust its stability, draft, and trim. This is crucial for maintaining proper balance and compensating for changes in cargo load.",
    category: "marine"
  },
  {
    id: 306,
    text: "What is the main advantage of a podded propulsion system?",
    options: [
      { id: "m6a", text: "Lower initial cost compared to traditional systems", isCorrect: false },
      { id: "m6b", text: "Simpler maintenance requirements", isCorrect: false },
      { id: "m6c", text: "Enhanced maneuverability and efficiency", isCorrect: true },
      { id: "m6d", text: "Reduced noise levels", isCorrect: false }
    ],
    explanation: "Podded propulsion systems (like azipods) place the motor in a pod outside the hull with the propeller. They can rotate 360 degrees, providing exceptional maneuverability and improved hydrodynamic efficiency, especially useful for cruise ships and ice-going vessels.",
    category: "marine"
  },
  {
    id: 307,
    text: "What does MARPOL regulate in the maritime industry?",
    options: [
      { id: "m7a", text: "Maritime police operations", isCorrect: false },
      { id: "m7b", text: "Marine pollution prevention", isCorrect: true },
      { id: "m7c", text: "Maritime labor conditions", isCorrect: false },
      { id: "m7d", text: "Marine propulsion licensing", isCorrect: false }
    ],
    explanation: "MARPOL (Marine Pollution) is the International Convention for the Prevention of Pollution from Ships. It establishes regulations to minimize pollution of the oceans from ships, including oil, chemicals, garbage, sewage, and air emissions.",
    category: "marine"
  },
  {
    id: 308,
    text: "What is the purpose of a ship's sacrificial anode?",
    options: [
      { id: "m8a", text: "To improve hydrodynamic efficiency", isCorrect: false },
      { id: "m8b", text: "To protect against lightning strikes", isCorrect: false },
      { id: "m8c", text: "To protect metal components from galvanic corrosion", isCorrect: true },
      { id: "m8d", text: "To reduce electromagnetic interference", isCorrect: false }
    ],
    explanation: "Sacrificial anodes are pieces of metal (often zinc, aluminum, or magnesium) attached to a ship's hull or other submerged metallic components. They corrode preferentially to protect the more important metals from galvanic corrosion in seawater.",
    category: "marine"
  },
  {
    id: 309,
    text: "What is the main advantage of a diesel-electric propulsion system for ships?",
    options: [
      { id: "m9a", text: "Simplicity of design", isCorrect: false },
      { id: "m9b", text: "Lower initial cost", isCorrect: false },
      { id: "m9c", text: "Flexibility in engine placement and power management", isCorrect: true },
      { id: "m9d", text: "Ability to use renewable fuels", isCorrect: false }
    ],
    explanation: "Diesel-electric propulsion systems use diesel engines to generate electricity, which then powers electric motors connected to the propellers. This arrangement offers flexibility in placement of engines, better space utilization, improved efficiency at varying speeds, and precise control of power.",
    category: "marine"
  },
  {
    id: 310,
    text: "What is a dynamic positioning system used for on vessels?",
    options: [
      { id: "m10a", text: "To track the location of cargo containers", isCorrect: false },
      { id: "m10b", text: "To automatically maintain a vessel's position using propellers and thrusters", isCorrect: true },
      { id: "m10c", text: "To optimize the vessel's speed based on weather conditions", isCorrect: false },
      { id: "m10d", text: "To dynamically adjust ballast based on wave conditions", isCorrect: false }
    ],
    explanation: "Dynamic positioning (DP) systems are computer-controlled systems that automatically maintain a vessel's position and heading using its own propellers and thrusters. This is crucial for offshore drilling vessels, cable-laying ships, and others that need to maintain precise positioning without anchoring.",
    category: "marine"
  },
  {
    id: 311,
    text: "What is the purpose of a stern tube seal system on a ship?",
    options: [
      { id: "m11a", text: "To prevent water from entering where the propeller shaft penetrates the hull", isCorrect: true },
      { id: "m11b", text: "To reduce noise from the propeller", isCorrect: false },
      { id: "m11c", text: "To allow the rudder to move smoothly", isCorrect: false },
      { id: "m11d", text: "To connect the propeller to the engine", isCorrect: false }
    ],
    explanation: "The stern tube seal system prevents seawater from entering the ship where the propeller shaft passes through the hull (stern tube). It's critical for maintaining watertight integrity while allowing the shaft to rotate.",
    category: "marine"
  },
  {
    id: 312,
    text: "What is the advantage of a bulbous bow design for ships?",
    options: [
      { id: "m12a", text: "Increased cargo capacity", isCorrect: false },
      { id: "m12b", text: "Improved stability in rough seas", isCorrect: false },
      { id: "m12c", text: "Reduced wave resistance and improved fuel efficiency", isCorrect: true },
      { id: "m12d", text: "Enhanced maneuverability in tight spaces", isCorrect: false }
    ],
    explanation: "A bulbous bow creates a wave system that partially cancels out the ship's bow wave, reducing wave-making resistance. This improves fuel efficiency and increases speed, particularly for larger vessels operating at moderate to high speeds.",
    category: "marine"
  },
  {
    id: 313,
    text: "What does LNG stand for in marine propulsion?",
    options: [
      { id: "m13a", text: "Lubricated Natural Gears", isCorrect: false },
      { id: "m13b", text: "Liquefied Natural Gas", isCorrect: true },
      { id: "m13c", text: "Low Noise Generation", isCorrect: false },
      { id: "m13d", text: "Long-range Navigation Guidance", isCorrect: false }
    ],
    explanation: "LNG stands for Liquefied Natural Gas, which is natural gas (primarily methane) that has been cooled to -162°C, converting it to liquid form. LNG is increasingly used as a cleaner alternative fuel for ship propulsion, reducing emissions compared to traditional marine fuels.",
    category: "marine"
  },
  {
    id: 314,
    text: "What is the main function of a marine reduction gearbox?",
    options: [
      { id: "m14a", text: "To increase engine RPM", isCorrect: false },
      { id: "m14b", text: "To reduce the engine's rotational speed to a more optimal propeller speed", isCorrect: true },
      { id: "m14c", text: "To allow the propeller to operate in reverse", isCorrect: false },
      { id: "m14d", text: "To reduce engine noise", isCorrect: false }
    ],
    explanation: "A marine reduction gearbox reduces the high rotational speed of the engine to a lower speed more suitable for efficient propeller operation. Most marine engines operate at much higher RPMs than is optimal for propellers, so the gearbox provides the necessary reduction ratio.",
    category: "marine"
  },
  {
    id: 315,
    text: "What is a voyage data recorder (VDR) on a ship comparable to?",
    options: [
      { id: "m15a", text: "GPS navigation system", isCorrect: false },
      { id: "m15b", text: "Fuel consumption monitor", isCorrect: false },
      { id: "m15c", text: "Black box on an aircraft", isCorrect: true },
      { id: "m15d", text: "Radar system", isCorrect: false }
    ],
    explanation: "A voyage data recorder (VDR) is similar to a black box on an aircraft. It continuously records data about the ship's position, speed, audio on the bridge, radar images, and other crucial information. This data is essential for investigating maritime incidents and accidents.",
    category: "marine"
  }
];