import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {QualificationsComponent} from './qualifications/qualifications.component';
import {AuthGuard} from './services/auth/auth.guard';
import {DemoComponent} from './demo/demo.component';
import {NewInstructorFormComponent} from './new-instructor-form/new-instructor-form.component';
import {BrowseAllCoursesComponent} from './browse-all-courses/browse-all-courses.component';
import {AllInstructorsComponent} from './instructor/all-instructors/all-instructors.component';
import {ViewCourseComponent} from './view-course/view-course.component';
import {BrowseOpenTaPositionComponent} from './instructor/browse-open-ta-position/browse-open-ta-position.component';
import {TaResponsesComponent} from './ta-responses/ta-responses.component';
import {UploadTaResponsesComponent} from './department/upload-ta-responses/upload-ta-responses.component';
import {ExportQuestionsComponent} from './department/export-questions/export-questions.component';
import {ImportEnrollmentDataComponent} from './department/import-enrollment-data/import-enrollment-data.component';
import {ViewAllInstructorsComponent} from './instructors/view-all-instructors/view-all-instructors.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'demo', component: DemoComponent},
  {path: 'activate-account', component: RegisterComponent},
  {path: 'qualifications', component: QualificationsComponent, canActivate: [AuthGuard]},
  {path: 'users/add-instructor', component: NewInstructorFormComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: BrowseAllCoursesComponent, canActivate: [AuthGuard]},
  {path: 'courses-open', component: BrowseOpenTaPositionComponent, canActivate: [AuthGuard]},
  {path: 'courses/:courseId', component: ViewCourseComponent, canActivate: [AuthGuard]},
  {path: 'users/instructors', component: ViewAllInstructorsComponent, canActivate: [AuthGuard]},
  {path: 'ta-responses', component: TaResponsesComponent, canActivate: [AuthGuard]},
  {path: 'department/upload-responses', component: UploadTaResponsesComponent, canActivate: [AuthGuard]},
  {path: 'department/upload-enrollment', component: ImportEnrollmentDataComponent, canActivate: [AuthGuard]},
  {path: 'department/export-questions', component: ExportQuestionsComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
