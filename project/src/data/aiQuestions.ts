import { Question } from '../types';

export const aiQuestions: Question[] = [
  {
    id: 201,
    text: "What is machine learning?",
    options: [
      { id: "a1a", text: "The study of mechanical systems that can learn", isCorrect: false },
      { id: "a1b", text: "A subset of AI that allows computers to learn from data without explicit programming", isCorrect: true },
      { id: "a1c", text: "Hardware that mimics human brain functionality", isCorrect: false },
      { id: "a1d", text: "The process of teaching robots to perform physical tasks", isCorrect: false }
    ],
    explanation: "Machine learning is a subset of artificial intelligence that focuses on building systems that can learn from and make decisions based on data, without being explicitly programmed to perform specific tasks.",
    category: "ai"
  },
  {
    id: 202,
    text: "What is a neural network?",
    options: [
      { id: "a2a", text: "A computer network designed for AI applications", isCorrect: false },
      { id: "a2b", text: "A programming language for AI", isCorrect: false },
      { id: "a2c", text: "A computing system inspired by biological neural networks", isCorrect: true },
      { id: "a2d", text: "A database structure optimized for machine learning", isCorrect: false }
    ],
    explanation: "A neural network is a computing system inspired by the structure and function of the human brain's neural networks, consisting of interconnected nodes or 'neurons' that process information.",
    category: "ai"
  },
  {
    id: 203,
    text: "What is the difference between supervised and unsupervised learning?",
    options: [
      { id: "a3a", text: "Supervised learning requires human monitoring; unsupervised doesn't", isCorrect: false },
      { id: "a3b", text: "Supervised learning uses labeled data; unsupervised learning uses unlabeled data", isCorrect: true },
      { id: "a3c", text: "Supervised learning is faster; unsupervised learning is more accurate", isCorrect: false },
      { id: "a3d", text: "Supervised learning works with images; unsupervised works with text", isCorrect: false }
    ],
    explanation: "In supervised learning, the algorithm is trained on labeled data (input-output pairs), while unsupervised learning deals with unlabeled data and finds patterns or structures without specific guidance.",
    category: "ai"
  },
  {
    id: 204,
    text: "What is deep learning?",
    options: [
      { id: "a4a", text: "Learning that occurs at the deepest levels of the human brain", isCorrect: false },
      { id: "a4b", text: "A type of machine learning using neural networks with many layers", isCorrect: true },
      { id: "a4c", text: "Learning that requires deep concentration", isCorrect: false },
      { id: "a4d", text: "A theoretical approach to AI that hasn't been implemented yet", isCorrect: false }
    ],
    explanation: "Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to progressively extract higher-level features from raw input.",
    category: "ai"
  },
  {
    id: 205,
    text: "What does NLP stand for in AI?",
    options: [
      { id: "a5a", text: "Neural Learning Process", isCorrect: false },
      { id: "a5b", text: "Natural Language Programming", isCorrect: false },
      { id: "a5c", text: "Natural Language Processing", isCorrect: true },
      { id: "a5d", text: "Neuro-Linguistic Programming", isCorrect: false }
    ],
    explanation: "NLP stands for Natural Language Processing, a field of AI focused on enabling computers to understand, interpret, and generate human language in a valuable way.",
    category: "ai"
  },
  {
    id: 206,
    text: "What is a transformer in the context of AI?",
    options: [
      { id: "a6a", text: "Hardware that transforms electrical signals for AI systems", isCorrect: false },
      { id: "a6b", text: "A neural network architecture based on self-attention mechanisms", isCorrect: true },
      { id: "a6c", text: "Software that transforms data from one format to another", isCorrect: false },
      { id: "a6d", text: "A robot that can physically transform its shape", isCorrect: false }
    ],
    explanation: "In AI, a transformer is a type of neural network architecture that relies on self-attention mechanisms to process sequential data, particularly effective for NLP tasks. Models like GPT and BERT are based on transformer architectures.",
    category: "ai"
  },
  {
    id: 207,
    text: "What is reinforcement learning?",
    options: [
      { id: "a7a", text: "Learning through positive feedback in social situations", isCorrect: false },
      { id: "a7b", text: "A type of learning where an agent learns by interacting with an environment to maximize rewards", isCorrect: true },
      { id: "a7c", text: "Learning by repeatedly practicing the same task", isCorrect: false },
      { id: "a7d", text: "Learning through punishment avoidance", isCorrect: false }
    ],
    explanation: "Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize some notion of cumulative reward.",
    category: "ai"
  },
  {
    id: 208,
    text: "What is the Turing Test?",
    options: [
      { id: "a8a", text: "A test to determine if a machine can think like a human", isCorrect: true },
      { id: "a8b", text: "A benchmark for measuring computational performance", isCorrect: false },
      { id: "a8c", text: "A quality assurance test for AI systems", isCorrect: false },
      { id: "a8d", text: "A test to verify encryption strength", isCorrect: false }
    ],
    explanation: "The Turing Test, proposed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
    category: "ai"
  },
  {
    id: 209,
    text: "What is bias in machine learning?",
    options: [
      { id: "a9a", text: "A technical term for the accuracy of an algorithm", isCorrect: false },
      { id: "a9b", text: "The tendency of ML models to systematically favor certain outcomes", isCorrect: true },
      { id: "a9c", text: "A programming technique to improve AI performance", isCorrect: false },
      { id: "a9d", text: "The angle at which data enters the system", isCorrect: false }
    ],
    explanation: "In machine learning, bias refers to systematic errors in the model that lead it to consistently favor certain outcomes over others, often reflecting biases in the training data or algorithm design.",
    category: "ai"
  },
  {
    id: 210,
    text: "What is a Generative Adversarial Network (GAN)?",
    options: [
      { id: "a10a", text: "A network that generates adversarial examples to test security", isCorrect: false },
      { id: "a10b", text: "A system where two neural networks compete to improve each other's performance", isCorrect: true },
      { id: "a10c", text: "A network designed to find vulnerabilities in other AI systems", isCorrect: false },
      { id: "a10d", text: "A collaborative network where multiple AIs work together", isCorrect: false }
    ],
    explanation: "A Generative Adversarial Network (GAN) consists of two neural networks—a generator and a discriminator—that contest with each other. The generator creates samples to try to fool the discriminator, while the discriminator tries to distinguish between real and generated samples.",
    category: "ai"
  },
  {
    id: 211,
    text: "What is the purpose of an embedding in machine learning?",
    options: [
      { id: "a11a", text: "To physically embed AI chips into devices", isCorrect: false },
      { id: "a11b", text: "To convert high-dimensional data into lower-dimensional space", isCorrect: true },
      { id: "a11c", text: "To embed code within other code for AI applications", isCorrect: false },
      { id: "a11d", text: "To hide information within AI models", isCorrect: false }
    ],
    explanation: "In machine learning, an embedding is a technique that transforms high-dimensional data (like text or images) into a lower-dimensional vector space while preserving meaningful relationships, making it easier for models to process.",
    category: "ai"
  },
  {
    id: 212,
    text: "What is transfer learning?",
    options: [
      { id: "a12a", text: "The process of moving AI models between different computers", isCorrect: false },
      { id: "a12b", text: "A learning technique where knowledge gained from one problem is applied to a different but related problem", isCorrect: true },
      { id: "a12c", text: "Transferring human knowledge directly to AI systems", isCorrect: false },
      { id: "a12d", text: "The transfer of data between different machine learning frameworks", isCorrect: false }
    ],
    explanation: "Transfer learning is a machine learning technique where a model developed for one task is reused as the starting point for a model on a second task, reducing training time and improving performance when limited data is available.",
    category: "ai"
  },
  {
    id: 213,
    text: "What is a confusion matrix in machine learning?",
    options: [
      { id: "a13a", text: "A visualization of when an AI system gets confused", isCorrect: false },
      { id: "a13b", text: "A table used to evaluate classification model performance", isCorrect: true },
      { id: "a13c", text: "A mathematical formula for calculating AI uncertainty", isCorrect: false },
      { id: "a13d", text: "A test designed to confuse AI systems", isCorrect: false }
    ],
    explanation: "A confusion matrix is a table used to describe the performance of a classification model by showing the counts of true positive, false positive, true negative, and false negative predictions.",
    category: "ai"
  },
  {
    id: 214,
    text: "What is computer vision?",
    options: [
      { id: "a14a", text: "The ability of computers to use monitors and displays", isCorrect: false },
      { id: "a14b", text: "A field of AI that enables computers to derive meaningful information from visual inputs", isCorrect: true },
      { id: "a14c", text: "A type of screen technology used in AI systems", isCorrect: false },
      { id: "a14d", text: "The visual interface design of AI applications", isCorrect: false }
    ],
    explanation: "Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world, enabling machines to identify and process objects in images and videos similarly to how humans do.",
    category: "ai"
  },
  {
    id: 215,
    text: "What are foundation models in AI?",
    options: [
      { id: "a15a", text: "Basic mathematical models that form the foundation of all AI", isCorrect: false },
      { id: "a15b", text: "The physical infrastructure that supports AI systems", isCorrect: false },
      { id: "a15c", text: "Large-scale models trained on broad data that can be adapted to many tasks", isCorrect: true },
      { id: "a15d", text: "Models that specifically focus on fundamental AI research", isCorrect: false }
    ],
    explanation: "Foundation models are large-scale AI models (like GPT, BERT, or DALL-E) trained on vast amounts of data that can be adapted or fine-tuned for a wide range of specific applications, rather than being designed for a single task.",
    category: "ai"
  }
];