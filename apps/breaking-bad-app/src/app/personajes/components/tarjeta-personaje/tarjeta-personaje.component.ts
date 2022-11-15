import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.css'],
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
