export type ClassLevel = 9 | 10 | 11 | 12;

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export type MathCategory = 
  | 'Number Systems & Logarithms'
  | 'Algebra & Polynomials'
  | 'Geometry & Triangles'
  | 'Circles & Tangents'
  | 'Coordinate & Analytic Geometry'
  | 'Trigonometry'
  | 'Matrices & Determinants'
  | 'Vectors'
  | 'Calculus & Derivatives'
  | 'Integration & Differential Equations'
  | 'Probability & Combinatorics'
  | 'Sequences & Induction'
  | 'Numerical Methods & Optimization'
  | 'Mechanics & Kinematics'
  | 'Laws of Motion & Gravitation'
  | 'Thermodynamics & Heat'
  | 'Fluids & Material Properties'
  | 'Oscillations & Waves'
  | 'Electrostatics & Current Electricity'
  | 'Magnetism & Induction'
  | 'Optics & Wave Theory'
  | 'Modern Physics & Quantum Theory'
  | 'Semiconductors & Electronics';

export interface ChapterOverview {
  summary: string;
  historicalContext?: string;
  learningOutcomes: string[];
  coreFormulas: { label: string; formula: string; explanation?: string }[];
  realWorldApplications: string[];
  keyTheorems?: { title: string; statement: string; importance: string }[];
}

export interface Chapter {
  id: string;
  class: ClassLevel;
  track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics';
  name: string;
  description: string;
  category: MathCategory;
  questionCount: number;
  difficulty?: DifficultyLevel | 'Mixed';
  keyTopics: string[];
  color: 'indigo' | 'emerald' | 'amber' | 'rose' | 'cyan' | 'violet' | 'teal' | 'fuchsia' | 'blue' | 'purple' | 'sky';
  icon: string;
  artTheme: 'logarithm' | 'algebra' | 'triangle' | 'circle' | 'trigonometry' | 'matrix' | 'vector' | 'calculus' | 'integral' | 'conic' | 'coordinate' | 'probability' | 'series' | 'differential';
  formulaHighlight?: string;
  overview?: ChapterOverview;
}

export interface Question {
  id: string;
  class: ClassLevel;
  subject?: 'Mathematics' | 'Physics' | string;
  chapter_id: string;
  chapter?: string;
  question: string;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty?: DifficultyLevel;
  formula?: string;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  isSkipped?: boolean;
  timeSpentSeconds: number;
  timedOut?: boolean;
}

export interface StudentProfile {
  name: string;
  classLevel: ClassLevel;
  section?: string;
}

export interface TestSessionConfig {
  student: StudentProfile;
  mode: 'practice' | 'exam'; // 'practice' = immediate step-by-step feedback; 'exam' = timed mock exam
  timeLimitMinutes?: number;
  questionCount?: number;
}

export interface FilterState {
  classLevel: ClassLevel | 'all';
  difficulty?: DifficultyLevel | 'all';
  category?: string | 'all';
  searchQuery: string;
  chapterId?: string;
}

export interface MathDefinition {
  id: string;
  class: ClassLevel;
  chapterId: string;
  chapterName: string;
  term: string;
  definition: string;
  formula?: string;
  category: string;
  keyPoints?: string[];
  example?: string;
  diagramType?:
    | 'argand_plane'
    | 'matrix_types'
    | 'vector_ops'
    | 'ap_gp_progression'
    | 'series_convergence'
    | 'probability_venn'
    | 'pascal_triangle'
    | 'function_mapping'
    | 'linear_programming'
    | 'trig_addition'
    | 'elevation_depression'
    | 'trig_graph'
    | 'tangent_secant_derivative'
    | 'integral_area_curve'
    | 'straight_line_slopes'
    | 'circle_geometry'
    | 'conics_parabola_ellipse_hyperbola'
    | 'vector_functions_differentiation'
    | 'maclaurin_series_approx'
    | 'sandwich_squeeze_theorem'
    | 'partial_derivatives_surface'
    | 'numerical_newton_secant'
    | 'sets_venn_subsets'
    | 'set_partitions_cells'
    | 'cartesian_product_relation'
    | 'set_representations_forms';
}

export interface MathTheorem {
  id: string;
  class: ClassLevel;
  title: string;
  category: string;
  statement: string;
  condition?: string;
  formula?: string;
  proofOutline?: string[];
  importance?: string;
  example?: string;
  diagramType?: MathDefinition['diagramType'];
}

export interface MathProperty {
  id: string;
  class: ClassLevel;
  title: string;
  category: string;
  description: string;
  formula?: string;
  rules: { label: string; formula: string; note?: string }[];
  example?: string;
}

export interface MathFormulaItem {
  id: string;
  class: ClassLevel;
  topic: string;
  category: string;
  name: string;
  formula: string;
  variablesExplanation?: string;
  notes?: string;
}

export interface ClassInfo {
  level: ClassLevel;
  title: string;
  subtitle: string;
  description: string;
  totalChapters: number;
  totalQuestions: number;
  badgeColor: string;
  accentColor: string;
  focusAreas: string[];
}

export interface LeaderboardEntry {
  id: string;
  uid?: string;
  email?: string;
  studentName: string;
  classLevel: ClassLevel;
  section?: string;
  chapterId?: string;
  chapterName: string;
  mode: 'practice' | 'exam';
  track?: 'Elementary Mathematics' | 'Advanced Mathematics' | 'Elementary Physics' | 'Advanced Physics' | string;
  correctCount: number;
  totalQuestions: number;
  skippedCount?: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
}

export interface UserTestHistory {
  id: string;
  uid?: string;
  email?: string;
  chapterId?: string;
  chapterName: string;
  classLevel: ClassLevel;
  track: string;
  scorePercentage: number;
  correctCount: number;
  totalQuestions: number;
  skippedCount?: number;
  timeSpentSeconds: number;
  formattedTime: string;
  timestamp: number;
  formattedDate: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  classLevel: ClassLevel;
  section?: string;
  createdAt: number;
  testsAttempted: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  totalSkipped?: number;
  accuracy: number;
  history?: UserTestHistory[];
}

export interface TestAttemptAnswer {
  questionId: string;
  questionText: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
  isSkipped?: boolean;
  explanation: string;
}

export type TestAttemptRecord = UserTestHistory;

export interface CandidateRankingProfile {
  candidateId?: string;
  uid?: string;
  email?: string;
  studentName: string;
  classLevel: ClassLevel;
  track: string;
  overallAccuracy: number;
  averageAccuracy?: number;
  totalCorrect: number;
  totalQuestions: number;
  totalWrong: number;
  totalSkipped?: number;
  negativeAnswers?: number;
  totalTestsAttempted?: number;
  testsAttempted?: number;
  totalTimeSpentSeconds: number;
  bestChapterEntries?: LeaderboardEntry[];
  chapterAttempts?: LeaderboardEntry[];
  latestAttemptTimestamp?: number;
  latestTimestamp?: number;
  ratingTitle?: string;
  ratingScore?: number;
}

