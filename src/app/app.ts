import { Component, signal } from '@angular/core';
import { ListaTarefa } from "./components/lista-tarefa/lista-tarefa";

@Component({
  selector: 'app-root',
  imports: [ListaTarefa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-20-lista-tarefa');
}
