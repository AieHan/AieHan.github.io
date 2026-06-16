// ========== PORTFOLIO DATA ==========
// All data is centralized here - edit once, updates everywhere

const portfolioData = {
    // Personal Info
    name: "Aiesya Noor Hannah Binti Hasbullah",
    matric: "078036",
    
    // Portfolio Highlights
    highlights: [
        "Small Business Network Design & Implementation (VLANs, inter-VLAN routing, DHCP security)",
        "VANET Performance Evaluation in Urban Environments (NS-3, SUMO, Veins, OMNeT++)",
        "Digital Forensic Investigation (Wireshark, FTK Imager, Redline, Volatility)",
        "AI-Based Dengue Diagnosis System (Bayesian Inference & Rule-Based Expert Systems)",
        "Cybersecurity Case Study Analysis (Change Healthcare Cyberattack & SIEM improvements)",
        "Government Service Portal (GOSG 2.0) Evaluation & Strategic Recommendations"
    ],
    
    // Career Responsibilities
    responsibilities: [
        "Monitor security alerts & logs using SIEM (Splunk, Microsoft Sentinel)",
        "Triage and investigate security incidents (Tier 1/2/3 analysis)",
        "Analyze network traffic, endpoint logs, threat feeds",
        "Escalate confirmed threats, document incidents, update runbooks",
        "Perform vulnerability scans & assist patch management",
        "Collaborate with IT and management on security policies"
    ],
    
    // Technical Skills
    technicalSkills: [
        "Networking (TCP/IP, DNS, HTTP)",
        "SIEM tools (Splunk, QRadar, Sentinel)",
        "IDS/IPS, threat hunting, log analysis",
        "Malware analysis basics",
        "Linux/Windows administration",
        "Scripting (Python, Bash)"
    ],
    
    // Soft Skills
    softSkills: [
        "Analytical & critical thinking",
        "Attention to detail",
        "Communication (verbal/written)",
        "Teamwork & collaboration",
        "Problem-solving under pressure",
        "Continuous learning mindset"
    ],
    
    // Relevance Text
    relevance: "Ransomware, APTs, and digital transformation (MyDigital initiative) drive demand for SOC analysts across banking, healthcare, government — 24/7 monitoring essential.",
    
    // Technical Proficiency Table
    techProficiency: [
        { area: "Networking Fundamentals", level: "Intermediate", evidence: "IP, subnetting, VLANs, DHCP, router-on-a-stick" },
        { area: "Network Simulation", level: "Intermediate", evidence: "NS-3, SUMO, OMNeT++, Veins, INET" },
        { area: "Cybersecurity Fundamentals", level: "Intermediate", evidence: "SIEM concepts, risk assessment, case studies" },
        { area: "Digital Forensics", level: "Beginner-Intermediate", evidence: "Wireshark, FTK Imager, Redline, Volatility" },
        { area: "Programming/Scripting", level: "Beginner-Intermediate", evidence: "Python basics, academic scripting" },
        { area: "Linux/Windows Admin", level: "Developing", evidence: "Basic command line, user management" }
    ],
    
    // Gap Analysis
    gaps: [
        { requirement: "Advanced Networking (Enterprise)", status: "Partially achieved", action: "Pursue CCNA & enterprise labs" },
        { requirement: "Practical Cybersecurity & IR", status: "Partially achieved", action: "Hands-on incident response & CTF" },
        { requirement: "Python / Automation", status: "Needs improvement", action: "Build log-parsing scripts" },
        { requirement: "Cloud Security (AWS/Azure)", status: "Limited exposure", action: "Obtain Azure/AWS fundamentals" },
        { requirement: "Linux Server Administration", status: "Developing", action: "Complete Linux certification prep" }
    ],
    
    // Strengths & Weaknesses
    strengths: [
        "Strong networking & simulation background",
        "Analytical problem-solving",
        "Team collaboration & documentation",
        "Digital forensics exposure"
    ],
    
    weaknesses: [
        "Python scripting & automation",
        "Professional pentesting experience",
        "Cloud platforms",
        "Real-world SOC workflow"
    ],
    
    // Certifications
    certifications: {
        shortTerm: [
            { name: "CompTIA Security+", purpose: "Cybersecurity fundamentals" },
            { name: "Cisco CCNA", purpose: "Networking core" },
            { name: "Google Cybersecurity", purpose: "SOC practical skills" }
        ],
        mediumTerm: [
            { name: "CompTIA CySA+", purpose: "Threat detection" },
            { name: "EC-Council CSA", purpose: "SOC specialist" },
            { name: "Splunk Core User", purpose: "SIEM mastery" }
        ],
        longTerm: [
            { name: "CISSP", purpose: "Leadership" },
            { name: "GIAC GCIH", purpose: "Incident response" },
            { name: "CEH", purpose: "Ethical hacking" }
        ]
    },
    
    // Career Timeline
    careerTimeline: [
        { stage: "0–2 Years", objectives: "Security+ & CCNA, home lab, SIEM proficiency", role: "Cybersecurity Intern / SOC Intern" },
        { stage: "2–5 Years", objectives: "CySA+ / CSA, SIEM operations, CTF competitions", role: "Tier 1 SOC Analyst" },
        { stage: "5+ Years", objectives: "Lead investigations, threat hunting, CISSP/GCIH", role: "Senior SOC Analyst / IR Analyst" }
    ],
    
    // Projects
    projects: [
        { title: "🏢 Small Business Network Design", description: "VLAN segmentation, inter-VLAN routing, DHCP security", tools: ["Cisco Packet Tracer", "Subnetting", "VLANs"], evidence: "Topology screenshots, config files" },
        { title: "🚗 VANET Performance Evaluation", description: "Vehicular network simulation in urban traffic", tools: ["NS-3", "SUMO", "OMNeT++"], evidence: "Performance graphs, research report" },
        { title: "🕵️ Digital Forensic Investigation", description: "Memory & network forensic analysis", tools: ["Wireshark", "FTK Imager", "Volatility"], evidence: "PCAP analysis, investigation timeline" },
        { title: "🤖 AI-Based Dengue Diagnosis System", description: "Rule-based expert system + Bayesian inference", tools: ["Bayesian Networks", "Python"], evidence: "System design, project report" },
        { title: "⚠️ Cybersecurity Case Study", description: "Change Healthcare cyberattack analysis & SIEM improvements", tools: ["Risk frameworks", "SIEM concepts"], evidence: "Case study report, presentation" },
        { title: "📋 Government Portal Evaluation", description: "GOSG 2.0 stakeholder analysis & adoption strategy", tools: ["Requirements analysis", "Strategic planning"], evidence: "Evaluation report, recommendations" }
    ],
    
    // Dream Company & Reflection
    dreamCompany: {
        name: "CrowdStrike / Microsoft Security",
        description: "CrowdStrike's Falcon platform redefines cloud-native endpoint detection with real-time threat intelligence. Their proactive 'Stop Breaches' mission resonates with my SOC passion. Microsoft's Sentinel & security innovation align with my goal to master SIEM and cloud defense."
    },
    
    elevatorPitch: "I am a dedicated cybersecurity graduate with deep knowledge in network security, incident investigation, and SIEM concepts. I have hands-on forensic lab experience, VANET performance analysis, and a clear certification roadmap (Security+, CCNA, CySA+). I combine technical curiosity with teamwork and structured documentation. My proactive mindset makes me ready to start as a Junior SOC Analyst and grow into a threat hunter.",
    
    finalReflection: "Through academic projects (digital forensics, VANET, AI diagnosis, network security) and self-driven learning, I have built a robust foundation for a SOC Analyst career. This portfolio represents my commitment to continuous improvement and my readiness to evolve into a senior incident responder.",
    
    // Biodata
    biodata: [
        { label: "Name", value: "Aiesya Noor Hannah Binti Hasbullah" },
        { label: "Matric Number", value: "078036" },
        { label: "Programme", value: "Bachelor of Computer Science (Computer Network Security)" },
        { label: "Faculty", value: "Faculty of Informatics and Computing" },
        { label: "University", value: "Universiti Sultan Zainal Abidin (UniSZA)" },
        { label: "Field", value: "Cybersecurity & Network Security" },
        { label: "Career Goal", value: "SOC Analyst → Senior Incident Responder" },
        { label: "Technical Skills", value: "Python, Wireshark, Linux, SIEM, Cisco Networking, Digital Forensics" }
    ]
};