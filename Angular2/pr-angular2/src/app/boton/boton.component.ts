import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-sino',
  templateUrl: 'boton.component.html',
  styleUrls: ['boton.component.css']
})

export class BotonComponent implements OnInit {

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo;
  }

  ngOnInit() {
  }

}
