/**
 * Master Portfolio Data Source for Gauhar Ali
 *
 * ALL content is defined here as requested. Every UI component reads from this file.
 * To update your profile, projects, journey seasons, certifications, or skills,
 * edit the entries below.
 *
 * NOTE: Facts are strictly aligned with Gauhar Ali's Master CV v1.
 * Any requested item not found in the CV is marked with a clear "TODO:" comment and field.
 */

export interface ProjectLink {
  label: string;
  url: string;
  isTodo?: boolean;
  todoText?: string;
}

export interface Project {
  id: string;
  title: string;
  episodeTag: string;
  category: string;
  role: string;
  year: string;
  shortPitch: string;
  fullDescription: string[];
  metrics?: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
  cvVerificationStatus: string;
  todoNotice?: string;
}

export interface Season {
  id: string;
  seasonNumber: string;
  yearDisplay: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  period: string;
  summary: string;
  metrics?: string;
  bulletPoints?: string[];
  academicFoundation?: string[];
  tags: string[];
  todoNotice?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  certificateNote?: string;
}

export interface ConferenceItem {
  id: string;
  role: string;
  conferenceTitle: string;
  organizer: string;
  date: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: 'Clinical Life Support' | 'AI & Technology' | 'Industry Simulations' | 'Professional Membership';
  status: string;
  verifiedInCV: boolean;
  todoNotice?: string;
}

export interface SkillsGroup {
  category: string;
  skills: string[];
}

