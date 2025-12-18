import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink] 
})
export class AgendaPage implements OnInit {

  selectedDate: string = new Date().toISOString(); 
  availableTimes: string[] = [];
  selectedTime: string = '08:00'; // Valor inicial conforme imagem

  constructor() { }

  ngOnInit() {
    this.generateAvailableTimes(new Date()); 
  }

  // Helper para formatar HH:MM
  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // --- REGRAS DE NEGÓCIO DE HORÁRIOS (Rule 1, 2, 3, 4) ---
  
  private getSchedule(date: Date): { open: string, close: string } | null {
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    
    // Regra 1 e 2: Fechado Segunda-Feira
    if (dayOfWeek === 1) { // Monday
      return null; 
    } 
    
    // Regra 4: Domingo
    else if (dayOfWeek === 0) { // Sunday
      return { open: '09:30', close: '12:30' };
    } 
    
    // Regra 3: Terça-feira a Sábado
    else if (dayOfWeek >= 2 && dayOfWeek <= 6) { 
      return { open: '09:30', close: '20:00' };
    }
    
    // Regra para Feriados deve ser implementada com uma lista externa.
    return null; 
  }

  // Gera os horários disponíveis (slots de 30 minutos)
  onDateChange(event: any) {
    const date = new Date(event.detail.value);
    this.generateAvailableTimes(date);
    // Tenta selecionar o primeiro horário disponível, se houver
    this.selectedTime = this.availableTimes.length > 0 && this.availableTimes[0] !== 'Fechado' 
                        ? this.availableTimes[0] 
                        : '08:00';
  }

  generateAvailableTimes(date: Date) {
    this.availableTimes = [];
    const schedule = this.getSchedule(date);

    if (!schedule) {
      this.availableTimes = ['Fechado'];
      return;
    }

    const [openHour, openMinute] = schedule.open.split(':').map(Number);
    const [closeHour, closeMinute] = schedule.close.split(':').map(Number);

    let currentTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), openHour, openMinute);
    const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), closeHour, closeMinute);
    
    // Gera slots em intervalos de 30 minutos
    while (currentTime.getTime() < endTime.getTime()) {
      this.availableTimes.push(this.formatTime(currentTime));
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
    
    // Em uma aplicação real, aqui você filtraria esta lista com horários já agendados.
    // Ex: this.availableTimes = this.filterBookedSlots(this.availableTimes, date);
  }

  // --- SIMULAÇÃO DE REGRAS DE CONFLITO (Rule 5 e 6) ---

  async bookAppointment() {
    const dateObj = new Date(this.selectedDate);
    
    if (this.availableTimes[0] === 'Fechado') {
        alert('Este dia está fechado (Segunda-Feira/Feriado) ou não possui horários disponíveis.');
        return;
    }
    
    if (!this.selectedTime || this.selectedTime === '08:00') {
        alert('Por favor, selecione um horário válido.');
        return;
    }

    // SIMULAÇÃO: No mundo real, esta chamada ao backend retornaria o status do agendamento.
    const bookingAttemptSuccessful = true; // Assumimos sucesso na simulação
    
    if (bookingAttemptSuccessful) {
        alert(`Agendamento Solicitado!\nDia: ${dateObj.toLocaleDateString()}\nHorário: ${this.selectedTime}\n\n(A confirmação final viria do servidor.)`);
    } else {
        // SIMULAÇÃO DE CONFLITO (Rule 5 e 6)
        if (Math.random() < 0.5) { 
            // Simula Regra 5: Horário ocupado
            alert('Atenção! Este horário acaba de ser ocupado por outro cliente. Por favor, escolha um dos horários disponíveis hoje.');
            // (Aqui você recarregaria a lista de horários)
        } else {
            // Simula Regra 6: Dia lotado
            alert('A agenda do barbeiro está lotada neste dia. Por favor, escolha outro dia para agendar.');
            // (Aqui você recarregaria o calendário para mostrar os dias disponíveis)
        }
    }
  }
}