
export interface Book {
  id: string;
  slug: string;
  title: string;
  tag: 'NEW' | 'BESTSELLER' | 'ESSENTIAL' | 'EXAM PREP';
  image: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Note' | 'Past Paper' | 'Tips';
  category: 'Paper 1' | 'Paper 2' | 'General';
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}
