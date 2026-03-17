import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Imc} from './imc/imc';
import {Teste} from './teste/teste';

// Define o componente principal
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Imc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Título da aplicação
  protected readonly title = signal('calculo-imc');
}