import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonajesModule } from '../personajes/personajes.module';
import { PersonajesRoutingModule } from '../personajes/personajes-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PersonajesModule,
    PersonajesRoutingModule
  ],
  exports: [SidebarComponent],
})
export class SharedModule {}
