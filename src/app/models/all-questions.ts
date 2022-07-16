import {Question} from "./question";

export const QUESTIONS: Question[] = [
  {
    caption: 'How many LaLiga championships did Real Madrid won?',
    answers: ['10', '24', '35', '42'],
    correctAnswer: 2,
    userAnswer: -1
  },
  {
    caption: 'How many Champions league did Real Madrid won?',
    answers: ['7', '14', '6', '12'],
    correctAnswer: 1,
    userAnswer: -1
  },
  {
    caption: 'Which of the following did not play for Real Madrid',
    answers: ['Luis Figo', 'Arjen Robben', 'Frank Ribery', 'Raul Gonzalez Blanco'],
    correctAnswer: 2,
    userAnswer: -1
  },
  {
    caption: 'Which of the following did not coach Real Madrid',
    answers: ['Antonio Conte', 'Santiago Solari', 'Del Bosque', 'Jose Mourinho'],
    correctAnswer: 0,
    userAnswer: -1
  },
  {
    caption: 'In what year did Real Madrid not take a championship',
    answers: ['1996/1997', '2000/2001', '2010/2011', '2016/2017'],
    correctAnswer: 2,
    userAnswer: -1
  }
];
