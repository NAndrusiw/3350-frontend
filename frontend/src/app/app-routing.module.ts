import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {TestQuestionsComponent} from './test-questions/test-questions.component';
import {AuthGuard} from './services/auth/auth.guard';
import {DemoComponent} from './demo/demo.component';
import {NewInstructorFormComponent} from './new-instructor-form/new-instructor-form.component';
import {BrowseAllCoursesComponent} from './browse-all-courses/browse-all-courses.component';
import {AllInstructorsComponent} from './instructor/all-instructors/all-instructors.component';
import {ViewCourseComponent} from './view-course/view-course.component';
import {BrowseOpenTaPositionComponent} from './instructor/browse-open-ta-position/browse-open-ta-position.component';
import {TaResponsesComponent} from './ta-responses/ta-responses.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'demo', component: DemoComponent},
  {path: 'activate-account', component: RegisterComponent},
  {path: 'qualifications', component: QualificationsComponent},
  {path: 'test-questions', component: TestQuestionsComponent},
  {path: 'users/add-instructor', component: NewInstructorFormComponent},
  {path: 'courses', component: BrowseAllCoursesComponent},
  {path: 'courses-open', component: BrowseOpenTaPositionComponent},
  {path: 'courses/:courseId', component: ViewCourseComponent},
  {path: 'users/instructors', component: AllInstructorsComponent},
  {path: 'ta-responses', component: TaResponsesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
