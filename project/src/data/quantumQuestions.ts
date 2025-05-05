import { Question } from '../types';

export const quantumQuestions: Question[] = [
  {
    id: 1,
    text: "What is the basic unit of quantum information?",
    options: [
      { id: "q1a", text: "Bit", isCorrect: false },
      { id: "q1b", text: "Qubit", isCorrect: true },
      { id: "q1c", text: "Byte", isCorrect: false },
      { id: "q1d", text: "Qubyte", isCorrect: false }
    ],
    explanation: "A qubit is the basic unit of quantum information—the quantum version of the classical binary bit.",
    category: "quantum"
  },
  {
    id: 2,
    text: "What quantum phenomenon allows particles to exist in multiple states simultaneously?",
    options: [
      { id: "q2a", text: "Entanglement", isCorrect: false },
      { id: "q2b", text: "Teleportation", isCorrect: false },
      { id: "q2c", text: "Superposition", isCorrect: true },
      { id: "q2d", text: "Tunneling", isCorrect: false }
    ],
    explanation: "Superposition is the quantum phenomenon that allows particles to exist in multiple states simultaneously until they are measured.",
    category: "quantum"
  },
  {
    id: 3,
    text: "Which scientist is known for the 'Uncertainty Principle' in quantum mechanics?",
    options: [
      { id: "q3a", text: "Niels Bohr", isCorrect: false },
      { id: "q3b", text: "Werner Heisenberg", isCorrect: true },
      { id: "q3c", text: "Erwin Schrödinger", isCorrect: false },
      { id: "q3d", text: "Albert Einstein", isCorrect: false }
    ],
    explanation: "Werner Heisenberg formulated the Uncertainty Principle, which states that we cannot simultaneously know both the position and momentum of a particle with perfect precision.",
    category: "quantum"
  },
  {
    id: 4,
    text: "What is quantum entanglement?",
    options: [
      { id: "q4a", text: "The ability of qubits to be in multiple states at once", isCorrect: false },
      { id: "q4b", text: "A phenomenon where qubits can teleport information", isCorrect: false },
      { id: "q4c", text: "A quantum state where particles remain connected so that actions on one affect the other", isCorrect: true },
      { id: "q4d", text: "The collapse of a quantum wave function", isCorrect: false }
    ],
    explanation: "Quantum entanglement is a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, even when separated by large distances.",
    category: "quantum"
  },
  {
    id: 5,
    text: "Which of these is NOT a common type of quantum computing gate?",
    options: [
      { id: "q5a", text: "Hadamard gate", isCorrect: false },
      { id: "q5b", text: "CNOT gate", isCorrect: false },
      { id: "q5c", text: "MAYBE gate", isCorrect: true },
      { id: "q5d", text: "Pauli-X gate", isCorrect: false }
    ],
    explanation: "There is no 'MAYBE gate' in quantum computing. Common gates include Hadamard, CNOT, Pauli gates (X, Y, Z), and others.",
    category: "quantum"
  },
  {
    id: 6,
    text: "Quantum computers excel at solving which type of problem?",
    options: [
      { id: "q6a", text: "Everyday arithmetic calculations", isCorrect: false },
      { id: "q6b", text: "Basic word processing", isCorrect: false },
      { id: "q6c", text: "Factoring large numbers", isCorrect: true },
      { id: "q6d", text: "Simple database queries", isCorrect: false }
    ],
    explanation: "Quantum computers excel at specific tasks like factoring large numbers (using Shor's algorithm), which is particularly significant for cryptography.",
    category: "quantum"
  },
  {
    id: 7,
    text: "What is a significant challenge in building quantum computers?",
    options: [
      { id: "q7a", text: "Creating enough qubits", isCorrect: false },
      { id: "q7b", text: "Maintaining quantum coherence", isCorrect: true },
      { id: "q7c", text: "Finding enough programmers", isCorrect: false },
      { id: "q7d", text: "Generating sufficient power", isCorrect: false }
    ],
    explanation: "Maintaining quantum coherence (preventing qubits from losing their quantum properties through interaction with the environment) is one of the biggest challenges in quantum computing.",
    category: "quantum"
  },
  {
    id: 8,
    text: "Which company announced achieving 'quantum supremacy' in 2019?",
    options: [
      { id: "q8a", text: "IBM", isCorrect: false },
      { id: "q8b", text: "Microsoft", isCorrect: false },
      { id: "q8c", text: "Google", isCorrect: true },
      { id: "q8d", text: "Intel", isCorrect: false }
    ],
    explanation: "Google announced in 2019 that it had achieved 'quantum supremacy' with its Sycamore processor, claiming it performed a specific calculation that would be practically impossible on a classical computer.",
    category: "quantum"
  },
  {
    id: 9,
    text: "What is a quantum algorithm that could potentially break RSA encryption?",
    options: [
      { id: "q9a", text: "Grover's algorithm", isCorrect: false },
      { id: "q9b", text: "Shor's algorithm", isCorrect: true },
      { id: "q9c", text: "Deutsch-Jozsa algorithm", isCorrect: false },
      { id: "q9d", text: "Quantum Fourier Transform", isCorrect: false }
    ],
    explanation: "Shor's algorithm is a quantum algorithm that can factor large integers exponentially faster than the best-known classical algorithm, which could potentially break RSA encryption.",
    category: "quantum"
  },
  {
    id: 10,
    text: "What is quantum error correction?",
    options: [
      { id: "q10a", text: "A method to delete incorrect quantum programs", isCorrect: false },
      { id: "q10b", text: "A technique to prevent hardware failures", isCorrect: false },
      { id: "q10c", text: "A way to protect quantum information from decoherence", isCorrect: true },
      { id: "q10d", text: "The process of restarting a quantum computer", isCorrect: false }
    ],
    explanation: "Quantum error correction is a set of techniques used to protect quantum information from errors due to decoherence and other quantum noise.",
    category: "quantum"
  },
  {
    id: 11,
    text: "What temperature do many quantum computers need to operate at?",
    options: [
      { id: "q11a", text: "Room temperature (around 20°C)", isCorrect: false },
      { id: "q11b", text: "Refrigerator temperature (around 4°C)", isCorrect: false },
      { id: "q11c", text: "Liquid nitrogen temperature (around -196°C)", isCorrect: false },
      { id: "q11d", text: "Near absolute zero (around -273°C)", isCorrect: true }
    ],
    explanation: "Many quantum computers operate at temperatures near absolute zero (about 15 millikelvin or -273.135°C) to minimize thermal interference with the quantum states.",
    category: "quantum"
  },
  {
    id: 12,
    text: "Which quantum phenomenon is Einstein famously referred to as 'spooky action at a distance'?",
    options: [
      { id: "q12a", text: "Superposition", isCorrect: false },
      { id: "q12b", text: "Wave-particle duality", isCorrect: false },
      { id: "q12c", text: "Quantum entanglement", isCorrect: true },
      { id: "q12d", text: "Quantum tunneling", isCorrect: false }
    ],
    explanation: "Albert Einstein referred to quantum entanglement as 'spooky action at a distance' because it seemed to violate the principle that information cannot travel faster than light.",
    category: "quantum"
  },
  {
    id: 13,
    text: "What is quantum teleportation?",
    options: [
      { id: "q13a", text: "Moving physical objects using quantum phenomena", isCorrect: false },
      { id: "q13b", text: "Transferring quantum information between entangled particles", isCorrect: true },
      { id: "q13c", text: "Communicating faster than light using quantum effects", isCorrect: false },
      { id: "q13d", text: "Moving quantum computers between locations", isCorrect: false }
    ],
    explanation: "Quantum teleportation is a process by which quantum information can be transmitted from one location to another, with the help of entanglement and classical communication.",
    category: "quantum"
  },
  {
    id: 14,
    text: "In quantum computing, what is a qubit's state before measurement?",
    options: [
      { id: "q14a", text: "Always 0", isCorrect: false },
      { id: "q14b", text: "Always 1", isCorrect: false },
      { id: "q14c", text: "Either 0 or 1 randomly", isCorrect: false },
      { id: "q14d", text: "A probability distribution over 0 and 1", isCorrect: true }
    ],
    explanation: "Before measurement, a qubit exists in a superposition state represented by a probability distribution over the possible outcomes of 0 and 1.",
    category: "quantum"
  },
  {
    id: 15,
    text: "Which representation is used to visualize single-qubit states?",
    options: [
      { id: "q15a", text: "Truth table", isCorrect: false },
      { id: "q15b", text: "Bloch sphere", isCorrect: true },
      { id: "q15c", text: "Venn diagram", isCorrect: false },
      { id: "q15d", text: "Binary tree", isCorrect: false }
    ],
    explanation: "The Bloch sphere is a geometrical representation of the pure state space of a two-level quantum mechanical system (qubit).",
    category: "quantum"
  }
];