import { Component, ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('name', { static: false, }) nameInputRef: ElementRef;


  title = 'firstProject';


  // clientes = []; // variavel tipo array/lista 
  // cliente = ""; //variavel tipo string


  // AddCliente(){
  //   this.clientes.push(this.cliente)
  // }

  // customer = {
  //   "name": "Alfreds Futterkiste",
  //   "city": "Berlin",
  //   "country": "Germany"
  // };




  ionViewDidEnter() {
    
  }



}
