export interface Course {
  id: string;
  title: string;
  grade: string;
  board: string;
  groups: string[];
  subjects: string[];
  description: string;
  timing: string;
  features: string[];
  estimatedFee: number;
}

export interface InquiryFormData {
  studentName: string;
  phone: string;
  selectedGrade: string;
  group?: string;
  preferredShift: 'Morning' | 'Evening';
  message?: string;
  createdAt?: string;
}

export interface SubmissionRecord extends InquiryFormData {
  id: string;
  createdAt: string;
  status: 'Pending' | 'Contacted' | 'Enrolled';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  qualification: string;
  experience: string;
  photoUrl: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  gradeAchieved: string;
  percentage: string;
  comment: string;
  rating: number;
  year: string;
  avatarUrl: string;
}

export interface Metric {
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
}
