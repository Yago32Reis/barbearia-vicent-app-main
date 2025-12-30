import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Adicione CurrencyPipe
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

interface Service {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html', // CORRIGIDO: nome de arquivo sem acento
  styleUrls: ['./servicos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, CurrencyPipe] // Adicione CurrencyPipe
})
export class ServicosPage implements OnInit { // CORRIGIDO: Nome da classe sem acento

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

  constructor() { }

  ngOnInit() {
    this.calculateTotal(); 
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