import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';

  clientes = []; // variavel tipo array/lista 
  cliente = ""; //variavel tipo string


  AddCliente(){
    this.clientes.push(this.cliente)
  }

}
