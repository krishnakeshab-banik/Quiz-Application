import { Question } from '../types';

export const webdevQuestions: Question[] = [
  {
    id: 101,
    text: "What does HTML stand for?",
    options: [
      { id: "w1a", text: "Hyper Text Markup Language", isCorrect: true },
      { id: "w1b", text: "High Tech Multi Language", isCorrect: false },
      { id: "w1c", text: "Hyper Transfer Markup Language", isCorrect: false },
      { id: "w1d", text: "Home Tool Markup Language", isCorrect: false }
    ],
    explanation: "HTML (Hyper Text Markup Language) is the standard markup language for creating web pages and web applications.",
    category: "webdev"
  },
  {
    id: 102,
    text: "Which CSS property is used to change the text color of an element?",
    options: [
      { id: "w2a", text: "text-color", isCorrect: false },
      { id: "w2b", text: "font-color", isCorrect: false },
      { id: "w2c", text: "color", isCorrect: true },
      { id: "w2d", text: "text-style", isCorrect: false }
    ],
    explanation: "The 'color' property in CSS is used to set the color of text content in an element.",
    category: "webdev"
  },
  {
    id: 103,
    text: "Which JavaScript method is used to add an element at the end of an array?",
    options: [
      { id: "w3a", text: "push()", isCorrect: true },
      { id: "w3b", text: "append()", isCorrect: false },
      { id: "w3c", text: "addToEnd()", isCorrect: false },
      { id: "w3d", text: "concat()", isCorrect: false }
    ],
    explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
    category: "webdev"
  },
  {
    id: 104,
    text: "What is the purpose of the 'viewport' meta tag?",
    options: [
      { id: "w4a", text: "To track user behavior", isCorrect: false },
      { id: "w4b", text: "To control the page's layout on different devices", isCorrect: true },
      { id: "w4c", text: "To define keywords for search engines", isCorrect: false },
      { id: "w4d", text: "To hide content from certain browsers", isCorrect: false }
    ],
    explanation: "The viewport meta tag helps control the page's width and scaling on different devices, which is crucial for responsive web design.",
    category: "webdev"
  },
  {
    id: 105,
    text: "Which of the following is NOT a JavaScript framework?",
    options: [
      { id: "w5a", text: "Angular", isCorrect: false },
      { id: "w5b", text: "Vue", isCorrect: false },
      { id: "w5c", text: "React", isCorrect: false },
      { id: "w5d", text: "Kotlin", isCorrect: true }
    ],
    explanation: "Kotlin is primarily a programming language for Android development, not a JavaScript framework. Angular, Vue, and React are all JavaScript frameworks or libraries.",
    category: "webdev"
  },
  {
    id: 106,
    text: "Which HTTP status code indicates a successful response?",
    options: [
      { id: "w6a", text: "200", isCorrect: true },
      { id: "w6b", text: "404", isCorrect: false },
      { id: "w6c", text: "500", isCorrect: false },
      { id: "w6d", text: "302", isCorrect: false }
    ],
    explanation: "HTTP status code 200 (OK) indicates that the request has succeeded and the server has returned the expected content.",
    category: "webdev"
  },
  {
    id: 107,
    text: "What is CORS in web development?",
    options: [
      { id: "w7a", text: "A programming language", isCorrect: false },
      { id: "w7b", text: "A design pattern", isCorrect: false },
      { id: "w7c", text: "Cross-Origin Resource Sharing", isCorrect: true },
      { id: "w7d", text: "Client-Origin Request System", isCorrect: false }
    ],
    explanation: "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the original page.",
    category: "webdev"
  },
  {
    id: 108,
    text: "Which CSS property is used to create space between elements?",
    options: [
      { id: "w8a", text: "space", isCorrect: false },
      { id: "w8b", text: "margin", isCorrect: true },
      { id: "w8c", text: "padding", isCorrect: false },
      { id: "w8d", text: "gap", isCorrect: false }
    ],
    explanation: "The margin property in CSS creates space around elements, outside of any defined borders. Padding creates space inside the element within its border, while gap is used in grid and flex layouts.",
    category: "webdev"
  },
  {
    id: 109,
    text: "What does API stand for in web development?",
    options: [
      { id: "w9a", text: "Application Programming Interface", isCorrect: true },
      { id: "w9b", text: "Advanced Programming Integration", isCorrect: false },
      { id: "w9c", text: "Automated Program Interaction", isCorrect: false },
      { id: "w9d", text: "Application Process Integration", isCorrect: false }
    ],
    explanation: "API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.",
    category: "webdev"
  },
  {
    id: 110,
    text: "Which tool is commonly used for version control in web development?",
    options: [
      { id: "w10a", text: "Docker", isCorrect: false },
      { id: "w10b", text: "Kubernetes", isCorrect: false },
      { id: "w10c", text: "Git", isCorrect: true },
      { id: "w10d", text: "Jenkins", isCorrect: false }
    ],
    explanation: "Git is a distributed version control system widely used in web development to track changes in source code during software development.",
    category: "webdev"
  },
  {
    id: 111,
    text: "What is the purpose of a CSS preprocessor like SASS or LESS?",
    options: [
      { id: "w11a", text: "To compress CSS files for faster loading", isCorrect: false },
      { id: "w11b", text: "To add programming features to CSS like variables and functions", isCorrect: true },
      { id: "w11c", text: "To automatically fix browser compatibility issues", isCorrect: false },
      { id: "w11d", text: "To convert JavaScript to CSS", isCorrect: false }
    ],
    explanation: "CSS preprocessors like SASS or LESS extend CSS with features like variables, nesting, mixins, and functions, making stylesheets more maintainable and easier to write.",
    category: "webdev"
  },
  {
    id: 112,
    text: "What is the role of a CDN in web development?",
    options: [
      { id: "w12a", text: "To manage databases efficiently", isCorrect: false },
      { id: "w12b", text: "To serve website content from servers closer to the user", isCorrect: true },
      { id: "w12c", text: "To compress HTML, CSS, and JavaScript files", isCorrect: false },
      { id: "w12d", text: "To provide hosting for web applications", isCorrect: false }
    ],
    explanation: "A Content Delivery Network (CDN) distributes website content across multiple servers around the world, allowing users to access the content from servers geographically closer to them, reducing load times.",
    category: "webdev"
  },
  {
    id: 113,
    text: "Which of the following is a client-side storage option in web browsers?",
    options: [
      { id: "w13a", text: "MongoDB", isCorrect: false },
      { id: "w13b", text: "PostgreSQL", isCorrect: false },
      { id: "w13c", text: "Local Storage", isCorrect: true },
      { id: "w13d", text: "Firebase", isCorrect: false }
    ],
    explanation: "Local Storage is a web browser API that allows websites to store data locally within a user's browser with no expiration date.",
    category: "webdev"
  },
  {
    id: 114,
    text: "What is the purpose of WebSockets?",
    options: [
      { id: "w14a", text: "To create responsive layouts", isCorrect: false },
      { id: "w14b", text: "To establish a persistent connection between client and server", isCorrect: true },
      { id: "w14c", text: "To optimize images for the web", isCorrect: false },
      { id: "w14d", text: "To validate form inputs", isCorrect: false }
    ],
    explanation: "WebSockets provide a way to establish a persistent, full-duplex communication channel between a web browser and a server, enabling real-time data exchange without repeated HTTP requests.",
    category: "webdev"
  },
  {
    id: 115,
    text: "What is the main purpose of Docker in web development?",
    options: [
      { id: "w15a", text: "To write cross-platform code", isCorrect: false },
      { id: "w15b", text: "To containerize applications for consistent deployment", isCorrect: true },
      { id: "w15c", text: "To optimize database queries", isCorrect: false },
      { id: "w15d", text: "To test UI components", isCorrect: false }
    ],
    explanation: "Docker is a platform that uses containerization to package applications and their dependencies together, ensuring they work consistently across different environments.",
    category: "webdev"
  }
];