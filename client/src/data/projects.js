export const projects = [
  {
    id: 'aerocrew-flow',
    no: '01',
    title: 'AeroCrew Flow',
    track: 'Cybersecurity',
    tagline: 'Crew planning and day-of-operations for an airline',
    client: 'Final-year project with PIA',
    platform: 'Laravel web app · Flutter mobile app',
    isPrivate: true,
    method:
      'Laravel web app and Flutter mobile app covering roster building, leave approval, chat, notifications, MFA, and role-based access. Led the team over three semesters.',
    result:
      'Crew management system built with PIA as a final-year project. I led the team.',
    description:
      'A crew planning and day-of-operations system for an airline, with a Laravel web app and a Flutter mobile app. It covers roster building, leave approval, chat, notifications, MFA, and role-based access. Final-year project with PIA; I led the team.',
    tags: ['Laravel', 'Flutter', 'MySQL', 'Sockets', 'RBAC', 'MFA'],
    featured: true,
  },
  {
    id: 'logmonitor-pro',
    no: '02',
    title: 'LogMonitor Pro',
    track: 'Data Systems',
    tagline: 'Collect, store, and alert on unusual log activity',
    client: 'Parallel and Distributed Programming course',
    platform: 'Python / FastAPI',
    isPrivate: false,
    method:
      'Agents send logs through Redis to a server with parallel consumers that store them, raise alerts, flag CPU and memory spikes with z-scores, and show a live dashboard.',
    result:
      'Course project using simulated data: an end-to-end log pipeline with statistical anomaly alerts.',
    description:
      'A simulated log monitoring platform. Agents send logs through Redis to a server with parallel consumers that store them, raise alerts, flag CPU and memory spikes with z-scores, and show a live dashboard. Built for a Parallel and Distributed Programming course, using simulated data.',
    tags: ['Python', 'FastAPI', 'Redis', 'SQLite', 'WebSocket', 'Docker'],
    featured: true,
  },
  {
    id: 'deepfake-detector',
    no: '03',
    title: 'Deepfake Video Detector',
    track: 'AI / ML',
    tagline: 'EfficientNet-B2 on eight frames per video',
    client: 'Team project',
    platform: 'PyTorch',
    isPrivate: false,
    method:
      'Team project using EfficientNet-B2 on 8 frames per video. Tested on a 2,667-video subset of the DFD dataset.',
    result:
      '88% accuracy and 0.81 AUC. It does well on fake videos but poorly on real ones, due to class imbalance.',
    description:
      'A team project using EfficientNet-B2 on 8 frames per video. Tested on a 2,667-video subset of the DFD dataset. Outcome: 88% accuracy and 0.81 AUC. It does well on fake videos but poorly on real ones, due to class imbalance.',
    tags: ['PyTorch', 'EfficientNet', 'OpenCV', 'scikit-learn'],
    featured: true,
  },
  {
    id: 'plant-disease',
    no: '04',
    title: 'Plant Disease Recognition',
    track: 'AI / ML',
    tagline: '38-class leaf disease classifier',
    client: 'Computer vision',
    platform: 'TensorFlow / Streamlit',
    isPrivate: false,
    method: 'CNN classifier with a Streamlit app for image upload and prediction.',
    result: 'Classifies leaf images into 38 crop and disease classes.',
    description:
      'A CNN that classifies leaf images into 38 crop and disease classes, with a Streamlit app for upload and prediction.',
    tags: ['TensorFlow', 'Keras', 'Streamlit'],
    featured: false,
  },
  {
    id: 'mini-compiler',
    no: '05',
    title: 'Mini Compiler',
    track: 'Systems',
    tagline: 'Lexer through three-address code',
    client: 'Compiler Construction',
    platform: 'C++ / CMake',
    isPrivate: false,
    method:
      'C++ compiler front end with a lexer, LL(1) predictive parser, symbol table, type checking, and three-address code generation.',
    result: 'A complete compiler front end for a small language.',
    description:
      'A C++ compiler front end with a lexer, LL(1) predictive parser, symbol table, type checking, and three-address code generation.',
    tags: ['C++', 'CMake'],
    featured: false,
  },
  {
    id: 'ai-chess',
    no: '06',
    title: 'Chess AI',
    track: 'AI / ML',
    tagline: 'Minimax with alpha-beta pruning',
    client: 'Game AI',
    platform: 'Python / Pygame',
    isPrivate: false,
    method:
      'Playable chess against a minimax opponent with alpha-beta pruning and move ordering.',
    result: 'A beginner-level engine without castling or en passant.',
    description:
      'A playable chess game against a minimax opponent with alpha-beta pruning and move ordering. A beginner-level engine without castling or en passant.',
    tags: ['Python', 'Pygame'],
    featured: false,
  },
  {
    id: 'ai-ludo',
    no: '07',
    title: 'Ludo with Q-learning',
    track: 'AI / ML',
    tagline: 'Epsilon-greedy policy that persists between games',
    client: 'Reinforcement learning',
    platform: 'Python / Pygame',
    isPrivate: false,
    method:
      'Q-learning with epsilon-greedy exploration; the agent saves what it learns between games.',
    result: 'A Ludo AI that learns which piece to move through self-play.',
    description:
      'A Ludo game where the AI learns which piece to move through Q-learning with epsilon-greedy exploration, and saves what it learns between games.',
    tags: ['Python', 'Pygame', 'NumPy'],
    featured: false,
  },
]
