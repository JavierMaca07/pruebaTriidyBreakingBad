import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =
    [
        {
            path: '',
            children: [
                { path: 'busqueda', component:HomeComponent },
                { path: '**', redirectTo: 'busqueda' },
            ]
        }
    ]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PersonajesRoutingModule { }
