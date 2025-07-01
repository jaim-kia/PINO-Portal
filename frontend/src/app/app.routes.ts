import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { InboxComponent } from './pages/general/inbox/inbox.component';
import { CalendarComponent } from './pages/general/calendar/calendar.component';
import { DirectoryComponent } from './pages/general/directory/directory.component';
import { FormsComponent } from './pages/general/forms/forms.component';
import { TodoComponent } from './pages/workspace/todo/todo.component';
import { NotesComponent } from './pages/workspace/notes/notes.component';
import { LinksComponent } from './pages/workspace/links/links.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'directory', component: DirectoryComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'links', component: LinksComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}