import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valorUno = 0;
  valorDos = 0;
  resultado = 0;
  caracteresApretados = "";
  operacion = "";

  sumar(){
    this.resultado = this.valorUno + this.valorDos;
  }

  restar(){
    this.resultado = this.valorUno - this.valorDos;
  }

  multiplicar(){
    this.resultado = this.valorUno * this.valorDos;
  }

  dividir(){
    this.resultado = this.valorUno / this.valorDos;
  }

  tomarNumero(numero:string){
    this.caracteresApretados += numero;
  }

  realizarOperacion(caracter:string){
    //debugger;
    if(this.valorUno==0 && (caracter == '+' || caracter == '-' || caracter == '*' || caracter == '/') ){
      this.valorUno = parseFloat(this.caracteresApretados);
      this.operacion = caracter;
      this.caracteresApretados = "";
    }

    if(caracter == '='){
      this.valorDos = parseFloat(this.caracteresApretados);
      if(this.operacion == "+"){
        this.sumar();
        this.caracteresApretados = this.resultado.toString();
      }else if(this.operacion == "-"){
        this.restar();
        this.caracteresApretados = this.resultado.toString();
      }else if(this.operacion == "*"){
        this.multiplicar();
        this.caracteresApretados = this.resultado.toString();
      }else if(this.operacion == "/"){
        this.dividir();
        this.caracteresApretados = this.resultado.toString();
      }
    }

  }

}
