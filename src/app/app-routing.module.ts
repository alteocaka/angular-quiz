import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { ResultComponent } from './Components/result/result.component';
import { CreateComponent } from './Components/create/create.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: 'create', component: CreateComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
