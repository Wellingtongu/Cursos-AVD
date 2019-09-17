import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Clientes } from '../Clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild('name', { static: false, }) nameInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

cliente:Clientes ={
  nome: "",
  idade: null
}

  usuario: string;
  usuarios = [];

  adicionar() {
    // console.log('click in');
    
    this.usuarios.push(this.cliente.nome + " = " + this.cliente.idade)
    this.usuario = '';
    this.nameInputRef.nativeElement.focus();
  
  }

}
