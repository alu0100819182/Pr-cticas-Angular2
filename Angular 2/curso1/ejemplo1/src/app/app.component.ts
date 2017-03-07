import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Hola';

  setName(name:string){
    this.name = name;
  }

  setName2(name:string){
  this.name = name;
  }
  
}
