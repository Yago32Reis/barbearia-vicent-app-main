import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

interface Plan {
  name: string;
  description: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, CurrencyPipe] 
})
export class PlanosPage implements OnInit {

  plans: Plan[] = [
    { name: 'Plano 1 - Corte (Um pente)', description: 'Serviço uma vez por semana', price: 80.00, selected: false },
    { name: 'Plano 2 - Corte Máquina (Degradê)', description: 'Serviço uma vez por semana', price: 100.00, selected: false },
    { name: 'Plano 3 - Corte Máquina/Tesoura (Degradê)', description: 'Serviço uma vez por semana', price: 120.00, selected: false },
    { name: 'Plano 4 - Combo Corte + Barba Simples', description: 'Serviço uma vez por semana', price: 140.00, selected: false },
    { name: 'Plano 5 - Combo Corte + Barba Rústica', description: 'Serviço uma vez por semana', price: 160.00, selected: false },
  ];

  totalPrice: number = 0;

  constructor() { }

  ngOnInit() {
    // Aqui você pode adicionar lógica para carregar o plano ativo do usuário, se houver
  }

  togglePlanSelection(index: number) {
    // Lógica para permitir apenas um plano selecionado por vez (exclusividade)
    this.plans.forEach((plan, i) => {
      plan.selected = (i === index) ? !plan.selected : false;
    });
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.plans
      .filter(p => p.selected)
      .reduce((sum, p) => sum + p.price, 0);
  }
}