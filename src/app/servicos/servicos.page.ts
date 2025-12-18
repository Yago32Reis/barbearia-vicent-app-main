import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router'; // Adicionado Router aqui

interface Service {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, CurrencyPipe]
})
export class ServicosPage implements OnInit {

  services: Service[] = [
    { name: 'Corte Máquina (Um Pente)', price: 25.00, selected: false },
    { name: 'Corte Máquina (Degradê)', price: 30.00, selected: false },
    { name: 'Corte Máquina e Tesoura', price: 30.00, selected: false },
    { name: 'Corte Tesoura', price: 35.00, selected: false },
    { name: 'Corte Infantil', price: 35.00, selected: false },
    { name: 'Barba Simples', price: 20.00, selected: false },
    { name: 'Barba Rústica', price: 25.00, selected: false },
    { name: 'Pézinho', price: 10.00, selected: false },
    { name: 'Sobrancelha', price: 10.00, selected: false },
    { name: 'COMBO (Corte + Barba)', price: 40.00, selected: false },
    { name: 'Alisamento', price: 15.00, selected: false },
    { name: 'Relaxamento', price: 15.00, selected: false },
    { name: 'Pigmentação', price: 15.00, selected: false },
  ];

  totalPrice: number = 0;

  // JUNÇÃO: Injetando o Router no construtor
  constructor(private router: Router) { }

  ngOnInit() {
    this.calculateTotal(); 
  }

  // JUNÇÃO: Função para navegar até a página de agenda
  avancarParaAgenda() {
    this.router.navigate(['/agenda']);
  }

  toggleServiceSelection(index: number) {
    this.services[index].selected = !this.services[index].selected;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.services
      .filter(s => s.selected)
      .reduce((sum, s) => sum + s.price, 0);
  }
}