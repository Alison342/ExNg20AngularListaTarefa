import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { TarefaModel } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa',
  imports: [],
  templateUrl: './tarefa.html',
  styleUrl: './tarefa.css'
})
export class Tarefa {
  tarefa = input<TarefaModel>();
  tarefaExcluida: OutputEmitterRef<TarefaModel> = output<TarefaModel>();
  tarefaConcluida: OutputEmitterRef<TarefaModel> = output<TarefaModel>();

  removerTarefa() {
    const tarefa = this.tarefa();
    if (tarefa) {
      this.tarefaExcluida.emit(tarefa);
    }
  }

  concluirTarefa() {
    const tarefa = this.tarefa();
    if (tarefa) {
      this.tarefaConcluida.emit(tarefa);
    }
  }

  corFundoTarefa(): string {
    const tarefa = this.tarefa();
    if (tarefa?.status === 'Concluída') {
      return '#4CAF50';
    }
    if (tarefa?.status === 'Em Progresso') {
      return '#fff23fff';
    }
    if (tarefa?.status === 'Pendente') {
      return '#cf224dff';
    }
    return '';
  }
}
