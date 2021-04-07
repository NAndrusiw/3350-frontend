import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {JwtModule} from '@auth0/angular-jwt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {QualificationsComponent} from './qualifications/qualifications.component';
import {TextComponent} from './text/text.component';
import {CoursesListComponent} from './instructor/courses-list/courses-list.component';
import {InstructorDashboardComponent} from './instructor-dashboard/instructor-dashboard.component';
import {DemoComponent} from './demo/demo.component';
import {NewInstructorFormComponent} from './new-instructor-form/new-instructor-form.component';
import {BrowseAllCoursesComponent} from './browse-all-courses/browse-all-courses.component';
import {AllInstructorsComponent} from './instructor/all-instructors/all-instructors.component';
import {ViewCourseComponent} from './view-course/view-course.component';
import {DateAgoPipe} from './date-ago.pipe';
import {BrowseOpenTaPositionComponent} from './instructor/browse-open-ta-position/browse-open-ta-position.component';
import {TaResponsesComponent} from './ta-responses/ta-responses.component';
import {UploadTaResponsesComponent} from './department/upload-ta-responses/upload-ta-responses.component';
import {RankApplicantsComponent} from './instructor/rank-applicants/rank-applicants.component';
import {TriggerRankAlgorithmComponent} from './department/trigger-rank-algorithm/trigger-rank-algorithm.component';
import {ExportQuestionsComponent} from './department/export-questions/export-questions.component';
import {BeginQuestionProcessComponent} from './instructor/begin-question-process/begin-question-process.component';
import {TaResponseCardComponent} from './ta-response-card/ta-response-card.component';
import {ImportEnrollmentDataComponent} from './department/import-enrollment-data/import-enrollment-data.component';
import {ViewAllInstructorsComponent} from './instructors/view-all-instructors/view-all-instructors.component';
import {LinkApplicantToCourseComponent} from './link-applicant-to-course/link-applicant-to-course.component';

export function tokenGetter() {
    return localStorage.getItem('Token');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        QualificationsComponent,
        TextComponent,
        CoursesListComponent,
        InstructorDashboardComponent,
        DemoComponent,
        NewInstructorFormComponent,
        BrowseAllCoursesComponent,
        AllInstructorsComponent,
        ViewCourseComponent,
        DateAgoPipe,
        BrowseOpenTaPositionComponent,
        TaResponsesComponent,
        UploadTaResponsesComponent,
        RankApplicantsComponent,
        TriggerRankAlgorithmComponent,
        ExportQuestionsComponent,
        BeginQuestionProcessComponent,
        TaResponseCardComponent,
        ImportEnrollmentDataComponent,
        ViewAllInstructorsComponent,
        LinkApplicantToCourseComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DragDropModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:3000'],
                disallowedRoutes: ['localhost:3000/login', 'localhost:3000/signup'],
            },
        }),
    ],
    providers: [
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: HttpConfigInterceptor,
        //   multi: true
        // }
    ],
    bootstrap: [AppComponent]

})

export class AppModule {
}
