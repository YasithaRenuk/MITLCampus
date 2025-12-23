export type lessonTopicsType = {
  title:string;
  points:string[];
}

export type Course = {
  title: string;
  type: string;
  image: string;
  description:string;
  mainFeatures:string[];
  targetAudience:string[];
  lessonTopics:lessonTopicsType[];
  Benefits:string[];
};

export type Categories = string[];

export const categories:Categories = [
    "All",
    "Languages",
    "Languages",
    "Psychology & Education",
    "Technology & Engineering",
    "Bussiness",
    "Certificate Course"
];


export const courses: Course[] = [
  { 
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
];