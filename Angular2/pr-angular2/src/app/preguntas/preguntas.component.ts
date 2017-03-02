import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-preguntas',
  templateUrl: 'preguntas.component.html',
  styleUrls: ['preguntas.component.css']
})

export class PreguntasComponent implements OnInit {

preguntasObj = [
    {
      pregunta: "¿España ganará la Euro 2016?",
      si: 22,
      no: 95
    },
    {
      pregunta: "¿Estás aprendiendo Angular 2 en DesarrolloWeb??",
      si: 262,
      no: 3
    },
    {
      pregunta: "¿Has hecho ya algún curso en EscuelaIT??",
      si: 1026,
      no: 1
    }
  ];

  ngOnInit() {
  }

}
