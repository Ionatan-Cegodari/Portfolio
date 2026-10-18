export const personalInfo = {
  name: "Ionatan Cegodari",
  title: "Full Stack Software Developer/Engineer",
  location: "Birmingham, England, United Kingdom",
  email: "yonnycegodari@gmail.com",
  roles: [
    'Software Developer',
    2000,
    'Full Stack Developer',
    2000,
    'Project Manager',
    2000,
  ],
  summary:
    "Software Developer with commercial experience across desktop, mobile, web and backend development, building C#/.NET and SQL Server systems for industrial clients alongside Swift/Kotlin apps and React/Spring Boot platforms. I take features from build and testing through to release, alongside supporting the customers who use them, including on-site installation. Experienced in project coordination, with over 95% of projects delivered on time. Seeking a fully remote or hybrid software developer role.",
  resumeUrl: "/Ionatan_Cegodari_CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/ionatan-cegodari-1b87b02b2/",
    github: "https://github.com/Ionatan-Cegodari"
  }
};

export const experience = [
  {
    role: "Junior Software Developer",
    company: "Individual Systems Ltd",
    location: "Alcester, Warwickshire",
    period: "February 2026 – Present",
    mode: "On-site",
    points: [
      "Develop features end to end, from C# WinForms desktop front ends to Microsoft SQL Server back ends, including stored procedures, queries and database design in Visual Studio.",
      "Test and debug changes before merging and releasing into the main development pipeline using Git, and build/maintain SSRS reports in Report Builder for clients' operational and stock reporting.",
      "Integrate systems with weighing equipment and control cabinets over serial (RS232/RS485) and TCP/IP, including on-site installation and configuration at customer sites.",
      "Act as a point of contact for customers, diagnosing issues, scoping new developments, and working with senior developers to resolve them."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Our Training Department",
    location: "Birmingham, England, United Kingdom",
    period: "February 2025 – February 2026",
    mode: "Hybrid",
    points: [
      "Contributed directly to the LPA and Carpe Diem training and learning applications, guiding them from initial planning through deployment and ongoing maintenance for over 500 active users.",
      "Developed and maintained the LPA admin portal and backend services on a custom Spring Boot server, building new features while keeping systems stable with 99% uptime.",
      "Leveraged Generative AI tools such as Claude and Cursor to boost coding efficiency and streamline development, and supported users directly through troubleshooting."
    ]
  },
  {
    role: "Junior Software Developer & Project Manager",
    company: "The Random Stuff",
    location: "Birmingham, England, United Kingdom",
    period: "February 2025 – February 2026",
    mode: "Hybrid",
    points: [
      "Developed for OTD while managing projects across The Random Stuff, setting clear priorities aligned with customer needs.",
      "Coordinated tasks, kept timelines on track, and bridged communication between stakeholders and developers.",
      "Helped deliver over 95% of projects on time while keeping the team aligned and customers satisfied."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "The Random Stuff (Self-employed)",
    location: "Watford, England, United Kingdom",
    period: "November 2024 – January 2025",
    mode: "Remote",
    points: [
      "Delivered customized full-stack applications using modern frameworks, achieving 100% client satisfaction and repeat business.",
      "Maintained reliable, high-performing applications through thorough testing and deployment strategies, achieving zero post-launch critical issues."
    ]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Self-employed",
    location: "Watford, England, United Kingdom",
    period: "August 2024 – November 2024",
    mode: "Remote",
    points: [
      "Created seamless, responsive user experiences across devices with React.js and Next.js.",
      "Achieved 100% email delivery reliability by developing and debugging the complete data transfer system end to end.",
      "Delivered the complete Bespoke Memories website from concept to launch, managing design, development, testing and deployment."
    ]
  },
  {
    role: "Back-End Web Developer",
    company: "The Random Stuff (Self-employed)",
    location: "Hertfordshire, England, United Kingdom",
    period: "June 2024 – August 2024",
    mode: "Remote",
    points: [
      "Built robust backend infrastructure with Firebase and Firestore, enabling real-time data synchronization through secure authentication.",
      "Integrated Stripe payment systems with API connections for secure payment processing.",
      "Optimized performance by streamlining data transfer between front-end and Firebase, reducing latency and improving load times."
    ]
  }
];

export const education = [
  {
    qualification: "Computing BSc (Hons) — Upper Second Class Honours (2:1)",
    institution: "University of Worcester, Worcester",
    period: "September 2021 – June 2024"
  },
  {
    qualification: "Level 3 Extended Diploma in Computer Science — 160 UCAS Points",
    institution: "West Herts College, Watford",
    period: "September 2019 – June 2021"
  }
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Swift", "Kotlin", "JavaScript", "C#", "Java", "T-SQL", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", ".NET Framework", "WinForms", "Spring Boot"]
  },
  {
    title: "Backend & Databases",
    skills: ["Firebase", "Firestore", "Node.js", "Xano", "MongoDB", "Microsoft SQL Server"]
  },
  {
    title: "Tools & Services",
    skills: ["Stripe", "Git/GitHub", "Generative AI", "Claude AI", "Cursor IDE", "SSRS / Report Builder"]
  },
  {
    title: "Integration",
    skills: ["RS232 / RS485 Serial", "TCP/IP"]
  },
  {
    title: "Methodologies",
    skills: ["Agile Development", "SOLID Principles", "Full SDLC"]
  }
];

export const sections = [
  {
    id: "recent",
    title: "Most Recent Projects",
    skills: [
      { name: "JavaScript", image: "JavaScript Logo.png" },
      { name: "React.JS", image: "React Logo.png" },
      { name: "Next.JS", image: "Next Logo.png" },
      { name: "Firebase", image: "firebase logo.png" },
      { name: "STRIPE", image: "stripe logo.png" },
      { name: "Bootstrap 5", image: "B Logo.png" },
      { name: "HTML 5", image: "HTML Logo.png" },
      { name: "CSS 3", image: "CSS Logo.png" }
    ],
    projects: [
      {
        title: "From Stress to Strength",
        image: "From Stress To Strength.png",
        link: "https://www.fromstresstostrength.co.uk"
      },
      {
        title: "Momentum Psychology",
        image: "Momentum Psychology.png",
        link: "https://francisweb-production.up.railway.app"
      },
      {
        title: "Signal Solutions",
        image: "Signal Solutions.png",
        link: "https://southwalesaerialman.co.uk"
      },
      {
        title: "Diasspora Ecommerce Website",
        image: "Diasspora.png",
        link: "https://dfm-production.up.railway.app"
      }
    ]
  },
  {
    id: "software",
    title: "Software Projects",
    skills: [
      { name: ".NET Framework", image: "NET Logo.png" },
      { name: "C#", image: "Csharp Logo.png" },
      { name: "Java", image: "Java Logo.png" },
      { name: "Python", image: "Python Logo.png" },
      { name: "C++", image: "C++ Logo.png" }
    ],
    projects: [
      {
        title: "Image Gallery Editing Tool",
        image: "Image Gallery Editing Tool.png",
        link: "https://github.com/Ionatan-Cegodari/Image-Gallery-Editing-Tool"
      },
      {
        title: "Asset Viewing Tool",
        image: "Asset Viewing Tool.png",
        link: "https://github.com/Ionatan-Cegodari/Asset-Viewing-Tool"
      },
      {
        title: "Freelance Software Developer Work",
        image: "Freelance Work.png",
        link: "https://github.com/Ionatan-Cegodari/Freelance-Software-Developer-Work"
      },
      {
        title: "Fully Randomised Fishorama Aquerium",
        image: "Fully Randomised Aquerium.png",
        link: "https://github.com/Ionatan-Cegodari/Fully-Randomised-Fishorama-Aquerium"
      },
      {
        title: "Fishorama Aquerium 3V3",
        image: "3V3 Fishorama.JPG",
        link: "https://github.com/Ionatan-Cegodari/3-vs-3-Fishorama-Software"
      },
      {
        title: "Fishorama Fishtank Game",
        image: "Fishorama fishtank game.JPG",
        link: "https://github.com/Ionatan-Cegodari/Fishorama-Fish-Tank"
      },
      {
        title: "Travel Claim Application",
        image: "Travel Claim App.png",
        link: "https://github.com/Ionatan-Cegodari/Travel-Claim-Application"
      },
      {
        title: "Element-wise Operation Algorithm",
        image: "Element-wise Operation Algorithm.png",
        link: "https://github.com/Ionatan-Cegodari/Element-wise-Operation-Algorithm"
      }
    ]
  },
  {
    id: "web",
    title: "Web Projects",
    skills: [
      { name: "HTML 5", image: "HTML Logo.png" },
      { name: "CSS 3", image: "CSS Logo.png" },
      { name: "JavaScript", image: "JavaScript Logo.png" },
      { name: "PHP", image: "PHP Logo.png" },
      { name: "JSON", image: "JSON Logo.png" },
      { name: "XML", image: "XML Logo.png" },
      { name: "Bootstrap 5", image: "B Logo.png" }
    ],
    projects: [
      {
        title: "From Stress to Strength",
        image: "From Stress To Strength.png",
        link: "https://www.fromstresstostrength.co.uk"
      },
      {
        title: "Momentum Psychology",
        image: "Momentum Psychology.png",
        link: "https://francisweb-production.up.railway.app"
      },
      {
        title: "Signal Solutions",
        image: "Signal Solutions.png",
        link: "https://southwalesaerialman.co.uk"
      },
      {
        title: "Diasspora Ecommerce Website",
        image: "Diasspora.png",
        link: "https://dfm-production.up.railway.app"
      }
    ]
  },
  {
    id: "game",
    title: "Game Projects",
    skills: [
      { name: "C#", image: "Csharp Logo.png" },
      { name: "Unity", image: "Unity Logo.png" }
    ],
    projects: [
      {
        title: "Shooter Parkour Game",
        image: "Shooter Parkour Game.png",
        link: "https://github.com/Ionatan-Cegodari/Shooter-Parkour-Game"
      }
    ]
  }
];
