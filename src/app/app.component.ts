import {Component, OnInit} from '@angular/core';
import {PopQuizService} from "./services/pop-quiz.service";
import {Question} from "./models/question";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'pop-quiz';

  currQuestion!: Question;
  solvedQuestions!: Question[];
  isQuizOver!: boolean;
  results!: readonly [number, number];

  constructor(private popQuizService: PopQuizService) {
  }

  ngOnInit(): void {
    this.startExam();
  }

  public startExam(): void {
    this.popQuizService.startExam();
    this.solvedQuestions = [];
    this.currQuestion = this.popQuizService.nextQuestion();
    this.isQuizOver = false;
  }

  userSelectAnswer(answer: string): void {
    this.currQuestion.userAnswer = this.popQuizService.userSelectAnswer(answer);
    this.solvedQuestions.push(this.currQuestion);
    this.currQuestion = this.popQuizService.nextQuestion();
    this.isQuizOver = !(this.currQuestion);
    this.results = this.popQuizService.getScore();
  }

  public finalScore(): void {
    this.results = this.popQuizService.getScore();
  }
}