export interface TelemetryMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    firstLineIntro: string;
    secondLineIntro: string;
    headline: string;
    discipline: string;
    location: string;
    email: string;
    phoneTodo: string;
    linkedinDisplay: string;
    linkedinUrl: string;
    githubDisplay: string;
    githubUrl: string;
    cvUrl: string;
    photoUrl: string;
    curriculumSummary: string;
  };
  telemetry: TelemetryMetric[];
  episodes: {
    number: string;
    code: string;
    title: string;
    tagline: string;
  }[];
  projects: Project[];
  seasons: Season[];
  leadership: LeadershipItem[];
  conferences: ConferenceItem[];
  certifications: CertificationItem[];
  technicalSkills: SkillsGroup[];
  clinicalInterests: string[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Gauhar Ali",
    discipline: "Cardiac Perfusion Technology",
    headline: "Cardiac Perfusion Technology | Healthcare | Clinical Research | AI & Emerging Technology",
    firstLineIntro: "First-year B.Sc. (Hons) Cardiac Perfusion Technology undergraduate at MNR University with interdisciplinary interests spanning cardiovascular healthcare, clinical research, artificial intelligence, and software development.",
    secondLineIntro: "Focused on extracorporeal circulation, cardiopulmonary bypass technology, and applying biomedical computing to solve critical healthcare challenges.",
    location: "Hyderabad, Telangana, India",
    email: "gauharali5550@gmail.com",
    phoneTodo: "TODO: Add contact phone number if required for public display (omitted in Master CV v1)",
    linkedinDisplay: "linkedin.com/in/gauharali5550",
    linkedinUrl: "https://linkedin.com/in/gauharali5550",
    githubDisplay: "github.com/Golublip",
    githubUrl: "https://github.com/Golublip",
    cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
    photoUrl: `${import.meta.env.BASE_URL}photo.jpg`,
    curriculumSummary: "Cardiopulmonary bypass circuits, hemodynamics, extracorporeal membrane oxygenation (ECMO), patient safety, and clinical data systems."
  },

  telemetry: [
    {
      label: "CIRCUIT STATUS",
      value: "PRIME READY",
      subtext: "Extracorporeal Loop"
    },
    {
      label: "ACADEMIC BASE",
      value: "MNR UNIVERSITY",
      subtext: "B.Sc. Perfusion (2025–29)"
    },
    {
      label: "SEMESTER I CGPA",
      value: "8.0 / 10.0",
      subtext: "30 Credits Completed"
    },
    {
      label: "CODE DEPTH SAVED",
      value: "3,539 → 410",
      subtext: "Classiq Quantum Oracle"
    }
  ],

  episodes: [
    { number: "01", code: "EP 01", title: "The Circuit", tagline: "Hero & Baseline Telemetry" },
    { number: "02", code: "EP 02", title: "Originals", tagline: "Projects & Breakthroughs" },
    { number: "03", code: "EP 03", title: "Seasons", tagline: "Clinical Journey & Academics" },
    { number: "04", code: "EP 04", title: "Protocols", tagline: "Leadership, Conferences & Credentials" },
    { number: "05", code: "EP 05", title: "Vitals", tagline: "Clinical Repertoire & Technical Skills" },
    { number: "06", code: "EP 06", title: "Finale", tagline: "To Be Continued… (Transmission)" }
  ],

  projects: [
    {
      id: "perfusync-vital-sign-ai",
      title: "Perfusync & The Vital Sign AI",
      episodeTag: "ORIGINAL SERIES • CLINICAL MEDIA",
      category: "Perfusion & Healthcare AI Newsletter",
      role: "Creator & Clinical Editor",
      year: "2026",
      shortPitch: "A healthcare-AI newsletter and media platform created for perfusionists, cardiovascular perfusion trainees, and allied health professionals navigating clinical tech.",
      fullDescription: [
        "Perfusync and The Vital Sign AI bridges the high-stakes world of cardiovascular perfusion with cutting-edge artificial intelligence.",
        "The publication explores how machine learning models, predictive hemodynamics, sensor automation, and decision-support algorithms impact extracorporeal circulation, cardiopulmonary bypass (CPB), and extracorporeal life support (ECLS).",
        "Curated specifically for clinical perfusionists, surgical theatre teams, and biomedical engineering trainees seeking evidence-grounded technological insights."
      ],
      metrics: "Specialized Perfusionist Audience",
      techStack: ["Healthcare AI", "Cardiac Perfusion", "Extracorporeal Circuits", "Medical Writing", "Clinical AI Editorial"],
      highlights: [
        "Synthesizing algorithmic advancements in extracorporeal life support and hemodynamic modeling.",
        "Explaining clinical relevance of emerging AI diagnostic and perfusion automation tools.",
        "Created to foster technological fluency among allied health sciences undergraduates and practitioners."
      ],
      links: [
        {
          label: "Newsletter Publication Link",
          url: "#",
          isTodo: true,
          todoText: "TODO: Add live newsletter / Substack / LinkedIn URL (Perfusync & The Vital Sign AI requested in prompt; not yet published on Master CV v1)"
        }
      ],
      cvVerificationStatus: "Included per user specifications; live subscription/repository link pending.",
      todoNotice: "TODO: Add newsletter publication link, issue frequency, and subscriber metrics once live."
    },
    {
      id: "memora-ai",
      title: "Memora AI — AI-Powered Personal Memory Vault",
      episodeTag: "ORIGINAL BUILD • MOBILE AI",
      category: "Mobile Application / Knowledge Vault",
      role: "Lead Developer & Prototyper",
      year: "2026",
      shortPitch: "An AI-powered personal knowledge and memory-management application built with Flutter/Dart, Google Gemini, on-device OCR, and offline-first storage.",
      fullDescription: [
        "Designed and prototyped a personal knowledge and memory-management application for organizing documents, certificates, links, and other personal information.",
        "Explored integration of Google Gemini, on-device OCR, Supabase, SQLite, Riverpod, and speech-to-text within an architecture optimized for Flutter and Dart.",
        "Engineered with a focus on privacy and reliability: local-first persistence via SQLite with cloud sync capabilities through Supabase."
      ],
      metrics: "Multimodal AI + On-Device OCR",
      techStack: ["Flutter", "Dart", "Google Gemini", "On-Device OCR", "Supabase", "SQLite", "Riverpod", "Speech-to-Text"],
      highlights: [
        "On-device OCR pipeline enabling instant extraction of textual metadata from scanned credentials and physical documents.",
        "Integrated Google Gemini API for intelligent indexing, conversational memory retrieval, and natural language query processing.",
        "Structured state management leveraging Riverpod with robust offline fallback backed by SQLite."
      ],
      links: [
        {
          label: "GitHub Profile",
          url: "https://github.com/Golublip",
          isTodo: false
        },
        {
          label: "Project Repository Link",
          url: "https://github.com/Golublip",
          isTodo: true,
          todoText: "TODO: Add dedicated public GitHub repository link for Memora AI (points to profile https://github.com/Golublip)"
        }
      ],
      cvVerificationStatus: "Directly verified from Master CV Page 1 (Selected Projects).",
      todoNotice: "TODO: Add repository or video demo link once published."
    },
    {
      id: "classiq-quantum-challenge",
      title: "Quantum Circuit Optimization — Classiq Challenge 2026",
      episodeTag: "ORIGINAL BENCHMARK • QUANTUM",
      category: "Quantum Computing & Circuit Optimization",
      role: "Independent Participant",
      year: "2026",
      shortPitch: "Algorithmic quantum phase-oracle optimization reducing quantum circuit depth by 88.4% (from 3,539 to 410) on a 64x64 image problem.",
      fullDescription: [
        "Participated as an independent researcher in the Classiq Quantum Circuit Challenge 2026, tackling high-complexity circuit synthesis and gate compilation.",
        "Worked on a quantum phase-oracle optimization problem involving a 64 x 64 image representation and two 6-qubit quantum registers.",
        "Experimentally reduced circuit depth from 3,539 down to 410 during rigorous optimization work, dramatically lowering decoherence probability on NISQ hardware."
      ],
      metrics: "Circuit Depth Reduced: 3,539 → 410 (88.4% reduction)",
      techStack: ["Quantum Computing", "Classiq SDK", "Python", "Phase-Oracle Optimization", "Quantum Registers", "Algorithmic Synthesis"],
      highlights: [
        "Handled a 64 x 64 image phase-oracle problem across two 6-qubit registers.",
        "Systematic gate minimization reducing depth from 3,539 gates down to 410 gates.",
        "Demonstrated the application of algorithmic simplification to reduce gate latency and noise."
      ],
      links: [
        {
          label: "Submission / Code Link",
          url: "#",
          isTodo: true,
          todoText: "TODO: Add Classiq challenge submission notebook or repository URL (not itemized in Master CV v1)"
        }
      ],
      cvVerificationStatus: "Directly verified from Master CV Page 1 (Selected Projects).",
      todoNotice: "TODO: Add Classiq challenge submission or certificate link."
    },
    {
      id: "clinical-research-portfolio",
      title: "Clinical Research Portfolio — Young Innovators Challenge",
      episodeTag: "ORIGINAL DOSSIER • CLINICAL RESEARCH",
      category: "Clinical Research & Evidence Synthesis",
      role: "Researcher / Participant",
      year: "2026",
      shortPitch: "Structured clinical research dossier developed using AI-assisted synthesis tools as part of the Young Innovators Internship Challenge.",
      fullDescription: [
        "Developed a structured clinical research portfolio using AI-assisted tools as part of the Young Innovators Internship Challenge.",
        "Conducted evidence extraction, protocol structure assessment, and biomedical literature synthesis adhering to rigorous clinical research methodologies.",
        "Explored the role of responsible artificial intelligence in accelerating clinical literature review, data extraction, and report formatting."
      ],
      metrics: "Young Innovators Internship Challenge 2026",
      techStack: ["Clinical Research", "AI-Assisted Tools", "Literature Synthesis", "Evidence Appraisal", "Biomedical Writing"],
      highlights: [
        "AI-assisted clinical literature retrieval and synthesis methodologies.",
        "Structured documentation following scientific reporting principles.",
        "Completed within the competitive Young Innovators framework."
      ],
      links: [
        {
          label: "Portfolio Document Link",
          url: "#",
          isTodo: true,
          todoText: "TODO: Add link to the published clinical research portfolio or challenge submission PDF (not itemized in Master CV v1)"
        }
      ],
      cvVerificationStatus: "Directly verified from Master CV Page 1 (Selected Projects).",
      todoNotice: "TODO: Add link to challenge portfolio repository or verification document."
    }
  ],

  seasons: [
    {
      id: "season-2026-medical-writing",
      seasonNumber: "SEASON 04",
      yearDisplay: "2026",
      title: "Medical Writing Intern",
      organization: "YuvaIntern",
      location: "India / Clinical Communications Track",
      type: "Internship & Practical Experience",
      period: "2026 (6-Week Sequence)",
      summary: "Completed and submitted an intensive six-week medical writing and clinical research task sequence spanning regulatory documentation, literature synthesis, and clinical study reports.",
      bulletPoints: [
        "Completed and submitted a six-week medical writing and clinical research task sequence.",
        "Covered medical literature review and synthesis, patient education material, regulatory document drafting, scientific editorial writing, clinical study report drafting, and reflective revision."
      ],
      tags: [
        "Medical Writing",
        "Clinical Study Reports (CSR)",
        "Regulatory Drafting",
        "Literature Review",
        "Patient Education",
        "Scientific Editorial"
      ],
      todoNotice: "TODO: Add YuvaIntern certificate verification link if available."
    },
    {
      id: "season-2025-2029-bsc-perfusion",
      seasonNumber: "SEASON 03",
      yearDisplay: "Nov 2025 – Expected 2029",
      title: "B.Sc. (Hons) Cardiac Perfusion Technology",
      organization: "MNR University",
      location: "Telangana, India",
      type: "Undergraduate Degree Program",
      period: "Nov 2025 - Expected 2029",
      summary: "Pursuing rigorous academic and clinical training in extracorporeal circulation, cardiopulmonary bypass (CPB) machinery, intra-operative hemodynamics, and critical cardiovascular care.",
      metrics: "Current CGPA: 8.0/10.0 (Semester I) | Credits completed: 30",
      academicFoundation: [
        "Anatomy",
        "Physiology",
        "Introduction to Healthcare Delivery System in India",
        "Medical Terminology & Record Keeping",
        "Healthcare Quality & Patient Safety"
      ],
      bulletPoints: [
        "Mastering cardiopulmonary bypass circuit architecture, blood gas management, and cannula configurations.",
        "Studying systemic hemodynamics, anticoagulation (ACT monitoring), and hypothermia protocols.",
        "Engaged in patient safety culture, sterile surgical discipline, and clinical record accuracy."
      ],
      tags: [
        "Cardiopulmonary Bypass (CPB)",
        "Extracorporeal Circulation",
        "Hemodynamic Monitoring",
        "ECMO Management",
        "Patient Safety",
        "Anatomy & Physiology"
      ]
    },
    {
      id: "season-2025-intermediate",
      seasonNumber: "SEASON 02",
      yearDisplay: "2025",
      title: "Intermediate — BiPC (Biology, Physics, Chemistry)",
      organization: "Telangana Board of Intermediate Education",
      location: "Telangana, India",
      type: "Pre-University / Higher Secondary",
      period: "2025",
      summary: "Completed higher secondary education in the pre-medical science stream (BiPC), establishing foundational knowledge in human physiology, organic biochemistry, and biological systems.",
      bulletPoints: [
        "Specialized in advanced Biology (Botany & Zoology), Physics, and Chemistry.",
        "Built the fundamental biochemical and physiological foundation required for specialized cardiac perfusion training."
      ],
      tags: ["Biology", "Physics", "Chemistry", "Pre-Medical Foundation"],
      todoNotice: "TODO: Add Intermediate percentage / grade if desired (omitted in Master CV v1)"
    },
    {
      id: "season-2021-ssc",
      seasonNumber: "SEASON 01",
      yearDisplay: "2021",
      title: "Secondary School Certificate (SSC)",
      organization: "Board of Secondary Education, Telangana",
      location: "Telangana, India",
      type: "Secondary School Certificate",
      period: "2021",
      summary: "Completed foundational secondary education graduating with top-tier academic distinction.",
      metrics: "CGPA: 9.2 / 10",
      bulletPoints: [
        "Graduated with a stellar CGPA of 9.2/10 under the Board of Secondary Education, Telangana.",
        "Demonstrated consistent excellence in mathematics, physical sciences, and biological sciences."
      ],
      tags: ["Academic Distinction", "Secondary Education", "CGPA 9.2/10"]
    }
  ],

  leadership: [
    {
      id: "iic-mnr",
      role: "General Member",
      organization: "Institution's Innovation Council (IIC), MNR University",
      period: "2026 - Present",
      description: "Participate in the university innovation ecosystem focused on student ideas, entrepreneurship, IPR (Intellectual Property Rights) awareness, and technological innovation activities."
    },
    {
      id: "cpt-club-cardio-amigos",
      role: "CPT Club Activity Coordinator — \"Cardio Amigo's\"",
      organization: "MNR University",
      period: "2026 - Present",
      description: "Coordinate student-focused academic and engagement activities related to cardiac perfusion and allied health sciences, promoting clinical peer discussions and simulation study groups."
    },
    {
      id: "world-environment-day",
      role: "Student Coordinator — World Environment Day 2026",
      organization: "Institution's Innovation Council, MNR University",
      period: "2026",
      description: "Coordinated and supported a campus plantation drive and environmental pledge activity. Honored with a Certificate of Appreciation for leadership and execution.",
      certificateNote: "Certificate of Appreciation awarded"
    }
  ],

  conferences: [
    {
      id: "cardio-wave-2k26",
      role: "Conference Delegate & Academic Quiz Participant",
      conferenceTitle: "CARDIO-WAVE 2K26 (2nd International Conference)",
      organizer: "Malla Reddy University, School of Allied and Healthcare Sciences",
      date: "Oct 2026",
      description: "Participated as an active conference delegate engaging in sessions on advanced allied healthcare techniques, and represented MNR University in the competitive academic quiz."
    }
  ],

  certifications: [
    {
      id: "cert-bls",
      name: "Basic Life Support (BLS)",
      issuer: "Clinical Training & Certification",
      category: "Clinical Life Support",
      status: "Certified",
      verifiedInCV: true
    },
    {
      id: "cert-acls",
      name: "Advanced Cardiovascular Life Support (ACLS)",
      issuer: "Clinical Training & Certification",
      category: "Clinical Life Support",
      status: "Certified",
      verifiedInCV: true
    },
    {
      id: "cert-gemini",
      name: "Gemini Certified University Student",
      issuer: "Google",
      category: "AI & Technology",
      status: "Certified",
      verifiedInCV: true
    },
    {
      id: "cert-amsect",
      name: "AmSECT Student Member",
      issuer: "American Society of ExtraCorporeal Technology",
      category: "Professional Membership",
      status: "Active Student Member",
      verifiedInCV: false,
      todoNotice: "TODO: Add AmSECT Membership ID and membership term (requested in portfolio brief; pending verification record)"
    },
    {
      id: "cert-six-sigma",
      name: "Lean Six Sigma AI Yellow Belt",
      issuer: "Quality & Process Improvement",
      category: "AI & Technology",
      status: "Yellow Belt",
      verifiedInCV: false,
      todoNotice: "TODO: Add issuing organization and credential ID (requested in portfolio brief; pending verification record)"
    },
    {
      id: "cert-tata-genai",
      name: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Group / Forage",
      category: "Industry Simulations",
      status: "Completed",
      verifiedInCV: true
    },
    {
      id: "cert-ba-datascience",
      name: "Data Science Job Simulation",
      issuer: "British Airways / Forage",
      category: "Industry Simulations",
      status: "Completed",
      verifiedInCV: true
    },
    {
      id: "cert-tata-cyber",
      name: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata / Forage",
      category: "Industry Simulations",
      status: "Completed",
      verifiedInCV: true
    }
  ],

  technicalSkills: [
    {
      category: "Development",
      skills: ["Dart", "Flutter", "Python"]
    },
    {
      category: "Backend & Data",
      skills: ["Supabase", "SQLite"]
    },
    {
      category: "Artificial Intelligence",
      skills: ["Google Gemini", "Prompt Engineering", "AI-Assisted Development", "OCR"]
    },
    {
      category: "Analytics & Retrieval",
      skills: ["Data Analytics", "Information Retrieval"]
    },
    {
      category: "Emerging Tech",
      skills: ["Quantum Computing", "Circuit Depth Optimization"]
    }
  ],

  clinicalInterests: [
    "Cardiovascular physiology and technology",
    "Cardiac perfusion and extracorporeal circulation",
    "Cardiopulmonary bypass (CPB)",
    "ECMO and extracorporeal life support",
    "Artificial organs and mechanical circulatory support",
    "Critical care technology",
    "AI-enabled healthcare",
    "Clinical and biomedical research"
  ],

  languages: [
    "English",
    "Urdu",
    "Arabic"
  ]
};
