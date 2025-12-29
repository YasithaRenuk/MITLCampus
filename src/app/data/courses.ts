export type lessonTopicsType = {
  title:string;
  points:string[];
}

export type Course = {
  id:number;
  title: string;
  type: string;
  image: string;
  description:string;
  mainFeatures:string[];
  targetAudience:string[];
  lessonTopics?:lessonTopicsType[];
  Benefits:string[];
};

export type Categories = string[];

export const categories:Categories = [
    "All",
    "Languages",
    "Psychology & Education",
    "Technology & Engineering",
    "Bussiness",
    "Certificate Course"
];


export const courses: Course[] = [
  { 
    id:1,
    title: "Tamil Language Studies", 
    type: "Languages", 
    image: "/CoursesImages/TamilLanguage.png",
    description:'The Tamil Language Studies program offered by MITL Campus is one of the most popular and respected language programs in Sri Lanka. Established eight years ago, this course provides a valuable opportunity for students and professionals to master Tamil for academic, professional, and personal purposes.MITL Campus has maintained high standards of quality and academic excellence in its Tamil Language program, making it a leading choice for learners who aim to strengthen their language skills or pursue careers in education, translation, communication, or public service. Tamil, as one of the official languages of Sri Lanka and a classical language with rich heritage, is increasingly in demand across many sectors. While several institutions offer Tamil language courses, MITL Campus stands out due to its well-designed curriculum, expert instruction, and strong academic reputation. With increasing local and global relevance of Tamil language proficiency, the Tamil Studies Department at MITL Campus recognizes the value of offering a high-quality language program to serve the educational and cultural development of society.',
    mainFeatures : [
      "Developing strong reading, writing, speaking, and listening skills in Tamil, with a focus on grammar, vocabulary, and fluency.",
      "Providing a quality education that meets both academic and professional communication needs.",
      "Equipping students with the ability to use Tamil effectively in modern-day contexts, including digital communication.",
      "Preparing learners for further academic qualifications in Tamil literature, linguistics, or education.",
      "Increasing language competence to enhance opportunities in teaching, translation, media, and government service.",
    ],
    targetAudience:[
      "Students and professionals seeking to gain formal qualifications in the Tamil language within a short time.",
      "Those aiming to improve their Tamil skills for use in education, government, or business environments.",
      "Courses offered in Tamil, Sinhala, and English to ensure accessibility and understanding for a diverse student body.",
      "Teaching combines classical and modern Tamil applications relevant to current academic and social environments.",
      "Instruction delivered by a team of qualified and experienced language educators.",
      "Certification awarded by Azteca University in North America, offering international recognition and academic credibility."
    ],
    lessonTopics:[
      {
        title:"Diploma Level in Tamil Language",
        points:[
          "Advanced Tamil Grammar and Syntax – Sentence transformation, complex structures, agreement rules.",
          "Essay and Report Writing – Writing formal essays, business reports, and journalistic pieces.",
          "Tamil Short Stories and Novel Studies – Introduction to major short story writers and novelistsFormal and Informal Communication Skills – Techniques for professional and casual Tamil communication.",
          "Translation and Interpretation Skills – Advanced techniques of bilingual translation (Tamil–English/Sinhala).",
          "Tamil Media and Journalism – Writing for Tamil newspapers, magazines, and digital platforms.",
          "Introduction to Classical Tamil Literature – Selected readings from ancient texts like Sangam Literature, Thirukkural.",
          "Language Teaching Methodologies – Basics of teaching Tamil as a second language.",
          "Public Speaking and Presentation Skills – Delivering speeches, debates, and presentations in Tamil.",
          "Digital Tamil Usage – Tamil typing, Unicode standards, use of Tamil in social media, blogs, and websites.",
        ]
      }
    ],
    Benefits:[
      "Career Enhancement Opens up opportunities in teaching, translation, government services, media, and publishing.",
      "Cultural Awareness Deepens understanding of Sri Lankan Tamil culture and South Indian heritage.",
      "Communication Bridge Helps bridge communication gaps in multilingual environments, especially in public and community services.",
      "Academic Pathways Provides a foundation for higher studies in Tamil linguistics, literature, and comparative language studies.",
      "Versatile Applications Valuable for professionals in education, law, healthcare, and NGO sectors where Tamil communication is essential.",
      "Personal Growth Enhances cognitive skills, memory, and language proficiency.",
      "Global Recognition With certification from Azteca University, learners gain a credential that is respected locally and internationally.", 
    ]
  },
  { 
    id:2,
    title: "Business Management Studies", 
    type: "Bussiness", 
    image: "/CoursesImages/BusinessManagement.png",
    description:'The Business Management Studies program offered by MITL Campus is one of the most sought-after and esteemed business education programs in Sri Lanka. Established eight years ago, this course provides an exceptional opportunity for students and professionals to gain essential knowledge and skills in business management for academic, professional, and entrepreneurial purposes. MITL Campus has consistently upheld high standards of academic excellence and practical relevance in its Business Management program. This makes it a top choice for individuals aiming to enhance their management skills or build careers in business administration, entrepreneurship, finance, human resource management, and related fields. As global and local economies grow more interconnected, the demand for qualified business professionals is on the rise. While many institutions offer business courses, MITL Campus stands out due to its industry-relevant curriculum, experienced faculty, and strong academic credibility. With increasing relevance of business and management skills in the public and private sectors, the Business Management Department at MITL Campus recognizes the importance of offering a quality education that fosters leadership, strategic thinking and innovation.',
    mainFeatures : [
      "Building foundational knowledge in business principles, including finance, marketing, management, and entrepreneurship.",
      "Delivering quality education aligned with both academic and professional business standards.",
      "Equipping students with practical skills in communication, decision-making, and leadership.",
      "Preparing learners for further academic qualifications in business administration or related fields.",
      "Enhancing employability and entrepreneurial skills for success in local and global markets.",
    ],
    targetAudience:[
      "Students and professionals seeking formal qualifications in Business Management within a short or medium timeframe.",
      "Individuals aspiring to improve their managerial and leadership capabilities in business, government, or nonprofit organizations.",
      "Courses are offered in English, Sinhala, and Tamil to ensure accessibility for a diverse student body.",
      "Instruction combines theoretical frameworks with modern business practices relevant to today’s dynamic markets.",
      "Delivered by a team of experienced business educators and industry professionals.",
      "Certification awarded by Azteca University in North America, providing international recognition and academic value."
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Business Management",
        points:[
          "Introduction to Business – Basics of business operations – Types of businesses and organizational structures",
          "Principles of Management – Planning, organizing, leading, and controlling functions – Management roles and responsibilities",
          "Marketing Essentials – Marketing concepts and strategies – Customer behavior and digital marketing basics",
          "Business Communication – Written and verbal communication in a business context – Professional email, report writing, and presentations",
          "Entrepreneurship Basics – Starting and managing small businesses – Business planning and innovation",
          "Accounting Fundamentals – Introduction to financial statements – Bookkeeping and budgeting basics",
          "Human Resource Management – Recruitment, training, performance evaluation – Employment law and workplace ethics",
          "Business Law – Legal aspects of running a business – Contracts, liabilities, and regulations",
          "Digital Business Tools – Introduction to business software – Using technology for business growth",
          "Corporate Ethics and Social Responsibility – Business ethics and corporate governance – Sustainable business practices"
        ]
      },
      {
        title:"Diploma Level in Business Management",
        points:[
          "Strategic Management – Business strategy formulation and implementation",
          "Financial Management – Budgeting, investment analysis, and financial planning",
          "Advanced Marketing Techniques – Brand management, market research, and CRM",
          "Operations and Supply Chain Management – Efficiency in production and distribution",
          "Leadership and Organizational Behavior – Team management, motivation, and leadership theories",
          "E-Business and Digital Marketing – Online business models and digital advertising",
          "Project Management – Planning, executing, and managing business projects",
          "Business Research Methods – Data collection, analysis, and decision-making",
          "Global Business Environment – International trade, globalization, and economic trends",
        ]
      },
      {
        title:"Degree Level in Business Management (B.B.A.)",
        points:[
          "Advanced Organizational Theory – Structure, culture, and change in organizations",
          "Corporate Finance – Capital budgeting, risk management, and financing",
          "International Business – Managing multinational enterprises and global strategies",
          "Business Analytics – Data-driven decision-making and business intelligence",
          "Entrepreneurship and Innovation Management – Startup ecosystem, venture capital, and innovation strategy",
          "Management Information Systems – Role of IT in business planning and operations",
          "Ethics, Governance, and Corporate Social Responsibility – Ethical leadership, sustainability, and transparency",
          "Strategic HRM – Workforce planning, talent development, and HR strategy",
          "Service Management and Customer Experience – Managing service delivery and enhancing customer satisfaction",
          "Legal and Regulatory Environment – Corporate law, compliance, and business regulations",
          "Capstone Project and Internship – Real-world business problem solving and industry exposure",
        ]
      },
    ],
    Benefits:[
      "Career Advancement - Open up career paths in administration, finance, marketing, HR, and entrepreneurship.",
      "Leadership Development - Equip yourself with the confidence and skills to lead teams and organizations.",
      "Global Perspective - Learn to navigate international markets and global economic challenges.",
      "Entrepreneurial Success - Gain the knowledge to start, manage, and grow your own business.",
      "Cross-sector Relevance - Applicable across various sectors such as business, nonprofit, education, and government.",
      "Enhanced Communication - Develop strong communication, negotiation, and presentation abilities.",
      "International Recognition - MITL’s collaboration with Azteca University ensures global academic and professional credibility."
    ]
  },
  { 
    id:3,
    title: "Human Resource Management", 
    type: "Bussiness", 
    image: "/CoursesImages/BusinessRManagement.png",
    description:'The Human Resource Management (HRM) program offered by MITL Campus is a well recognized and in-demand professional course in Sri Lanka. Established eight years ago, this program equips students and professionals with the essential skills and knowledge needed to excel in people management, organizational behavior, and workplace leadership. As businesses grow and adapt to a rapidly changing global landscape, the demand for qualified HR professionals continues to increase. The HRM program at MITL Campus is designed to prepare individuals to manage talent, build strong workplace cultures, and contribute strategically to organizational success. This course provides a valuable pathway for those looking to advance their careers in recruitment, training and development, performance management, employee relations, and HR leadership roles.',
    mainFeatures : [
      "Comprehensive understanding of core HRM principles and modern practices",
      "Development of interpersonal, leadership, and organizational skills",
      "Practical exposure to real-world HR functions and strategies",
      "Courses aligned with industry requirements and global HR standards",
      "Prepares learners for further qualifications in business, management, and organizational development",
    ],
    targetAudience:[
      "Students and professionals aspiring to build a career in Human Resource Management",
      "Individuals working in administration or supervisory roles seeking formal HR training ",
      "Those aiming to enhance their people management skills in business, education, or nonprofit settings",
      "Courses delivered in Sinhala, Tamil, and English to suit diverse learners",
      "Expert faculty with industry experience in local and international HRM practices",
      "Certification awarded by Azteca University (North America), offering international recognition and academic credibility"
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Human Resource Management",
        points:[
          "Introduction to HRM – Definition, functions, and the role of HR in organizations",
          "Organizational Behavior – Human behavior at work, motivation, and team dynamics",
          "Recruitment and Selection – Hiring processes, job analysis, and interview techniques",
          "Training and Development – Employee skill development and performance improvement",
          "Performance Management – Appraisals, feedback systems, and KPIs",
          "Labor Law and Employee Rights – Understanding labor laws and ethical HR practices",
          "Communication in the Workplace – Effective communication, conflict resolution, and teamwork",
          "Introduction to HR Software – Basics of HRIS and digital tools in HR",
          "Payroll and Compensation Basics – Salary structures, benefits, and employee compensation",
          "HR and Organizational Culture – Role of HR in shaping and sustaining workplace culture",
        ]
      },
      {
        title:"Diploma Level in Human Resource Management",
        points:[
          "Advanced HRM Strategies – Strategic HR planning and business alignment",
          "Employee Relations and Engagement – Building positive work environments and morale",
          "Workforce Planning and Talent Management – Forecasting HR needs and career development strategies",
          "Training Program Design – Designing effective in-house training initiatives",
          "Compensation and Benefits Management – Structuring competitive and fair compensation systems",
          "Performance Evaluation Systems – Building metrics-based review systems",
          "Occupational Health and Safety – Promoting a safe and healthy workplace",
          "HR Analytics and Decision Making – Using data for HR planning and performance improvement",
          "Legal Compliance and HR Policies – Drafting policies and ensuring legal compliance",
          "Capstone Project / Practical HR Case Studies – Real-world analysis and problem-solving in HR scenarios",
        ]
      },
      {
        title:"Degree Level in Human Resource Management (B.A.)",
        points:[
          "Strategic Human Resource Management (SHRM) – HR as a business partner and strategic planner",
          "Global HRM Practices – HR in multinational corporations and cross-cultural settings",
          "Advanced Labor Law and Industrial Relations – Trade unions, grievance handling, and labor negotiations",
          "Organizational Development and Change Management – Leading and managing organizational transformation",
          "Leadership and Team Management – Leadership styles, team performance, and organizational success",
          "HRM Research Methods – Research techniques, report writing, and project work",
          "Technology in HRM – HRIS systems, digital onboarding, and tech-enabled HR functions",
          "Ethics and Corporate Social Responsibility (CSR) – Ethical decision-making and sustainable business practices",
          "HR Consulting and Entrepreneurship – Building a career as an HR consultant or HR business owner",
          "Internship or Industry Placement – Practical experience in HR departments of reputed organizations",
          "Diversity and Inclusion Management – Promoting equity and managing diverse teams",
          "Workplace Psychology and Emotional Intelligence – Understanding employee behavior and emotional skills",
        ]
      },
    ],
    Benefits:[
      "Career Advancement – Qualify for roles in recruitment, HR coordination, training, and leadership",
      "Organizational Value – Play a key role in company success through effective people management",
      "Versatile Opportunities – Applicable across all industries including business, healthcare, education, and NGOs",
      "Professional Growth – Learn critical thinking, decision-making, and negotiation skills",
      "Pathway to Higher Studies – Ideal foundation for MBA and other management-related programs",
      "International Recognition – Certification from Azteca University boosts global career prospects",
      "Skill Development – Enhances interpersonal, leadership, and administrative skills",
    ]
  },
  { 
    id:4,
    title: "Counselling and Psychology Studies", 
    type: "Psychology", 
    image: "/CoursesImages/CounsellingandPsychology.jpg",
    description:'The Counselling and Psychology Studies program at MITL Campus is one of the most respected and impactful academic offerings in Sri Lanka. Introduced eight years ago, this course provides students and professionals with comprehensive training in understanding human behavior, mental health, and therapeutic practices. MITL Campus is known for its academic integrity and dedication to holistic education. Its Psychology and Counselling program is a leading choice for individuals seeking careers in mental health services, education, social work, rehabilitation, and related human services fields. As awareness of mental health grows globally and locally, the demand for trained professionals in counselling and psychology continues to rise. While various institutions offer psychology courses, MITL Campus stands out for its in-depth curriculum, focus on ethical practice, and experienced faculty. The Counselling and Psychology Department at MITL Campus is committed to offering an inclusive, research-informed, and practice-oriented education to support the psychological well-being and development of individuals and communities.',
    mainFeatures : [
      "Developing a strong foundation in psychological theories, human development, and counselling techniques.",
      "Equipping students with skills in communication, emotional intelligence, and therapeutic intervention.",
      "Offering practical training and ethical guidelines for working with diverse populations.",
      "Preparing learners for advanced qualifications in psychology, counselling, or psychotherapy.",
      "Enhancing career opportunities in education, mental health services, NGOs, and community outreach programs.",
    ],
    targetAudience:[
      "Students and professionals seeking formal qualifications in Counselling and Psychology.",
      "Individuals aspiring to work in educational settings, community services, healthcare, or private practice.",
      "Courses are available in Sinhala, Tamil, and English for accessibility across a diverse student body.",
      "Curriculum blends classical psychological theories with modern therapeutic techniques.",
      "Delivered by licensed counsellors, clinical psychologists, and experienced academicfaculty.",
      "Certification awarded by Azteca University in North America, offering international academic recognition.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Counselling and Psychology",
        points:[
          "Introduction to Psychology – History, branches, and basic concepts in psychology",
          "Human Growth and Development – Psychological development across lifespan",
          "Fundamentals of Counselling – Core counselling skills, client interaction, and ethics",
          "Communication and Listening Skills – Active listening, empathy, and non-verbal cues",
          "Abnormal Psychology – Common psychological disorders and symptoms",
          "Introduction to Mental Health – Mental health awareness and stigma reduction",
          "Counselling Techniques and Practice – Individual and group counselling basics",
          "Crisis Intervention and Stress Management – Responding to trauma, grief, and acute stress",
          "Psychology in Education and Workplace – Role of psychology in learning and organizational behavior",
          "Ethics and Professional Conduct – Confidentiality, boundaries, and ethical guidelines",
        ]
      },
      {
        title:"Diploma Level in Counselling and Psychology",
        points:[
          "Theories of Personality – Freud, Jung, Rogers, and contemporary perspectives",
          "Child and Adolescent Psychology – Developmental challenges and interventions",
          "Advanced Counselling Approaches – CBT, humanistic, psychodynamic, and integrative models",
          "Psychological Assessment and Diagnosis – Basic tools for behavioral and emotional evaluation",
          "Group Counselling and Facilitation Skills – Leading therapeutic groups, support circles",
          "Family and Relationship Counselling – Marriage counselling, parenting support, and conflict resolution",
          "Substance Abuse and Rehabilitation – Addiction counselling and treatment strategies",
          "Research Methods in Psychology – Data collection, analysis, and academic writing",
          "Community Mental Health – Mental health promotion and outreach programs",
        ]
      },
      {
        title:"Degree Level in Counselling and Psychology (B.A. or B.Sc.)",
        points:[
          "Advanced Psychological Theories – Cognitive, behavioral, biological, and socio-cultural approaches",
          "Psychopathology – In-depth study of mental disorders and clinical practices",
          "Counselling Ethics and Legal Issues – Professional responsibilities, laws, and ethical frameworks",
          "Psychological Research and Statistics – Designing studies, interpreting data, writing reports",
          "Trauma and Crisis Counselling – Dealing with abuse, PTSD, and emergency psychological support",
          "Multicultural Counselling – Cultural competence and inclusive therapeutic practice",
          "Neuropsychology and Biological Bases of Behavior – Brain structure, neurotransmission, and behavior",
          "Therapeutic Techniques and Supervised Practicum – Practical sessions with clients under supervision",
          "Mental Health Policy and Advocacy – Mental health legislation, public awareness, and advocacy strategies",
          "Internship and Case Study Research – Real-world counselling experience and academic project work",
        ]
      },
    ],
    Benefits:[
      "Career Opportunities - Opens pathways in mental health services, education, HR, rehabilitation, and social work.",
      "Improved Interpersonal Skills - Enhances communication, empathy, and conflict resolution skills.",
      "Support for Community Well-being - Enables graduates to serve and uplift individuals facing psychological challenges.",
      "Academic Progression - Builds a solid foundation for postgraduate studies in psychology, social work, or counselling.",
      "Professional Flexibility - Valuable across sectors including healthcare, education, NGOs, and corporate wellness programs.",
      "Personal Development - Encourages self-awareness, emotional regulation, and psychological insight.",
      "Global Recognition - With Azteca University certification, graduates gain international academic and professional credibility.",
    ]
  },
  { 
    id:5,
    title: "Pharmacology", 
    type: "Psychology", 
    image: "/CoursesImages/Pharmacology.jpg",
    description:' The Pharmacology Studies program at MITL Campus is one of the most respected and professionally aligned academic courses available in Sri Lanka. Introduced eight years ago, this program provides students and healthcare professionals with comprehensive knowledge of drug actions, interactions, and applications within clinical and research settings. MITL Campus is recognized for its high academic standards and commitment to excellence in scientific education. Its Pharmacology program is a preferred choice for those pursuing careers in medicine, pharmacy, clinical research, drug development, or public health. With the rapid growth of the healthcare and pharmaceutical sectors globally, the demand for professionals trained in pharmacology is steadily rising. While other institutions offer pharmacology courses, MITL Campus distinguishes itself through its research-based curriculum, laboratory training, and experienced faculty. The Department of Pharmacology at MITL Campus is dedicated to producing skilled graduates who contribute to advancing safe and effective medication use, drug discovery, and medical education.',
    mainFeatures : [
      "In-depth understanding of drug mechanisms, therapeutic uses, and adverse effects.",
      "Integration of theory with practical laboratory experience and clinical relevance.",
      "Preparation for careers in pharmaceutical industries, healthcare, or research.",
      "Opportunities for higher education in medicine, pharmacology, toxicology, or biotechnology.",
      "Training in ethical drug use, regulatory policies, and patient safety standards",
    ],
    targetAudience:[
      "Students and professionals aiming to gain formal qualifications in Pharmacology.",
      "Individuals pursuing careers in medical, pharmaceutical, research, or regulatory sectors.",
      "Courses available in English with support in Sinhala and Tamil to ensure wider accessibility.",
      "Curriculum combines foundational sciences with modern pharmacological applications.",
      "Taught by pharmacologists, clinicians, and academic researchers.",
      "Certification awarded by Azteca University in North America, providing international academic recognition.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Pharmacology",
        points:[
          "Introduction to Pharmacology – History, scope, and significance of pharmacology",
          "Drug Classification and Nomenclature – Categories of drugs and systematic naming conventions",
          "Pharmacokinetics and Pharmacodynamics – Absorption, distribution, metabolism, and action mechanisms",
          "Therapeutic Drugs and Clinical Uses – Common drug classes, indications, and clinical applications",
          "Adverse Drug Reactions and Safety – Toxicity, contraindications, and risk management",
          "Prescription Reading and Writing – Interpreting prescriptions, dosage calculations, and safety practices",
          "Drugs in the Healthcare System – Role of pharmacology in hospitals and public health",
          "Basic Laboratory Practices – Handling chemicals, instruments, and safety protocols",
          "Introduction to Natural Products and Herbal Medicine – Traditional medicines and their pharmacological basis",
          "Ethics and Legal Aspects of Drug Use – Drug regulation, misuse prevention, and professional responsibility",
        ]
      },
      {
        title:"Diploma Level in Pharmacology",
        points:[
          "Systemic Pharmacology – Drugs affecting cardiovascular, respiratory, nervous, and digestive systems",
          "Clinical Pharmacology – Drug therapy principles and patient-centered medication use",
          "Pharmacogenetics and Personalized Medicine – Genetic influences on drug response and precision medicine",
          "Pharmaceutical Chemistry Basics – Chemical structure, formulation, and drug design",
          "Microbiology and Antimicrobial Pharmacology – Antibiotics, antivirals, resistance, and infection control",
          "Toxicology and Drug Overdose Management – Principles of poison management and detoxification",
          "Research Methods in Biomedical Science – Data collection, hypothesis testing, and report writing",
          "Pharmacovigilance and Regulatory Affairs – Post-marketing surveillance and drug approval processes",
          "Practical Skills and Lab Work – Laboratory tests, simulated dispensing, and drug assays",
        ]
      },
      {
        title:"Degree Level in Pharmacology (B.Sc. in Pharmacology)",
        points:[
          "Advanced Pharmacokinetics and Pharmacodynamics – Modeling drug behavior and therapeutic responses",
          "Molecular and Cellular Pharmacology – Drug interaction at receptor and genetic levels",
          "Neuropharmacology – Drugs affecting the brain and nervous system",
          "Endocrine and Reproductive Pharmacology – Hormonal regulation and pharmacological interventions",
          "Immunopharmacology and Inflammation – Immune system targeting drugs and anti-inflammatory agents",
          "Drug Discovery and Development – From drug design to clinical trials and marketing",
          "Clinical Trials and Research Ethics – Design, analysis, and ethical conduct in human studies",
          "Herbal and Complementary Pharmacology – Integrative medicine and natural drug alternatives",
          "Pharmacology and Public Health – Rational drug use in populations and global health trends",
          "Professional Practice and Internship – Placement in pharmaceutical firms, hospitals, or research labs",
        ]
      },
    ],
    Benefits:[
      "Career Opportunities - Opens careers in pharmaceuticals, biotechnology, research, healthcare, and regulatory bodies.",
      "Healthcare Impact - Contributes directly to patient safety, drug innovation, and effective treatment planning.",
      "Research and Development Focus - Prepares graduates for roles in drug discovery, clinical trials, and biomedical research.",
      "Global Recognition - With Azteca University certification, graduates gain credentials valued internationally.",
      "Interdisciplinary Applications - Relevant in medicine, nursing, forensic science, agriculture, and public health.",
      "Ethical and Safe Practice - Emphasizes responsible medication use and public safety in drug administration.",
      "Scientific Skill Development - Enhances analytical thinking, lab techniques, data analysis, and critical reasoning.",
    ]
  },
  { 
    id:6,
    title: "Nursing", 
    type: "Psychology", 
    image: "/CoursesImages/Nursing.jpg",
    description:'The Nursing Studies program at MITL Campus is one of the most trusted and essential healthcare education programs in Sri Lanka. Established eight years ago, this course equips students and professionals with the knowledge, skills, and compassion required to provide quality patient care across various clinical settings. MITL Campus is known for its academic rigor and commitment to practical healthcare training. Its Nursing program is a top choice for individuals pursuing careers in hospitals, community health, eldercare, and international healthcare environments. As the healthcare sector continues to expand globally, the demand for skilled and certified nurses is rising rapidly. While several institutions offer nursing courses, MITL Campus stands out due to its balanced curriculum, clinical partnerships, and focus on both theoretical knowledge and hands-on training. The Department of Nursing at MITL Campus strives to produce competent, ethical, and empathetic nursing professionals capable of responding to the evolving challenges of global health care.',
    mainFeatures : [
      "Building a strong foundation in patient care, medical ethics, and clinical nursing skills.",
      "Integrating theory with practical training in hospitals, clinics, and community settings.",
      "Preparing students for professional licensure and higher education in nursing.",
      "Providing training in emergency care, maternal and child health, mental health nursing, and more.",
      "Enhancing employability in both local and international healthcare sectors.",
    ],
    targetAudience:[
      "Students and professionals seeking a recognized qualification in Nursing.",
      "Individuals aiming to serve in hospitals, clinics, eldercare, and community health initiatives.",
      "Courses delivered in English, with support in Sinhala and Tamil for accessible learning.",
      "Courses delivered in English, with support in Sinhala and Tamil for accessible learning.",
      "Instruction by qualified nurses, clinical instructors, and healthcare educators.",
      "Certification awarded by Azteca University in North America, ensuring global academic recognition.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Nursing",
        points:[
          "Introduction to Nursing and Healthcare Systems – Role of the nurse, healthcare settings, and teamwork",
          "Basic Anatomy and Physiology – Understanding the human body and its systems",
          "Fundamentals of Patient Care – Hygiene, mobility, feeding, and vital sign monitoring",
          "First Aid and Emergency Nursing – Responding to trauma, CPR, and acute care practices",
          "Medical Terminology and Documentation – Common terms and effective nursing records management",
          "Pharmacology for Nurses – Safe administration of medications and dosage calculations",
          "Infection Control and Hygiene – Sterilization, hand hygiene, and patient safety",
          "Communication in Healthcare – Patient interaction, empathy, and cultural sensitivity",
          "Ethics and Legal Issues in Nursing – Confidentiality, informed consent, and patient rights",
          "Community Health and Outreach Nursing – Public health awareness and basic health education",
        ]
      },
      {
        title:"Diploma Level in Nursing",
        points:[
          "Advanced Clinical Nursing Skills – Wound care, catheterization, IV therapy, and vital procedures",
          "Medical-Surgical Nursing – Nursing care for adult patients with medical or surgical conditions",
          "Maternal and Child Health Nursing – Prenatal care, childbirth, pediatric nursing, and immunizations",
          "Mental Health and Psychiatric Nursing – Caring for individuals with mental health conditions",
          "Nutrition and Diet Therapy – Role of diet in patient recovery and chronic disease management",
          "Geriatric and Palliative Care – Elderly care, pain management, and end-of-life support",
          "Pathophysiology and Disease Management – Understanding common diseases and nursing interventions",
          "Research and Evidence-Based Practice – Introduction to nursing research and data analysis",
          "Nursing Leadership and Management – Team coordination, supervision, and healthcare administration",
        ]
      },
      {
        title:"Degree Level in Nursing (B.Sc. in Nursing)",
        points:[
          "Nursing Theory and Models – Orem, Roy, Watson, and other nursing frameworks",
          "Advanced Pharmacology and Drug Management – In-depth medication administration and side effect monitoring",
          "Critical Care and Emergency Nursing – Intensive care nursing, ventilator management, and triage",
          "Nursing Informatics and Digital Health – Electronic medical records and telemedicine",
          "Professional Ethics and Legal Responsibilities – Complex cases, patient advocacy, and legal compliance",
          "Reproductive and Women’s Health Nursing – Women’s health across the lifespan and reproductive services",
          "Nursing Research and Thesis Writing – Academic project development and scientific writing",
          "Leadership in Nursing Practice – Clinical decision-making, conflict resolution, and team leadership",
          "Global Health and Disaster Nursing – Humanitarian relief, disaster response, and health equity",
          "Clinical Internship and Capstone Project – Supervised hospital placement and final academic project",
        ]
      },
    ],
    Benefits:[
      "Career Stability and Global Demand - Guaranteed job opportunities in public and private healthcare worldwide.",
      "Practical and Life-Saving Skills - Gain real-world abilities to save lives and improve patient well-being.",
      "Humanitarian Impact - Make a positive difference in communities and underserved populations.",
      "Foundation for Further Studies - Pave the way to specialize in midwifery, critical care, public health, or management.",
      "Professional Versatility - Work in hospitals, clinics, schools, NGOs, military, and home care settings.",
      "Personal Fulfillment - Deep emotional rewards from caring for others and building resilience.",
      "International Recognition - With Azteca University certification, graduates gain respected credentials globally.",
    ]
  },
  { 
    id:7,
    title: "Care Giving", 
    type: "Psychology", 
    image: "/CoursesImages/CareGiving.jpg",
    description:'The Caregiving Studies program at MITL Campus is a highly valued and compassionate educational offering designed to train individuals in the essential skills needed for providing quality personal and health-related care. Established eight years ago, this program prepares students for meaningful careers in home care, elder care, disability support, and healthcare assistance. MITL Campus is recognized for its practical, community-centered approach and emphasis on human dignity, empathy, and professionalism. Its Caregiving program has become a preferred option for those seeking to work in both local and international caregiving environments. As populations age and healthcare systems evolve, the global demand for well-trained caregivers is rising steadily. While various institutions offer caregiving programs, MITL Campus stands out for its hands-on training, ethical focus, and comprehensive support structure. The Department of Caregiving at MITL Campus is committed to developing individuals who are not only technically skilled but also emotionally intelligent and capable of delivering high-quality personal care services.',
    mainFeatures : [
      "Teaching essential skills in personal care, hygiene, mobility assistance, and communication.",
      "Preparing caregivers to work with the elderly, disabled, chronically ill, and recovering patients.",
      "Emphasizing empathy, patience, ethical care, and cultural sensitivity.",
      "Offering practical experience through clinical placements and community care initiatives.",
      "Equipping students to work in domestic care, hospitals, care homes, or abroad.",
    ],
    targetAudience:[
      "Individuals seeking formal certification in caregiving for professional or personal use.",
      "Aspiring caregivers interested in working in elder care, rehabilitation, or palliative care.",
      "Courses available in Sinhala, Tamil, and English to accommodate a diverse student population.",
      "Curriculum designed for both entry-level learners and experienced home carers.",
      "Delivered by experienced healthcare professionals, nurses, and caregiving experts.",
      "Certification awarded by Azteca University in North America, offering global recognition and credibility.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Caregiving",
        points:[
          "Introduction to Caregiving – Role of a caregiver, scope of practice, and ethical responsibilities",
          "Personal Hygiene and Grooming – Bathing, oral care, grooming, and dressing assistance",
          "Nutrition and Meal Preparation – Basic nutrition, feeding assistance, and dietary needs for clients",
          "Mobility and Positioning Techniques – Lifting, transferring, walking aids, and fall prevention",
          "Basic Health Monitoring – Taking vital signs (temperature, pulse, blood pressure) and documenting changes",
          "Elderly and Disability Care – Support for aging clients and those with physical or cognitive disabilities",
          "First Aid and Emergency Response – Handling emergencies, CPR, and recognizing critical symptoms",
          "Household Management Skills – Cleaning, laundry, medication reminders, and safety in the home",
          "Companionship and Emotional Support – Communicating with compassion, building trust, and supporting mental well-being",
          "Workplace Ethics and Cultural Sensitivity – Respect for privacy, dignity, cultural beliefs, and family involvement",
        ]
      },
      {
        title:"Diploma Level in Caregiving",
        points:[
          "Advanced Personal Care and Assistance – Bed-bound patient care, catheter care, skin care, and toileting",
          "Geriatric and Dementia Care – Managing age-related conditions and supporting memory-impaired clients",
          "Mental Health Awareness for Caregivers – Recognizing depression, anxiety, and behavioral changes in clients",
          "Palliative and End-of-Life Care – Supporting terminally ill clients with dignity and compassion",
          "Care Planning and Documentation – Creating daily routines, care logs, and observing/reporting health changes",
          "Client and Family Communication – Conflict resolution, setting boundaries, and collaboration with families",
          "Infection Control and Safety Procedures – Hygiene protocols, PPE use, and preventing disease transmission",
          "Caregiver Wellness and Stress Management – Self-care strategies and avoiding burnout",
          "Professional Development and Workplace Readiness",
        ]
      },
      {
        title:"Extended Diploma (for international placement)",
        points:[
          "Medical Terminology and Basic Anatomy – Understanding medical terms and how the body works",
          "Rehabilitation and Disability Support – Techniques to support physical therapy and promote independence",
          "Technology in Caregiving – Use of assistive devices, alarms, mobility tools, and digital health records",
          "Child and Youth Care – Supporting children with physical or developmental needs",
          "Crisis Management and Behavioral Support – De-escalation techniques and coping strategies in high-stress situations",
          "Professional Practice and Internship – Supervised placement in care homes, hospitals, or international caregiving settings",
        ]
      },
    ],
    Benefits:[
      "High Global Demand - Open doors to work in countries with growing elderly populations and home care needs.",
      "Practical Life Skills - Learn valuable skills that support families, communities, and individual well-being.",
      "Pathway to Nursing or Healthcare Careers - Use caregiving as a stepping stone to further education in health or social care.",
      "Emotional Fulfillment - Make a real difference in people’s lives by offering support and comfort.",
      "Culturally Sensitive Training - Learn how to care for clients from various backgrounds with respect and compassion.",
      "International Certification - Earn recognition from Azteca University, helping secure employment globally.",
      "Flexible Career Options - Work in homes, elderly care facilities, rehabilitation centers, or as an independent caregiver.",
    ]
  },
  { 
    id:8,
    title: "Marketing Management", 
    type: "Psychology", 
    image: "/CoursesImages/MarketingManagement.jpg",
    description:'The Marketing Management program at MITL Campus is one of the most dynamic and career-oriented business programs in Sri Lanka. Established eight years ago, this course equips students with the strategic, analytical, and creative skills required to excel in modern marketing environments—both locally and internationally. Known for academic excellence and practical relevance, MITL Campus has developed a Marketing Management curriculum that prepares learners to navigate today’s digital landscape, customer-focused strategies, and brand-driven industries. With marketing roles evolving rapidly due to digital transformation and global competition, professionals with up-to-date marketing knowledge are increasingly in demand. MITL Campus distinguishes itself through its industry-aligned syllabus, experienced faculty, and strong academic partnerships. The Department of Marketing at MITL Campus is committed to developing skilled professionals who can drive business growth, manage brand value, and lead market innovations in diverse sectors.',
    mainFeatures : [
      "Building skills in consumer behavior, market research, branding, digital marketing, and communication.",
      "Offering practical training in marketing campaigns, advertising strategies, and public relations.",
      "Preparing learners for careers in retail, FMCG, services, media, tech, and e-commerce industries.",
      "Integrating theory with real-world marketing projects and case studies.",
      "Enhancing employability through internships, project work, and industry exposure.",
    ],
    targetAudience:[
      "Students and professionals aiming for careers in marketing, branding, or sales.",
      "Entrepreneurs and small business owners looking to strengthen their market presence.",
      "Courses offered in English, with support in Sinhala and Tamil to ensure accessibility.",
      "Ideal for individuals transitioning from general business fields into specialized marketing roles.",
      "Delivered by industry-experienced marketers and marketing educators.",
      "Certification awarded by Azteca University in North America, providing international credibility and recognition.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Marketing Management",
        points:[
          "Introduction to Marketing – Fundamentals of marketing, functions, and market environments",
          "Consumer Behavior – Understanding customer needs, motivations, and buying patterns",
          "Market Research Basics – Data collection, analysis, and interpreting consumer insights",
          "Product and Brand Management – Developing and managing product portfolios and brand identities",
          "Advertising and Promotion – Creating effective advertising strategies and promotional campaigns",
          "Sales and Distribution – Sales techniques, channel management, and retail strategies",
          "Digital Marketing Essentials – SEO, email marketing, social media, and web analytics",
          "Public Relations and Corporate Communication – Managing brand reputation and stakeholder communication",
          "Marketing Ethics and Legal Aspects – Responsible advertising, data privacy, and consumer rights",
          "Practical Marketing Projects – Designing and presenting a marketing plan for real-world application",
        ]
      },
      {
        title:"Diploma Level in Marketing Management",
        points:[
          "Strategic Marketing Management – Market segmentation, targeting, positioning, and growth strategies",
          "Integrated Marketing Communications (IMC) – Coordinating advertising, PR, digital, and sales promotions",
          "E-commerce and Online Business – Running and marketing digital platforms and online stores",
          "Customer Relationship Management (CRM) – Building customer loyalty and managing databases",
          "Marketing Analytics and Metrics – Measuring campaign performance and using KPIs",
          "Branding and Identity Strategy – Developing brand equity and managing global brands",
          "Services Marketing – Marketing strategies for service industries (banking, hospitality, etc.)",
          "International Marketing – Understanding global markets, cultural factors, and export marketing",
          "Content Marketing and Social Media – Creating engaging content for platforms like Instagram, LinkedIn, YouTube",
        ]
      },
      {
        title:"Degree Level in Marketing Management (BBA in Marketing)",
        points:[
          "Marketing Theories and Contemporary Practice – Evolution of marketing thought and current trends",
          "Advanced Consumer Psychology – Behavioral science in marketing and neuromarketing",
          "Product Innovation and Lifecycle Management – Idea generation, product development, and market entry",
          "Global Brand Strategy – Managing multi-national branding and localization challenges",
          "Big Data and Marketing Intelligence – Using large datasets to predict market trends and behavior",
          "Entrepreneurship and Marketing Innovation – Start-up marketing, MVPs, and go-to-market strategies",
          "Sustainability and Ethical Marketing – Green marketing and corporate social responsibility (CSR)",
          "Retail and Merchandising Management – Store layout, shopper behavior, and point-of-sale marketing",
          "Digital Marketing Strategy and Leadership – Integrating AI, automation, and influencer marketing",
          "Research Project and Internship – Final-year project involving fieldwork and a supervised internship in a marketing firm"
        ]
      },
    ],
    Benefits:[
      "Versatile Career Opportunities - Marketing opens doors in media, retail, consulting, tech, healthcare, and more.",
      "Industry-Relevant Skills - Gain expertise in digital marketing, branding, and customer engagement.",
      "Strategic Thinking and Creativity - Learn how to think analytically and creatively to solve business problems.",
      "Entrepreneurial Edge - Ideal for individuals launching businesses or working in start-ups.",
      "Global Market Readiness - Learn how to adapt campaigns for international audiences.",
      "Professional Growth - Fast-track your way to leadership roles in sales, branding, or corporate marketing.",
      "International Recognition - With Azteca University certification, graduates are equipped with a globally respected qualification.",
    ]
  },
  { 
    id:9,
    title: "Cosmetology", 
    type: "Psychology", 
    image: "/CoursesImages/Cosmetology.jpg",
    description:' The Cosmetology Studies program at MITL Campus is a sought-after vocational training course designed for individuals passionate about beauty, wellness, and personal care. Launched eight years ago, the program offers a well-rounded curriculum that equips students with the skills needed to pursue successful careers in the beauty industry—locally and globally. Renowned for its commitment to practical excellence and creativity, MITL Campus has developed a Cosmetology program that blends traditional beauty practices with modern techniques and technologies. It stands out for its industry-aligned training, qualified instructors, and international certification. As beauty and wellness industries expand across the world, professionally trained cosmetologists are in increasing demand. MITL Campus is proud to contribute to this field by offering a program that prepares learners for careers in salons, spas, media, fashion, healthcare, and entrepreneurship. The Cosmetology Department at MITL Campus is dedicated to developing professionals who are skilled, confident, and ready to make a positive impact in the personal care sector.',
    mainFeatures : [
      "Hands-on training in hairdressing, skincare, makeup artistry, nail care, and salon management.",
      "Curriculum aligned with local and international industry standards.",
      "Emphasis on hygiene, client service, creativity, and professionalism.",
      "Use of modern tools, products, and cosmetology technologies.",
      "Real-world experience through salon simulations, workshops, and internships.",
    ],
    targetAudience:[
      "Aspiring beauty professionals seeking formal training in cosmetology.",
      "Individuals aiming to open salons or work in beauty clinics, spas, or the fashion industry.",
      "Courses available in Sinhala, Tamil, and English to ensure accessibility for all learners.",
      "Ideal for school leavers, professionals seeking a career change, and entrepreneurs.",
      "Delivered by certified beauty therapists and experienced cosmetology educators.",
      "Certification awarded by Azteca University in North America, providing global recognition and career mobility.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Cosmetology",
        points:[
          "Introduction to Cosmetology – Overview of the beauty industry, professional ethics, and career paths",
          "Hair Care and Styling – Shampooing, cutting, coloring, and styling techniques",
          "Skin Care and Facial Treatments – Skin types, cleansing, exfoliation, facial massage, and treatments",
          "Makeup Artistry – Day, evening, bridal, and high-fashion makeup",
          "Nail Technology – Manicures, pedicures, nail art, and nail extensions",
          "Salon Hygiene and Sanitation – Sterilization, safety standards, and infection control",
          "Client Communication and Consultation – Building rapport, understanding client needs, and providing recommendations",
          "Basic Anatomy and Physiology – Skin, hair, and nail structures related to cosmetology practices",
          "Product Knowledge and Application – Use and selection of professional beauty products",
          "Entrepreneurship in Beauty Industry – Basics of setting up and managing a small salon or freelance practice",
        ]
      },
      {
        title:"Diploma Level in Cosmetology",
        points:[
          "Advanced Hair Design and Chemical Treatments – Perming, straightening, rebonding, and advanced color correction",
          "Aesthetic Skin Treatments – Microdermabrasion, masks, peels, and advanced facial therapies",
          "Advanced Makeup and Special Effects – Editorial, theatrical, and cinematic makeup",
          "Spa and Body Treatments – Body wraps, scrubs, massages, and wellness treatments",
          "Cosmetology Tools and Equipment – Advanced tool usage, maintenance, and technological integration",
          "Cosmetic Dermatology Basics – Understanding common skin conditions and treatment precautions",
          "Salon and Spa Management – Inventory, marketing, scheduling, and customer service strategies",
          "Professional Portfolio Development – Creating a resume, photography of work, and digital branding",
          "Internship / Live Salon Practice – Real-world experience under the guidance of industry professionals", 
        ]
      },
      {
        title:"Advanced Diploma in Cosmetology ( Degree )",
        points:[
          "Beauty Science and Cosmetic Chemistry – Ingredients, formulations, and reactions in beauty products",
          "Advanced Aesthetics and Anti-Aging Techniques – Non-invasive cosmetic procedures, LED treatments, and serums",
          "Hair and Scalp Disorders – Diagnosis and care approaches for common hair issues",
          "Fashion and Editorial Styling – Working with photographers, fashion designers, and models",
          "Global Beauty Trends and Cultural Practices – Traditional beauty practices and their modern interpretations",
          "Business Development in Cosmetology – Brand building, franchising, and financial management",
          "Legal Aspects and Licensing – Local regulations, insurance, and professional conduct",
          "Capstone Project and Presentation – Showcase of practical skills, research, and innovation in cosmetology",
        ]
      },
    ],
    Benefits:[
      "High Demand and Job Security - Cosmetology professionals are needed in salons, wellness centers, fashion, and media.",
      "Creative and Rewarding Career - Combine artistic talent with practical skills to transform and uplift clients.",
      "Entrepreneurial Opportunities - Start your own salon, freelance business, or beauty consultancy.",
      "Global Work Potential - Skills are transferable to international markets with recognized certification.",
      "Confidence and Self-Esteem Building - Help others look and feel their best while boosting your own confidence.",
      "Flexible Career Paths - Specialize in makeup, hair, skin, nails, or holistic beauty treatments.",
      "International Recognition - With Azteca University certification, your qualifications are globally accepted.",
    ]
  },
  { 
    id:10,
    title: "Hospitality Management", 
    type: "Psychology", 
    image: "/CoursesImages/HospitalityManagement.jpg",
    description:'The Hospitality Management program offered by MITL Campus is one of the most career-focused and respected vocational training programs in Sri Lanka. Established eight years ago, this course provides students and working professionals with the practical knowledge and management skills necessary to thrive in the global hospitality industry. Recognized for academic excellence and hands-on training, MITL Campus equips learners with competencies in customer service, operations, event planning, and tourism management. The program is ideal for those aspiring to work in hotels, resorts, restaurants, travel companies, and event management. In today’s interconnected world, the demand for skilled hospitality professionals is on the rise. MITL Campus stands out due to its strong industry links, qualified faculty, and internationally recognized curriculum that blends operational skills with leadership development. The Hospitality Management Department is committed to nurturing talent and preparing graduates to meet the evolving needs of the service sector in both local and international markets.',
    mainFeatures : [
      "Developing strong customer service, communication, and interpersonal skills.",
      "Practical training in hotel operations, front office, food & beverage service, and housekeeping.",
      "Preparation for careers in hospitality, tourism, airline, event, and luxury service sectors.",
      "Integration of global hospitality trends and digital guest experience technologies.",
      "Internship opportunities and real-world exposure through industry placements.",
    ],
    targetAudience:[
      "School leavers and professionals seeking careers in the hotel and tourism industry.",
      "Individuals interested in event planning, travel services, or luxury brand hospitality.",
      "Courses available in English, Sinhala, and Tamil to ensure wide accessibility.",
      "Suitable for those aiming to become hospitality entrepreneurs or work abroad.",
      "Delivered by industry-experienced professionals and hospitality management experts.",
      "Certification awarded by Azteca University in North America, ensuring global recognition.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Hospitality Management",
        points:[
          "Introduction to Hospitality and Tourism Industry – Overview of global hospitality, career paths, and customer service fundamentals",
          "Front Office Operations – Reservation systems, check-in/out processes, and guest handling",
          "Housekeeping Management – Cleaning standards, linen management, and room maintenance",
          "Food and Beverage Service – Table settings, restaurant operations, barista skills",
          "Hospitality English and Communication – Professional communication, guest interaction, complaint handling",
          "Basic Culinary Skills – Introduction to food preparation, kitchen hygiene, and menu basics",
          "Event Planning Essentials – Organizing small-scale events, banquets, and conferences",
          "Hospitality Technology Tools – PMS (Property Management Systems), POS systems, and booking platforms",
          "Health, Safety, and Hygiene – Safety regulations, food safety, and risk management",
          "Customer Service Excellence – Building loyalty and delivering high-quality guest experiences",
        ]
      },
      {
        title:"Diploma Level in Hospitality Management",
        points:[
          "Hotel Operations Management – Managing hotel departments, SOPs, and service delivery",
          "Food Production and Kitchen Management – Cooking techniques, nutrition, inventory control",
          "Advanced Front Office and Reservation Systems – Yield management, overbooking strategies, and guest profiling",
          "Hospitality Sales and Marketing – Promoting hotel services, online marketing, and branding",
          "Event and Conference Management – Organizing weddings, business events, and special functions",
          "Tourism and Travel Management – Destination marketing, tour operations, and itinerary design",
          "Financial Management in Hospitality – Budgeting, cost control, revenue management",
          "Human Resource Management in Hospitality – Staff recruitment, training, performance appraisal",
          "Hospitality Law and Ethics – Licensing, consumer rights, workplace safety and standards",
        ]
      },
      {
        title:"Degree Level in Hospitality and Tourism Management",
        points:[
          "Strategic Hospitality Management – Long-term planning, innovation, and competitive positioning",
          "Sustainable Tourism and Eco Hospitality – Green practices, ethical tourism, and environmental impact",
          "Luxury Brand and Service Management – Managing high-end hotels, spas, and personalized guest services",
          "Global Hospitality Trends and Cultural Intelligence – Working with international guests and adapting to cultural differences",
          "Leadership and Organizational Behavior in Hospitality – Team leadership, conflict resolution, and motivation",
          "Digital Transformation in Hospitality – Smart hotels, mobile apps, AI in guest services",
          "Revenue and Asset Management – Pricing strategies, forecasting, and maximizing occupancy",
          "Strategic Marketing for Hospitality and Tourism – Market segmentation, digital advertising, influencer marketing",
          "Research Methodology and Project Development – Conducting industry research, data analysis, and academic writing",
          "Industry Internship and Final Thesis – Real-world experience in a 4/5-star hotel or tourism organization",
        ]
      },
    ],
    Benefits:[
      "Diverse Career Opportunities - Work in hotels, resorts, airlines, cruises, event companies, and travel agencies.",
      "Global Mobility - Skills are transferable internationally, ideal for working abroad.",
      "Practical and Professional Skills - Hands-on experience ensures readiness for real-world challenges.",
      "Strong Entrepreneurial Foundation - Start your own hotel, guesthouse, restaurant, or travel agency.",
      "People-Centered Work - Engage with different cultures, create memorable guest experiences.",
      "Flexible Career Pathways - Opportunities in operations, customer service, management, and consultancy.",
      "International Certification - With Azteca University certification, you gain recognition that opens global doors.",
    ]
  },
  { 
    id:11,
    title: "Pre School & Primary Teaching", 
    type: "Psychology", 
    image: "/CoursesImages/PreSchool&PrimaryTeaching.jpg",
    description:'The Pre-School and Primary Teaching program at MITL Campus is one of the most respected and well-established teacher training courses in Sri Lanka. Introduced eight years ago, the program equips aspiring educators with the knowledge, skills, and confidence to teach and nurture young children during their most formative years. MITL Campus is committed to developing qualified early childhood educators who are prepared to support the cognitive, emotional, and social development of children. With a strong focus on pedagogy, child psychology, and creative learning, the program combines theory with hands-on practice in real classroom environments. As demand for high-quality early childhood education continues to grow globally, this program serves as a foundation for learners who wish to build meaningful careers in education—whether in Sri Lanka or abroad. The Department of Early Childhood and Primary Education at MITL Campus ensures that graduates are not only competent teachers but also caring mentors, dedicated to the holistic development of children.',
    mainFeatures : [
      "Training in child-centered teaching methods and classroom management.",
      "Emphasis on child development, emotional intelligence, and inclusive education.",
      "Practical teaching experience through placements in preschools and primary schools.",
      "Focus on integrating play-based, creative, and interactive learning strategies.",
      "Guidance on using modern educational tools and technology in early childhood classrooms.",
    ],
    targetAudience:[
      "Individuals passionate about working with young children and supporting early education.",
      "School leavers, parents, and professionals seeking teaching qualifications.",
      "Courses available in English, Sinhala, and Tamil for broader accessibility.",
      "Ideal for those wishing to become preschool teachers, daycare providers, or primary educators.",
      "Delivered by experienced educators, child psychologists, and curriculum developers.",
      "Certification awarded by Azteca University in North America, offering global academic credibility.",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Pre-School and Primary Teaching",
        points:[
          "Introduction to Early Childhood Education – The role of preschool education and early learning foundations",
          "Child Development and Psychology – Stages of development from birth to age 8, learning behavior",
          "Teaching Methodologies for Young Learners – Play-based learning, storytelling, and activity-based teaching",
          "Language and Literacy Skills – Teaching reading, writing, phonics, and basic vocabulary",
          "Numeracy for Early Grades – Introduction to numbers, shapes, and problem-solving",
          "Creative Arts in the Classroom – Music, drama, drawing, and movement for early learners",
          "Health, Nutrition, and Safety – Hygiene, child safety, and basic health education",
          "Classroom Management and Discipline – Managing behavior, routines, and child engagement",
          "Working with Parents and Communities – Building positive relationships with families",
          "Teaching Practice and Observation – Supervised teaching in real preschool/primary settings",
        ]
      },
      {
        title:"Diploma Level in Pre-School and Primary Teaching",
        points:[
          "Advanced Child Psychology – Emotional regulation, learning disabilities, and behavioral challenges",
          "Curriculum Development for Early Grades – Designing age-appropriate and inclusive lesson plans",
          "Educational Technology for Children – Using digital tools, apps, and e-learning platforms",
          "Inclusive Education Practices – Teaching children with special needs in mainstream settings",
          "Language Acquisition in Young Learners – Bilingual/multilingual teaching strategies",
          "Assessment and Evaluation Methods – Monitoring and documenting child progress",
          "Classroom Creativity and Innovation – Creating engaging learning environments with limited resources",
          "Early Childhood Law and Ethics – Legal responsibilities and professional standards",
          "Teaching Practice and Reflective Journaling – Extended teaching sessions with mentor feedback",
        ]
      },
      {
        title:"Degree in Early Childhood and Primary Education (B.Ed.)",
        points:[
          "Philosophy and Foundations of Education – Global and local perspectives on early childhood education",
          "Advanced Pedagogical Theories and Practices – Constructivism, Montessori, Reggio Emilia approaches",
          "Language and Literacy Development – Supporting children’s reading, writing, and communication skills",
          "Mathematics and Science for Primary Levels – Inquiry-based learning for foundational STEM education",
          "Curriculum Leadership and Policy – Curriculum planning, education systems, and reforms",
          "Research Methods in Education – Conducting educational research and writing academic reports",
          "Special Education and Child Advocacy – Supporting vulnerable children and promoting equity",
          "Art, Drama, and Movement Therapy – Using the arts for emotional development and healing",
          "Leadership and Management in Schools – School administration, team building, and policy implementation",
          "Capstone Project and Internship – Final teaching project and school-based internship",
        ]
      },
    ],
    Benefits:[
      "Meaningful Career Path - Make a difference in children’s lives during their critical development years.",
      "High Employment Potential - Opportunities in preschools, primary schools, daycare centers, and NGOs.",
      "Pathway to Further Study - Eligibility for advanced degrees in education, child psychology, or special education.",
      "International Career Options - Teaching qualifications recognized in many countries.",
      "Creative and Dynamic Work Environment - Engage in fun, imaginative, and playful learning every day.",
      "Personal and Professional Fulfillment - Develop patience, empathy, and leadership while nurturing young minds.",
      "Recognized Certification - With Azteca University accreditation, graduates gain local and international credibility.",
    ]
  },
  { 
    id:12,
    title: "Information Technology", 
    type: "Psychology", 
    image: "/CoursesImages/InformationTechnology.jpg",
    description:' The Information Technology (IT) program at MITL Campus is a highly sought-after academic and professional training course in Sri Lanka. Launched eight years ago, this program is designed to meet the growing demand for skilled IT professionals in local and global markets. MITL Campus offers a robust curriculum that blends foundational knowledge with hands-on training in software development, networking, cybersecurity, data analysis, and digital innovation. Whether learners are preparing for careers in programming, system administration, or IT project management, this course provides them with the tools and certifications to succeed. In an era where technology drives every industry, MITL Campus stands out for its quality education, industry-relevant teaching, and globally recognized certification. It is ideal for students, career changers, and working professionals looking to upgrade their tech skills. With the rapid pace of digital transformation, the Department of Information Technology at MITL Campus ensures learners are prepared for the challenges and opportunities of the digital economy.',
    mainFeatures : [
      "Training in core IT skills: programming, database management, networking, and cybersecurity",
      "Real-world application through projects, labs, and simulations",
      "Preparation for employment in software development, IT support, data analytics, and web design",
      "Courses aligned with international IT standards and best practices",
      "Access to latest software tools, coding platforms, and digital infrastructure",
    ],
    targetAudience:[
      "School leavers and professionals seeking IT qualifications or career transitions",
      "Individuals interested in web development, app design, software engineering, or data science",
      "Courses available in English, Sinhala, and Tamil to support diverse learners",
      "Ideal for freelancers, aspiring tech entrepreneurs, and government sector employees",
      "Delivered by industry experts and certified IT instructors",
      "Certification awarded by Azteca University in North America, offering global recognition",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Information Technology",
        points:[
          "Introduction to Information Technology – Overview of IT systems, hardware, and software basics",
          "Computer Fundamentals and Operating Systems – Windows/Linux basics, file management, and user settings",
          "Office Automation and Productivity Tools – Microsoft Office, Google Workspace, and cloud collaboration",
          "Fundamentals of Programming – Logic building, algorithms, and introduction to Python/C++",
          "Introduction to Web Design – HTML, CSS, and basic web page development",
          "Database Basics – Introduction to SQL and data management concepts",
          "Computer Networks Essentials – Understanding LAN, WAN, internet, and network devices",
          "Cyber Safety and Ethics – Safe internet use, data protection, and digital responsibility",
          "IT in the Modern Workplace – Applications of IT in business, education, and government",
          "Project and Practical Assessment – Building small IT solutions and presenting case studies",
        ]
      },
      {
        title:"Diploma Level in Information Technology",
        points:[
          "Object-Oriented Programming – Advanced programming in Java, Python, or C#",
          "Database Management Systems – MySQL/Oracle, relational databases, and data handling",
          "Networking and Security – Network configuration, firewalls, and ethical hacking basics",
          "Web Development – Full-stack development with JavaScript, PHP, and responsive design",
          "Data Structures and Algorithms – Efficient problem-solving and coding practices",
          "System Analysis and Design – Planning, designing, and implementing IT solutions",
          "Mobile Application Development – Android/iOS app creation using Flutter or React Native",
          "Software Engineering Principles – Development lifecycle, agile methodologies, version control",
          "IT Project Management – Planning, scheduling, resource allocation, and teamwork",
          "Capstone Project – Development of a real-world software or web application",
        ]
      },
      {
        title:"Degree in Information Technology",
        points:[
          "Advanced Programming and Software Development – Scalable software systems, backend development, APIs",
          "Cloud Computing and Virtualization – AWS, Azure, and deployment of cloud-based applications",
          "Data Science and Big Data Analytics – Python for data analysis, visualization, and machine learning basics",
          "Artificial Intelligence and Machine Learning – Neural networks, predictive modeling, and real-world AI tools",
          "Cybersecurity and Information Assurance – Advanced network security, encryption, and ethical hacking",
          "Internet of Things (IoT) – Sensors, microcontrollers, and smart technology integration",
          "Blockchain and Fintech Technologies – Decentralized systems, cryptocurrency, and fintech applications",
          "IT Entrepreneurship and Innovation – Startup development, product design, and digital marketing",
          "Research Methods in Computing – Academic research, proposal writing, and thesis development",
          "Internship and Industry Exposure – Practical work placement in a tech company or IT department",
        ]
      },
    ],
    Benefits:[
      "Career Opportunities Across Industries - IT skills are in demand in finance, education, healthcare, manufacturing, and government.",
      "High Salary Potential - IT professionals enjoy strong earning power both locally and globally.",
      "Global Job Market Access - Certification and skills open doors to remote work and international careers.",
      "Practical Problem-Solving Skills - Learn to develop real solutions for real problems using technology.",
      "Pathway to Advanced Degrees - Offers a strong foundation for postgraduate study in computer science, AI, or cybersecurity.",
      "Creative and Technical Balance - IT combines innovation, design, and engineering for well-rounded development.",
      "International Recognition - Certified by Azteca University, giving global academic credibility.",
    ]
  },
  { 
    id:13,
    title: "Software Engineering", 
    type: "Psychology", 
    image: "/CoursesImages/SoftwareEngineering.jpg",
    description:'The Software Engineering program at MITL Campus is a premier academic and professional course designed to meet the evolving demands of the global technology industry. Launched eight years ago, this program focuses on equipping students with the knowledge and practical skills needed to design, develop, and manage high-quality software systems. MITL Campus provides a future-focused curriculum that combines core principles of computer science with engineering best practices, ensuring graduates are job-ready and capable of addressing real-world challenges in software development. Students benefit from hands-on project work, exposure to industry-standard tools, and mentorship from experienced professionals. As digital transformation accelerates, software engineers are in high demand across all sectors—from startups to multinational corporations. This program prepares students to become proficient coders, critical thinkers, and innovative problem solvers. The Department of Software Engineering at MITL Campus emphasizes academic excellence, creativity, and professional ethics, ensuring learners are equipped for success in a rapidly changing digital world.',
    mainFeatures : [
      "Comprehensive training in software design, development, testing, and maintenance",
      "Emphasis on modern programming languages, frameworks, and agile methodologies",
      "Real-world projects and internships to build practical experience",
      "Preparation for careers in software engineering, development, testing, DevOps, and project management",
      "Instruction aligned with global industry standards and trends",
    ],
    targetAudience:[
      "School leavers and IT professionals seeking to specialize in software development",
      "Aspiring programmers, app developers, system analysts, and software engineers",
      "Courses delivered in English, Sinhala, and Tamil for broader accessibility",
      "Ideal for students looking to enter the tech industry or pursue advanced IT qualifications",
      "Taught by experienced lecturers, developers, and software architects",
      "Certification awarded by Azteca University in North America, offering international recognition",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in Software Engineering",
        points:[
          "Introduction to Software Engineering – Software development lifecycle, roles, and responsibilities",
          "Programming Fundamentals – Basics of Python/Java, control structures, functions",
          "Object-Oriented Programming (OOP) – Classes, objects, inheritance, and encapsulation",
          "Software Design Principles – Design patterns, modularization, and best practices",
          "Web Development Basics – HTML, CSS, JavaScript, and simple website creation",
          "Database Concepts – Relational models, SQL queries, and data manipulation",
          "Software Testing and Debugging – Unit testing, bug tracking, and quality assurance",
          "Version Control and Collaboration Tools – Git, GitHub, and agile collaboration",
          "Agile and Scrum Basics – Iterative development and teamwork approaches",
          "Mini Project – Developing a functional software application as final assessment",
        ]
      },
      {
        title:"Diploma Level in Software Engineering",
        points:[
          "Advanced Programming Techniques – Data structures, algorithms, recursion, and optimization",
          "Full-Stack Web Development – Front-end (React/Angular) and back-end (Node.js/PHP) technologies",
          "Database Management Systems (DBMS) – PostgreSQL/MySQL, data modeling, indexing, and normalization",
          "Software Architecture and Design – MVC pattern, microservices, and scalable architectures",
          "Mobile Application Development – Building apps for Android/iOS using Flutter or Kotlin",
          "DevOps and Continuous Integration – Docker, CI/CD pipelines, and cloud deployment",
          "Cybersecurity Fundamentals – Secure coding, authentication, and data privacy",
          "Project Management for Software Projects – Using tools like Jira, Trello, and managing sprints",
          "Capstone Project – End-to-end software development project presentation",
        ]
      },
      {
        title:"Degree in Software Engineering (BSc in Software Engineering)",
        points:[
          "Software Requirements Engineering – Gathering, documenting, and managing user and system requirements",
          "Software Project Management – Budgeting, time management, and risk assessment",
          "Advanced Algorithms and Data Structures – Trees, graphs, searching, and sorting",
          "Cloud Computing and SaaS – AWS, Azure, and developing cloud-native applications",
          "Artificial Intelligence and Machine Learning – AI concepts, data models, and ML libraries like TensorFlow",
          "Software Quality Assurance and Testing – Automation testing, test-driven development (TDD)",
          "Software Metrics and Evaluation – Performance measurement, code reviews, and productivity tools",
          "Ethics in Software Development – Privacy, intellectual property, and professional responsibility",
          "Research Methods and Thesis Writing – Academic research, system analysis, and software-based research",
          "Industry Internship – Placement in a software company to gain real-world experience",
        ]
      },
    ],
    Benefits:[
      "Global Career Opportunities - Software engineers are in high demand worldwide across various industries.",
      "High Earning Potential - Competitive salaries with opportunities for rapid career growth.",
      "Creativity and Problem Solving - Work on innovative projects that make a real-world impact.",
      "Remote and Freelance Flexibility - Skills suitable for freelancing, consulting, and remote work globally.",
      "Pathway to Tech Entrepreneurship - Learn how to develop and launch your own software products.",
      "Foundation for Further Study - Provides a solid base for postgraduate study in AI, cybersecurity, and data science.",
      "Globally Recognized Certification- Accredited by Azteca University, enhancing international career mobility.",
    ]
  },
  { 
    id:14,
    title: "Japanese Language", 
    type: "Psychology", 
    image: "/CoursesImages/Japanese .png",
    description:'  The Japanese Language Studies program offered by MITL Campus is one of the most recognized and in-demand language programs in Sri Lanka. Established eight years ago, this course is designed for students and professionals who wish to master the Japanese language for academic advancement, career development, or personal enrichment. As Japan continues to play a key role in the global economy and as Sri Lanka-Japan ties deepen across education, employment, and cultural exchange, the need for Japanese language proficiency is rapidly increasing. MITL Campus has established itself as a leader in language education, offering a carefully structured program that ensures fluency, cultural understanding, and professional applicability. This program is ideal for those seeking opportunities in international business, higher education, translation, tourism, and employment in Japan. With expert instruction and a globally respected certification, MITL Campus is committed to helping learners excel in their Japanese language journey.',
    mainFeatures : [
      "Builds strong skills in Japanese reading, writing, listening, and speaking",
      "Emphasizes grammar, vocabulary, and everyday communication",
      "Offers preparation for JLPT (Japanese Language Proficiency Test) certification",
      "Teaches practical language use in business, travel, and social contexts",
      "Focuses on cultural immersion, etiquette, and traditions relevant to Japan",
    ],
    targetAudience:[
      "Students and professionals planning to work, study, or live in Japan",
      "Those seeking careers in translation, tourism, hospitality, or international business",
      "Individuals preparing for Japanese government-sponsored programs or scholarships",
      "Courses available in Tamil, Sinhala, and English for ease of access",
      "Delivered by trained and experienced Japanese language instructors",
      "Certification awarded by Azteca University in North America, providing global academic recognition",
    ],
    Benefits:[
      "Employment Opportunities - Language skills open doors to work in Japan and Japanese-affiliated companies worldwide.",
      "Cultural Understanding - Gain deep insight into one of the world’s most unique and influential cultures.",
      "Study Abroad Access - Qualify for scholarships and education programs in Japan.",
      "International Business Advantage - Useful for careers in trade, hospitality, logistics, and communication.",
      "Cognitive and Personal Development - Enhances memory, multitasking, and problem-solving skills.",
      "Certification Recognition - JLPT and Azteca University credentials provide academic and professional value.",
      "Tourism and Travel Readiness - Communicate confidently while traveling or working in Japan.",
    ]
  },
  { 
    id:15,
    title: "Korean Language", 
    type: "Psychology", 
    image: "/CoursesImages/Korean.png",
    description:' The Korean Language Studies program at MITL Campus is a well-established and highly sought-after course for students and professionals who aspire to master the Korean language. Running successfully for the past eight years, this program offers a gateway to Korean culture, education, and employment opportunities, both locally and internationally. As South Korea’s influence in global technology, entertainment, and education continues to grow, the demand for Korean language proficiency has surged. MITL Campus meets this need with a professionally designed curriculum, expert instruction, and strong academic guidance that equips learners for academic, personal, and career-related success. Whether your goal is to work in Korea, engage with K-pop and K-drama culture, pursue higher education, or simply communicate fluently, the Korean Language program at MITL Campus provides a solid and immersive learning experience.',
    mainFeatures : [
      "Focus on speaking, listening, reading, and writing skills in Korean",
      "Step-by-step grammar and vocabulary development aligned with TOPIK standards",
      "Cultural immersion through customs, media, and Korean etiquette",
      "Support for academic and professional communication in Korean",
      "Preparation for employment, education, and translation roles",
    ],
    targetAudience:[
      "Students, job seekers, and professionals aspiring to work, study, or live in South Korea",
      "Those pursuing careers in education, tourism, translation, media, or international business",
      "Enthusiasts of Korean culture, entertainment, and language learning",
      "Courses available in Sinhala, Tamil, and English for inclusive access",
      "Classes conducted by qualified Korean language educators with local and international experience",
      "Certification awarded by Azteca University (North America), adding global academic value",
    ],
    Benefits:[
      "Career Advancement – Opportunities in education, tourism, translation, and multinational businesses",
      "Higher Education Access – Eligibility for Korean government scholarships and university admissions",
      "Cultural Connectivity – Engage deeply with K-pop, K-dramas, and Korean heritage",
      "Global Communication Skills – Communicate in a major East Asian language with international relevance",
      "Language Certification – Prepare for TOPIK and receive a globally recognized diploma from Azteca University",
      "Cognitive and Social Development – Boosts memory, focus, and cultural intelligence",
      "Professional Mobility – Opens up travel, work, and study opportunities across Asia and beyond",
    ]
  },
  { 
    id:16,
    title: "English Language", 
    type: "Psychology", 
    image: "/CoursesImages/English.png",
    description:'The English Language Studies program at MITL Campus is one of the most respected and widely enrolled language programs in Sri Lanka. Introduced eight years ago, the course is designed to help students and professionals build a strong command of English for academic, career, and personal growth. As English continues to be the global language of communication, business, science, and education, fluency in English opens the door to countless opportunities. MITL Campus offers a high-quality learning experience, with a curriculum tailored to meet international standards and learner needs across all proficiency levels. The program equips learners with practical and professional language skills, preparing them for further study, international work environments, and confident communication in real world contexts.',
    mainFeatures : [
      "Comprehensive development of reading, writing, speaking, and listening skills",
      "Focus on English grammar, vocabulary building, and effective communication",
      "Preparation for international English proficiency exams such as IELTS and TOEFL",
      "Practical applications of English in academic, business, and social environments",
      "Courses designed for beginner to advanced learners",
    ],
    targetAudience:[
      "Students and professionals seeking to improve their English fluency",
      "Individuals preparing for higher education, job interviews, or international travel",
      "Those aiming for careers in teaching, customer service, public relations, or global business",
      "Courses offered in Sinhala, Tamil, and English to ensure accessibility",
      "Delivered by experienced and qualified English language educators",
      "Certification awarded by Azteca University (North America), providing global recognition and academic credibility",
    ],
    lessonTopics:[
      {
        title:"Certificate Level in English Language",
        points:[
          "Introduction to English Language – History, global importance, and daily applications",
          "Grammar and Sentence Structure – Tenses, articles, parts of speech, and sentence building",
          "Reading Comprehension – Short stories, news articles, and academic texts",
          "Writing Skills – Paragraphs, formal letters, and basic essays",
          "Speaking and Listening Practice – Everyday conversations, public speaking, and listening to native speakers",
          "Vocabulary Development – Common phrases, idioms, and academic vocabulary",
          "English for Daily Life and Work – Telephone etiquette, office communication, and email writing",
          "Introduction to English Literature – Simple poems, fables, and short stories",
          "Digital Literacy in English – Typing, email writing, and using English on online platforms",
          "Cultural Awareness through Language – Cross-cultural communication and global English use",
        ]
      },
      {
        title:"Diploma Level in English Language",
        points:[
          "Advanced Grammar and Sentence Construction – Complex sentence types, conditionals, and reported speech",
          "Essay and Report Writing – Academic writing, business communication, and creative writing",
          "Reading Advanced Texts – Literature excerpts, academic journals, and newspapers",
          "Formal and Informal Speaking Skills – Interview techniques, group discussions, and presentations",
          "Translation and Interpretation Skills – Translating between English and Sinhala/Tamil",
          "English for Media and Journalism – Writing news, articles, blogs, and digital content",
          "Introduction to English Literature and Criticism – Study of plays, poetry, and fiction",
          "Professional English Usage – Workplace communication, customer service, and teamwork",
          "Digital English Communication – Using English for social media, websites, and online platforms",
          "Presentation Skills and Public Speaking – Delivering effective speeches and multimedia presentations",
        ]
      },
    ],
    Benefits:[
      "Career Opportunities – In teaching, business, media, aviation, customer service, and government",
      "Academic Pathways – Prepares students for university studies and international exams",
      "Global Communication – Enables confident interaction in any international setting",
      "Cross-Cultural Understanding – Develops respect and awareness of global cultures",
      "Professional Advancement – Enhances job interviews, presentations, and corporate writing",
      "Cognitive and Personal Growth – Improves critical thinking, creativity, and confidence",
      "Recognized Certification – Globally acknowledged qualification from Azteca University"
    ]
  },
];