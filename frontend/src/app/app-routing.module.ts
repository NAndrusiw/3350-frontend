import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {TestQuestionsComponent} from './test-questions/test-questions.component';
import {AuthGuard} from './services/auth/auth.guard';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'demo', component: DemoComponent},
  {path: 'activate-account', component: RegisterComponent},
  {path: 'qualifications', component: QualificationsComponent},
  {path: 'test-questions', component: TestQuestionsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
