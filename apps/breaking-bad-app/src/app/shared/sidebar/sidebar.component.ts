/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonajesService } from '../../personajes/services/personajes.service';
import { tap } from 'rxjs';
import { formularioPersonaje } from '../../personajes/interfaces/personaje.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  formulario: FormGroup;
  private estadoInicial: formularioPersonaje;

  constructor(
    private personajeService: PersonajesService,
    private fb: FormBuilder) {

    this.formulario = this.fb.group({
      name: [null],
      category: [null],
      status: [null]
    });
    this.estadoInicial = this.formulario.value;
  }

  get isDisableButtonClear(): boolean {
    return Object.values(this.formulario.value)
      .every((value) => value === null)
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.personajeService.getPersonajePorBusqueda(this.crearCuerpoPeticion())
      .pipe(
        tap(data => {
          this.personajeService.listadoPersonajes$.next(data);
        })).subscribe()
  }

  limpiar(): void {
    this.formulario.reset(this.estadoInicial);
    this.buscar();
  }

  crearCuerpoPeticion(): formularioPersonaje {
    return {
      ...this.formulario.value,
      status: this.determinarStatus(this.formulario.get('status')?.value)
    }
  }

  determinarStatus(status: boolean): string {
    if (status === null) {
      return '';
    }
    return status ? 'alive' : 'deceased'
  }


}
