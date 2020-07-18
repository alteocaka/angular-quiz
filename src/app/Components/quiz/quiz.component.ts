import { Component, OnInit } from '@angular/core';
import { Question } from '../../Models/question';
import { QuizService } from '../../Service/quiz.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  questions: Question;

  constructor(private quizService: QuizService, private http: HttpClient) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe((data) => this.questions = data);
  }
}
