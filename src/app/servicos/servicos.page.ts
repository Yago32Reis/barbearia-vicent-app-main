import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular'; // Importado AlertController
import { RouterLink, Router } from '@angular/router';

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

 clienteNome: string = "João";

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

  // Injetando Router e AlertController
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.calculateTotal(); 
  }

  // LÓGICA ATUALIZADA AQUI
  async avancarParaAgenda() {
    // Verifica se algum serviço tem a propriedade 'selected' como true
    const temServicoSelecionado = this.services.some(s => s.selected);

    if (temServicoSelecionado) {
      // Se tiver serviço, avança
      this.router.navigate(['/agenda']);
    } else {
      // Se não tiver, mostra o alerta
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: `Sr. ${this.clienteNome}, por gentileza clique em um de nossos serviços para prosseguir.`,
        buttons: ['OK']
      });

      await alert.present();
    }
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