import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecativeComponent } from './pages/recative/recative.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'reactivo', component: RecativeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
