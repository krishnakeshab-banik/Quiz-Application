import { Question } from '../types';

export const medicalQuestions: Question[] = [
  {
    id: 401,
    text: "What is the largest organ in the human body?",
    options: [
      { id: "med1a", text: "Heart", isCorrect: false },
      { id: "med1b", text: "Liver", isCorrect: false },
      { id: "med1c", text: "Skin", isCorrect: true },
      { id: "med1d", text: "Brain", isCorrect: false }
    ],
    explanation: "The skin is the largest organ in the human body, covering an area of about 2 square meters in adults and accounting for about 15% of total body weight.",
    category: "medical"
  },
  {
    id: 402,
    text: "Which of the following is NOT a function of the liver?",
    options: [
      { id: "med2a", text: "Detoxification of blood", isCorrect: false },
      { id: "med2b", text: "Production of bile", isCorrect: false },
      { id: "med2c", text: "Storage of glycogen", isCorrect: false },
      { id: "med2d", text: "Production of insulin", isCorrect: true }
    ],
    explanation: "The liver performs many vital functions including detoxification, protein synthesis, bile production, and glycogen storage, but insulin is produced by the beta cells in the pancreas, not the liver.",
    category: "medical"
  },
  {
    id: 403,
    text: "What is the normal range for human body temperature?",
    options: [
      { id: "med3a", text: "35.5-37.5°C (96-99.5°F)", isCorrect: true },
      { id: "med3b", text: "33-35°C (91.4-95°F)", isCorrect: false },
      { id: "med3c", text: "38-40°C (100.4-104°F)", isCorrect: false },
      { id: "med3d", text: "40-42°C (104-107.6°F)", isCorrect: false }
    ],
    explanation: "The normal human body temperature range is typically between 35.5-37.5°C (96-99.5°F), with 37°C (98.6°F) often cited as the average. However, normal temperature can vary slightly among individuals and throughout the day.",
    category: "medical"
  },
  {
    id: 404,
    text: "What is the main function of red blood cells?",
    options: [
      { id: "med4a", text: "Fighting infection", isCorrect: false },
      { id: "med4b", text: "Blood clotting", isCorrect: false },
      { id: "med4c", text: "Transporting oxygen", isCorrect: true },
      { id: "med4d", text: "Producing antibodies", isCorrect: false }
    ],
    explanation: "Red blood cells (erythrocytes) contain hemoglobin, which binds to oxygen in the lungs and transports it throughout the body to tissues and organs. White blood cells fight infection, platelets assist with blood clotting, and antibodies are produced by specialized white blood cells called B lymphocytes.",
    category: "medical"
  },
  {
    id: 405,
    text: "Which vitamin is produced when skin is exposed to sunlight?",
    options: [
      { id: "med5a", text: "Vitamin A", isCorrect: false },
      { id: "med5b", text: "Vitamin C", isCorrect: false },
      { id: "med5c", text: "Vitamin D", isCorrect: true },
      { id: "med5d", text: "Vitamin E", isCorrect: false }
    ],
    explanation: "Vitamin D is produced in the skin when it's exposed to ultraviolet B (UVB) rays from sunlight. The UVB radiation converts a cholesterol derivative in the skin into vitamin D3, which is then further metabolized by the liver and kidneys.",
    category: "medical"
  },
  {
    id: 406,
    text: "What is the primary function of antibiotics?",
    options: [
      { id: "med6a", text: "To kill viruses", isCorrect: false },
      { id: "med6b", text: "To kill or inhibit the growth of bacteria", isCorrect: true },
      { id: "med6c", text: "To reduce inflammation", isCorrect: false },
      { id: "med6d", text: "To reduce fever", isCorrect: false }
    ],
    explanation: "Antibiotics work by killing bacteria or preventing their reproduction. They are ineffective against viruses. Overuse of antibiotics can lead to antibiotic resistance, a major public health concern.",
    category: "medical"
  },
  {
    id: 407,
    text: "What is the function of the pancreas in digestion?",
    options: [
      { id: "med7a", text: "Production of bile", isCorrect: false },
      { id: "med7b", text: "Storage of waste products", isCorrect: false },
      { id: "med7c", text: "Absorption of nutrients", isCorrect: false },
      { id: "med7d", text: "Secretion of digestive enzymes", isCorrect: true }
    ],
    explanation: "The pancreas produces digestive enzymes that break down carbohydrates, proteins, and fats in food. It also has an endocrine function, producing hormones like insulin and glucagon that regulate blood sugar levels.",
    category: "medical"
  },
  {
    id: 408,
    text: "What is the normal resting heart rate for adults?",
    options: [
      { id: "med8a", text: "40-50 beats per minute", isCorrect: false },
      { id: "med8b", text: "60-100 beats per minute", isCorrect: true },
      { id: "med8c", text: "100-140 beats per minute", isCorrect: false },
      { id: "med8d", text: "140-180 beats per minute", isCorrect: false }
    ],
    explanation: "The normal resting heart rate for adults ranges from 60 to 100 beats per minute. Athletes and those with high cardiovascular fitness may have lower resting heart rates, sometimes below 60 bpm (bradycardia).",
    category: "medical"
  },
  {
    id: 409,
    text: "Which of the following is NOT a component of the Central Nervous System (CNS)?",
    options: [
      { id: "med9a", text: "Brain", isCorrect: false },
      { id: "med9b", text: "Spinal cord", isCorrect: false },
      { id: "med9c", text: "Optic nerve", isCorrect: false },
      { id: "med9d", text: "Sciatic nerve", isCorrect: true }
    ],
    explanation: "The Central Nervous System (CNS) consists of the brain and spinal cord. The optic nerve is considered part of the CNS as an extension of the brain. The sciatic nerve is part of the Peripheral Nervous System (PNS).",
    category: "medical"
  },
  {
    id: 410,
    text: "What is hypertension?",
    options: [
      { id: "med10a", text: "Low blood pressure", isCorrect: false },
      { id: "med10b", text: "High blood pressure", isCorrect: true },
      { id: "med10c", text: "Irregular heartbeat", isCorrect: false },
      { id: "med10d", text: "Rapid breathing", isCorrect: false }
    ],
    explanation: "Hypertension, or high blood pressure, is a condition where the force of blood against artery walls is consistently too high. It's a major risk factor for heart disease, stroke, and kidney disease. Blood pressure of 130/80 mm Hg or higher is considered hypertension.",
    category: "medical"
  },
  {
    id: 411,
    text: "What is the main function of the kidneys?",
    options: [
      { id: "med11a", text: "To produce insulin", isCorrect: false },
      { id: "med11b", text: "To filter blood and remove waste", isCorrect: true },
      { id: "med11c", text: "To produce red blood cells", isCorrect: false },
      { id: "med11d", text: "To digest food", isCorrect: false }
    ],
    explanation: "The kidneys filter blood to remove waste products and excess fluid, which are then excreted as urine. They also regulate electrolyte levels, acid-base balance, and blood pressure, and activate vitamin D for calcium absorption.",
    category: "medical"
  },
  {
    id: 412,
    text: "Which of the following is a function of the cerebellum?",
    options: [
      { id: "med12a", text: "Regulating body temperature", isCorrect: false },
      { id: "med12b", text: "Controlling voluntary movement and coordination", isCorrect: true },
      { id: "med12c", text: "Processing visual information", isCorrect: false },
      { id: "med12d", text: "Managing hunger and thirst", isCorrect: false }
    ],
    explanation: "The cerebellum is primarily responsible for coordinating voluntary movements, maintaining posture and balance, and motor learning. Damage to the cerebellum can result in ataxia, a loss of coordination and precision of movement.",
    category: "medical"
  },
  {
    id: 413,
    text: "What is the function of insulin in the body?",
    options: [
      { id: "med13a", text: "To increase blood glucose levels", isCorrect: false },
      { id: "med13b", text: "To decrease blood glucose levels", isCorrect: true },
      { id: "med13c", text: "To increase blood pressure", isCorrect: false },
      { id: "med13d", text: "To decrease blood pressure", isCorrect: false }
    ],
    explanation: "Insulin is a hormone produced by the pancreas that allows cells to take in glucose from the blood, thereby decreasing blood glucose levels. Insufficient insulin production or insulin resistance can lead to diabetes mellitus.",
    category: "medical"
  },
  {
    id: 414,
    text: "Which of the following is NOT a symptom commonly associated with stroke?",
    options: [
      { id: "med14a", text: "Sudden numbness or weakness, especially on one side of the body", isCorrect: false },
      { id: "med14b", text: "Sudden confusion or trouble speaking", isCorrect: false },
      { id: "med14c", text: "Sudden chest pain radiating to the left arm", isCorrect: true },
      { id: "med14d", text: "Sudden trouble seeing or walking", isCorrect: false }
    ],
    explanation: "Sudden chest pain radiating to the left arm is typically a symptom of heart attack, not stroke. Common stroke symptoms include sudden numbness/weakness (especially on one side), confusion, trouble speaking or understanding, vision problems, dizziness, and severe headache.",
    category: "medical"
  },
  {
    id: 415,
    text: "What is the primary cause of Alzheimer's disease?",
    options: [
      { id: "med15a", text: "Bacterial infection", isCorrect: false },
      { id: "med15b", text: "Vitamin deficiency", isCorrect: false },
      { id: "med15c", text: "Accumulation of abnormal proteins in the brain", isCorrect: true },
      { id: "med15d", text: "Excessive alcohol consumption", isCorrect: false }
    ],
    explanation: "Alzheimer's disease is characterized by the accumulation of abnormal protein deposits in the brain: beta-amyloid plaques outside neurons and tau tangles inside neurons. These disruptions, along with loss of connections between neurons, contribute to brain cell death and symptoms of dementia.",
    category: "medical"
  }
];