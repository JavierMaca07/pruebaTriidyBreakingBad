import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaPersonajeComponent } from './components/tarjeta-personaje/tarjeta-personaje.component';
import { MaterialModule } from '../material/material.module';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ObtenerLetrasPipe } from './pipes/obtener-letras.pipe';

@NgModule({
  declarations: [TarjetaPersonajeComponent, HomeComponent, ObtenerLetrasPipe],
  imports: [CommonModule, MaterialModule, PersonajesRoutingModule],
  exports: [TarjetaPersonajeComponent, PersonajesRoutingModule, HomeComponent],
})
export class PersonajesModule {}
