import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})

export class EjemploComponent implements OnInit {

  dato = "Creando componentes para DesarrolloWeb.com";

  constructor() {}

  ngOnInit() {
    console.log('componente inicializado...');
  }

}
