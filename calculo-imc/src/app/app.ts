import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define o componente principal
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Título da aplicação
  protected readonly title = signal('calculo-imc');

  // Variáveis do cálculo
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resultado: String = '';

  // Função que calcula o IMC
  CalculoIMC() {
    this.imc = this.peso / (this.altura * this.altura);

    // Classificação do IMC
    if (this.imc < 18.5) {
      this.resultado = "Abaixo do peso normal."
    } else if (this.imc < 24.9) {
      this.resultado = "Peso normal."
    } else if (this.imc < 29.9) {
      this.resultado = "Excesso peso."
    } else {
      this.resultado = "Obesidade."
    }
  }
}