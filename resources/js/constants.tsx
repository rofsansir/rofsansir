
import { Book, Resource, QuizQuestion } from './types';

export const BOOKS: Book[] = [
  { id: 'o-level-bengali-basic-plus', slug: 'o-level-bengali-basic-plus', title: 'O Level Bengali Basic Plus', tag: 'ESSENTIAL', image: '/assets/books/1.png', description: 'A Complete Guide to O Level Bengali - CAIE Subject Code 3204/2 - Paper 02. Focus: Foundational grammar and core concepts.' },
  { id: 'o-level-bengali-composition-plus', slug: 'o-level-bengali-composition-plus', title: 'O Level Bengali Composition Plus', tag: 'BESTSELLER', image: '/assets/books/2.png', description: 'A Complete Guide to O Level Bengali Composition Writing - CAIE Subject Code 3204/1 - Paper 01.' },
  { id: 'o-level-bengali-practice-plus', slug: 'o-level-bengali-practice-plus', title: 'O Level Bengali Practice Plus', tag: 'EXAM PREP', image: '/assets/books/3.png', description: 'Intensive Preparation for Cambridge O Level Bengali 3204 - Paper 1 & 2. Extensive practice materials.' },
  { id: 'o-level-bengali-revision-plus', slug: 'o-level-bengali-revision-plus', title: 'O Level Bengali Revision Plus', tag: 'BESTSELLER', image: '/assets/books/4.png', description: 'Topic-wise Past Paper Practice for CAIE O Level Bengali 3204 with detailed solutions.' },
  { id: 'o-level-bengali-foundation-plus', slug: 'o-level-bengali-foundation-plus', title: 'O Level Bengali Foundation Plus', tag: 'NEW', image: '/assets/books/5.png', description: 'Building Strong Basics in Bengali for O Level Students. Step-by-step integrated approach.' },
];

export interface ExtendedResource extends Resource {
  isPremium?: boolean;
}

export const RESOURCES: ExtendedResource[] = [
  { id: 'r1', title: 'Literature Analysis: Poem "বিদ্রোহী"', type: 'Note', category: 'Paper 2', url: '#', isPremium: false },
  { id: 'r2', title: 'Grammar: Parts of Speech (পদ) Mastery', type: 'Note', category: 'Paper 2', url: '#', isPremium: true },
  { id: 'r3', title: 'Formal Letter Writing Format', type: 'Note', category: 'Paper 1', url: '#', isPremium: false },
  { id: 'r4', title: '2023 May/June Mark Scheme Explained', type: 'Past Paper', category: 'General', url: '#', isPremium: true },
  { id: 'r5', title: 'Academic Vocabulary for Essays', type: 'Note', category: 'General', url: '#', isPremium: true },
  { id: 'r6', title: 'Bengali Punctuation (যতিচিহ্ন) Guide', type: 'Note', category: 'Paper 2', url: '#', isPremium: false },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Which of these is the correct spelling for 'Responsibility' in Bengali?",
    options: ["দায়িত্ব", "দাইত্ব", "দাইত্ত্ব", "দায়িত্ত"],
    correct: 0
  },
  {
    question: "‘নাবিক’- এর সন্ধিবিচ্ছেদ কোনটি?",
    options: ["না + ইক", "না + বিক", "নৌ + ইক", "নাব + ইক"],
    correct: 2
  },
  {
    question: "Choose the correct antonym for 'প্রাচীন' (Ancient).",
    options: ["পুরাতন", "অর্বাচীন", "নতুন", "সেকাল"],
    correct: 1
  },
  {
    question: "‘ইঁদুর কপালে’- এর বিপরীত বাগধারা কোনটি?",
    options: ["অদৃষ্টের পরিহাস", "আমড়া কাঠের ঢেঁকি", "কেউকেটা", "একাদশে বৃহস্পতি"],
    correct: 3
  },
  {
    question: "'অধীন' শব্দের বিপরীত শব্দ কী?",
    options: ["অধিকার", "স্বাধীন", "অধিকারী", "পরাধীন"],
    correct: 1
  },
  {
    question: "'প্রয়াস' শব্দের অর্থ কী?",
    options: ["চেষ্টা", "কাজ", "আশা", "বিশাল"],
    correct: 0
  },
  {
    question: "বাক্য রূপান্তর করো - 'তুমি কি আমাকে সাহায্য করবে না?",
    options: ["তুমি আমাকে সাহায্য করো", "তুমি আমাকে সাহায্য করবে না", "তুমি আমাকে সাহায্য করবে", "তুমি আমাকে সাহায্য না করে পারো না"],
    correct: 2
  },
  {
    question: "Which one is an example of 'দ্বিরুক্ত শব্দ' (Reduplicated word)?",
    options: ["বইপত্র", "মাথা-মুণ্ডু", "মচমচে", "লাল লাল"],
    correct: 2
  },
  {
    question: "Correct the sentence: 'সকল ছাত্ররা উপস্থিত আছে।'",
    options: ["সব ছাত্ররা উপস্থিত আছে।", "সকল ছাত্র উপস্থিত আছে।", "ছাত্ররা সবাই উপস্থিত ছিল।", "সব ছাত্ররাই উপস্থিত আছে।"],
    correct: 1
  },
  {
    question: "শুদ্ধ বানান গুচ্ছ নির্ণয় করুন-",
    options: ["শষ্য, ভুবন ,শ্রদ্ধাঞ্জলি", "সমীচীন, সুষ্ঠ, সাক্ষরতা", "আকাঙ্ক্ষা, গ্রামীণ, দারিদ্র্য", "মুখস্থ, মন্ত্রীসভা, ব্রাহ্মন"],
    correct: 2
  }
];
