export const personalProjects = [
  {
    slug: 'clock-app',
    title: 'Clock App',
    description: 'Intelligent Clock app with Alarm, Timer, and Stopwatch. Time-of-day gradient and glass-style UI.',
    tags: ['Swift', 'JavaScript', 'HTML', 'CSS'],
    image: '/clock-app.png',
    category: 'personal',
    repoUrl: 'https://github.com/Tobechukwu-Ikenwe/ClockApp',
    summary: [
      'Alarm — Set one alarm time and turn it on or off. The app asks for notification permission on first use and notifies you at the set time (daily).',
      'Timer — A circular countdown: choose minutes (0–120) and seconds (0–59), tap Start, then Pause or Reset. The ring shows how much time is left.',
      'Stopwatch — A lap timer with milliseconds. Tap Start to run, Lap to record laps without stopping, Stop to stop. Elapsed time is based on the system clock so it stays accurate.',
      'Time gradient — The background updates by time of day: Night (10PM–5AM) is black to deep navy; Sunrise (6AM–9AM) is soft pink to light blue; Day (10AM–5PM) is sky blue to white; Dusk (6PM–9PM) is twilight purple to orange. Transitions are smooth (about 2 seconds).',
      'Current time — Shown at the top center in every tab (bold, monospaced).',
      'Glass-style UI — Buttons and panels use a semi-transparent, blurred look so the gradient shows through.',
    ],
  },
  {
    slug: 'gpr-cpu-emulator',
    title: 'GPR-CPU (16-bit GPR CPU Emulator)',
    description: 'A fully functional, educational 16-bit RISC-style CPU emulator in C++ with 8 general-purpose registers, 64KB memory, and an explicit Fetch–Decode–Execute (FDE) cycle.',
    tags: ['C++', 'Emulator', 'RISC'],
    image: '/gpr-cpu.png',
    category: 'personal',
    repoUrl: 'https://github.com/Tobechukwu-Ikenwe',
    summary: [
      'Architecture: Registers R0–R7 (16-bit GPRs), PC (Program Counter), FLAGS (Zero, Carry, Negative). Memory: 64KB addressable as 16-bit words. Bus: Simple read/write abstraction between CPU and memory.',
      'Instruction set includes HALT, MOVI, MOV, LOAD, STORE, ADD, SUB, AND, OR, XOR, NOT, SHL, SHR, JMP, JZ, NOP with 16-bit encoding.',
      'Instruction format: [15:12] opcode, [11:9] Rd, [8:6] Rs, [5:0] unused or imm low bits for MOVI.',
    ],
  },
  {
    slug: 'cognicart',
    title: 'CogniCart (E-commerce Review App)',
    description: 'Serverless AI-driven recommendation engine that personalizes the e-commerce experience using ML to analyze review patterns and predict purchases.',
    tags: ['AWS', 'ML', 'Serverless', 'Python'],
    image: '/cognicart.png',
    category: 'personal',
    repoUrl: 'https://github.com/Tobechukwu-Ikenwe',
    summary: [
      'Built entirely on AWS: scalable, cost-effective, and fast. Serverless architecture costs $0 when idle and scales for traffic spikes.',
      'Storage (S3): Holds raw product review data and the final AI model (model.tar.gz).',
      'The Brain (SageMaker): ML model trained with Scikit-Learn; calculates mathematical distance between products to find the best match for each user.',
      'The Bridge (Lambda & API Gateway): Serverless layer that receives requests, asks the AI for a recommendation, and returns the answer in milliseconds.',
    ],
  },
]

export const mlProjects = [
  {
    slug: 'speech-to-text-pipeline',
    title: 'Speech-to-Text Pipeline',
    description: 'End-to-end pipeline on Raspberry Pi using OpenAI Whisper; noise filtering and chunking for better accuracy on noisy audio.',
    tags: ['Python', 'Whisper', 'Raspberry Pi'],
    image: 'https://placehold.co/600x400/e0f2fe/7c3aed?text=ML+Project',
    category: 'ml',
    repoUrl: 'https://github.com/Tobechukwu-Ikenwe',
    summary: [
      'Developing an end-to-end speech-to-text pipeline using Raspberry Pi and OpenAI Whisper.',
      'Improved accuracy on noisy audio using noise filtering, normalization, and chunking.',
    ],
  },
]

const allProjects = [...personalProjects, ...mlProjects]

export function getProjectBySlug(slug) {
  return allProjects.find((p) => p.slug === slug) ?? null
}

export function getAllSlugs() {
  return allProjects.map((p) => p.slug)
}
