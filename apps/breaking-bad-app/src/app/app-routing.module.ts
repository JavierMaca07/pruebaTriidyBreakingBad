import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main', loadChildren: () =>
    import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {path:'**', redirectTo: 'main'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutinModule { }