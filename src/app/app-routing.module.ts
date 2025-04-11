import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'library',
    component: LibraryComponent,
    data: { breadcrumb: 'Library' },
    children: [
      {
        path: 'lessons',
        component: LessonsComponent,
        data: { breadcrumb: 'Lessons' },
        children: [
          { path: ':lessonName', component: LessonDetailComponent, data: { breadcrumb: 'Lesson Name' } },
        ],
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
