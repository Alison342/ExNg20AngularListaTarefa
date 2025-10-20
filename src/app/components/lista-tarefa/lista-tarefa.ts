import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaModel } from '../../models/tarefa';
import { Tarefa } from '../tarefa/tarefa';

@Component({
  selector: 'app-lista-tarefa',
  imports: [Tarefa, FormsModule],
  templateUrl: './lista-tarefa.html',
  styleUrl: './lista-tarefa.css'
})
export class ListaTarefa {
  tarefas = signal<TarefaModel[]>([]);
  novaTarefa = signal<TarefaModel>({ id: 0, descricao: '', status: 'Pendente' });

  totalTarefas = computed(() => this.tarefas().length);

  adicionarTarefa() {
    this.novaTarefa.update(tarefa => ({
      ...tarefa,
      id: this.tarefas().length + 1
    }));
    this.tarefas.set([...this.tarefas(), this.novaTarefa()]);
    this.novaTarefa.set({ id: 0, descricao: '', status: 'Pendente' });
  }

  onTarefaExcluida(tarefa: TarefaModel) {
    this.tarefas.update(tarefas => tarefas.filter(t => t.id !== tarefa.id));
  }

  onTarefaConcluida(tarefa: TarefaModel) {
    tarefa.status = 'Concluída';
    // this.tarefas.update(tarefas => tarefas.filter(t => t.id !== tarefa.id));
  }
}
