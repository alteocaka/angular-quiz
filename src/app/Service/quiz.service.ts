import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private API = environment.api;

  constructor(private http: HttpClient) { }

  signUp(){
    // Logic for registering new user to take the quiz.
  }

  getQuestions(): Observable<Question>{
    // Logic for presenting the questions to the quiz template.

    return this.http.get<Question>(this.API);
  }

  onSubmit(){
    // Logic for submiting the questions after answering.
  }

  calculateScore(){
    // Logic for calculating the score of the quiz, based on the trueOrFalse variable.
  }

  // Creating your own quiz:

  createQuiz(){
    // Logic for creating a new quiz.
  }

}
