import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../models/question";

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  @Input()
  question: Question | null;

  @Output()
  selectedAnswer: EventEmitter<string>;

  constructor() {
    this.question = null;
    this.selectedAnswer = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onSelectedAnswer(answer: string): void{
    this.selectedAnswer.emit(answer);
  }

}
