import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  listadoPersonajes: Personaje[] = [];
  private unsubscribe$ = new Subject<boolean>();
  showLabel!: boolean;

  constructor(private personajeService: PersonajesService) {
  }

  ngOnInit(): void {
    this.personajeService.listadoPersonajes$
      .pipe(
        takeUntil(this.unsubscribe$)
    ).subscribe((data) => {
      data.length === 0 ? this.showLabel = true : this.showLabel = false; 
      this.listadoPersonajes = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
