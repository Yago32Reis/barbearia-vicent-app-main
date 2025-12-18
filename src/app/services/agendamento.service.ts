import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private servicosSelecionados: any[] = [];
  private valorTotal: number = 0;

  constructor() { }

  // Salva os dados selecionados
  setDadosAgendamento(servicos: any[], total: number) {
    this.servicosSelecionados = servicos;
    this.valorTotal = total;
  }

  // Recupera os dados na página de Agenda
  getDados() {
    return {
      servicos: this.servicosSelecionados,
      total: this.valorTotal
    };
  }
}