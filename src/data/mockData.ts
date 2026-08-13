import { Course, FacultyMember, Testimonial, Metric } from '../types';

export const COURSES: Course[] = [
  {
    id: 'matric-9-10',
    title: 'Matriculation (Secondary Level)',
    grade: 'Class IX & X',
    board: 'Sindh Board (BSEK Karachi)',
    groups: ['Science Group', 'Computer Science Group'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'Biology', 'English', 'Urdu', 'Islamiat', 'Pakistan Studies'],
    description: 'Comprehensive preparation for Class IX and X Sindh Board exams. Deep focus on core concepts, numerical mastery, diagram precision, and 10-year past paper solved drills.',
    timing: 'Evening Shift: 3:30 PM - 7:30 PM',
    features: [
      'Daily Physics, Chemistry & Math interactive lectures',
      'Weekly chapter tests & monthly parent assessment reports',
      'Board-pattern Grand Test Series before annual exams',
      'Air-conditioned, distraction-free classrooms with audio-visual aids'
    ],
    estimatedFee: 4500
  },
  {
    id: 'inter-11-12',
    title: 'Intermediate (Higher Secondary)',
    grade: 'Class XI & XII (Inter Part 1 & 2)',
    board: 'BIEK Karachi (Sindh Board)',
    groups: ['Pre-Engineering', 'Pre-Medical', 'Computer Science (ICS)'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English', 'Urdu', 'Islamiat'],
    description: 'Specialized board-oriented coaching designed for top marks in XI and XII exams. Conceptual clarity for competitive entrance exam foundation alongside BIEK syllabus.',
    timing: 'Morning Shift: 8:00 AM - 12:00 PM | Evening Shift: 4:00 PM - 8:30 PM',
    features: [
      'Experienced professors from top Karachi colleges',
      'Individual doubt-clearing sessions & numerical problem practice',
      'Comprehensive printed chapter notes & formula handbooks',
      'Regular Mock Examinations simulating actual BIEK board papers'
    ],
    estimatedFee: 5500
  },
  {
    id: 'crash-course',
    title: 'Special Batches & Board Crash Course',
    grade: 'Class 9th, 10th, 11th & 12th',
    board: 'BSEK & BIEK Karachi',
    groups: ['All Groups (Science, Pre-Med, Pre-Engg, CS)'],
    subjects: ['Core Sciences', 'Mathematics', 'Computer', 'Language Papers'],
    description: 'Intensive 2-month rapid revision program for students aiming to maximize board marks. Focuses on high-weightage topics, target papers, and time management strategies.',
    timing: 'Flexible Evening Batches & Weekend Drills',
    features: [
      'Targeted coverage of 80% most probable board exam questions',
      '10-Year Past Paper solution workshops with model answers',
      'Fast-track formula and practical diagram revision notes',
      'Personal guidance for students aiming for A+ grades and merit positions'
    ],
    estimatedFee: 4000
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Prof. Tariq Mahmood',
    role: 'Senior Physics Specialist',
    subject: 'Physics (IX, X, XI, XII)',
    qualification: 'M.Sc. Physics (KU) - 18+ Yrs Exp',
    experience: 'Former Head of Dept at Govt College Nazimabad',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    tagline: 'Simplifying complex physical concepts into intuitive visual models for board toppers.'
  },
  {
    id: 'f2',
    name: 'Engr. Shahzaib Khan',
    role: 'Mathematics Master',
    subject: 'Mathematics (IX, X, XI, XII)',
    qualification: 'B.E. Mechanical (NED) - 12+ Yrs Exp',
    experience: 'Specialist in Calculus, Algebra & Coordinate Geometry',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    tagline: 'Transforming math anxiety into problem-solving confidence with short-cut techniques.'
  },
  {
    id: 'f3',
    name: 'Dr. Fatima Zahra',
    role: 'Chemistry & Biology Lead',
    subject: 'Chemistry & Biology',
    qualification: 'M.Phil. Organic Chemistry - 10+ Yrs Exp',
    experience: 'Author of Board Exam Preparation Practice Handbooks',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    tagline: 'Focused on precise chemical equations, organic reaction mechanisms, and anatomical diagrams.'
  },
  {
    id: 'f4',
    name: 'Sir Owais Ahmed',
    role: 'Computer Science Instructor',
    subject: 'Computer Science & IT',
    qualification: 'BS Computer Science (FAST) - 8+ Yrs Exp',
    experience: 'Senior Software Engineer & Board Examiner Specialist',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    tagline: 'Bridging high-school computer syllabus with modern coding logic and algorithm design.'
  }
];

export const METRICS: Metric[] = [
  {
    title: 'Expert Faculty',
    subtitle: 'Qualified Subject Specialists',
    iconName: 'GraduationCap',
    description: 'Highly qualified teachers with decades of combined board exam marking and teaching experience.'
  },
  {
    title: 'Regular Testing',
    subtitle: 'Weekly & Monthly Assessment Reports',
    iconName: 'ClipboardCheck',
    description: 'Weekly chapter tests, monthly performance cards, and comprehensive grand test series before board exams.'
  },
  {
    title: 'Focused Environment',
    subtitle: 'Small Batches & AC Classrooms',
    iconName: 'ShieldCheck',
    description: 'Air-conditioned, distraction-free classrooms with limited batch size to ensure personal attention for every student.'
  },
  {
    title: 'Convenient Location',
    subtitle: 'Heart of Nazimabad Block 3',
    iconName: 'MapPin',
    description: 'Easily accessible campus situated right on Sharah-e-Sher Shah Suri, Nazimabad Block 3, Karachi.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    studentName: 'Syed Hamza Ali',
    gradeAchieved: 'Class X (Matric)',
    percentage: '94.2% (A1 Grade)',
    comment: 'The Nexus Coaching Centre completely changed my study routine. The teachers in Nazimabad Campus-1 explain concepts from basic to board level. The weekly test series gave me total confidence for physics and chemistry papers.',
    rating: 5,
    year: '2024 Sindh Board Exams',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    studentName: 'Ayesha Siddiqui',
    gradeAchieved: 'Class XII (Pre-Medical)',
    percentage: '91.8% (A1 Grade)',
    comment: 'Best coaching center in Nazimabad! The biology and chemistry notes provided by Nexus faculty were exactly on point with BIEK Karachi board pattern. Regular tests kept my preparation consistent throughout the year.',
    rating: 5,
    year: '2024 Board Exams',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    studentName: 'Muhammad Bilal',
    gradeAchieved: 'Class XI (Pre-Engineering)',
    percentage: '89.5% (A1 Grade)',
    comment: 'Sir Shahzaib’s math classes and Sir Tariq’s physics lectures are unmatched. Small batch size meant I could ask any doubt without hesitation. Highly recommended for any student in Nazimabad Block 3!',
    rating: 5,
    year: '2024 Board Exams',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];

export const CAMPUS_DETAILS = {
  name: 'The Nexus Coaching Centre',
  campus: 'Campus-1 (Nazimabad Branch)',
  address: '1/18 - 3B, Sharah-e-Sher Shah Suri, Nazimabad 3 Block 3, Nazimabad, Karachi, Sindh 74600',
  phone: '+92 335 0237119',
  phoneDisplay: '+92 335 0237119',
  whatsappNumber: '923350237119',
  operatingHours: 'Opens 11:30 AM (Monday to Saturday)',
  googleReviewsCount: 32,
  googleRating: 5.0,
  googleMapsUrl: 'https://maps.google.com/?q=1/18+-+3B,+Sharah-e-Sher+Shah+Suri,+Nazimabad+3+Block+3,+Karachi',
  heroBannerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9g9j6IM4vb6v6Bk_0vKdnltGwoqaF3DTgRWREutydBRVkbDsViAx2InyEFzOSHyWLYnKilgGZVdKv-RS7PgaPLpwlSWcwBdnxzluO3RF8sfE-tm8vokpjrPGcexs6ptxctUpl0oiUb34eLximz0oxygzcDgdJc-lOXnQRUxG55aidIQla1qqXyhvA0IF1s6w8OohorR85Jw1rMnjKbr8m3g2JM38ky_ep95kinWFktRMo2T6v2g',
  logoImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2lAmHq7UljP1vPlvkKaXJzTBhirchTTWK2WVqDOjKZfHikBoFPbtXTeuNHZjLKqK8FSRtbfeaHb1gzM3-e6lysAFjs35dks6AQyOzvqbGA9bvlhD2VNHbqcP8h_nkuOoNbBQ4VuE2KKiAhFYIcYPdzKBfGjdLX8LSFm6YJKeBMr5eC4zvW5xtbfIv4aq8s0SYlmTZetYshkJKP6fkdRW4lM_A_mHTt_Tpu4yb34LSJDs59t1syKE73FCZe57jjCI'
};
