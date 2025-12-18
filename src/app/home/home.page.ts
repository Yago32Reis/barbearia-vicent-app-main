import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router'; // Adicionado Router aqui

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, RouterLink] 
})
export class HomePage implements OnInit {

  // JUNÇÃO: Injetando o Router no construtor
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // JUNÇÃO: Função para deslogar e voltar para a página de login
  logout() {
    // Caso use login futuramente, aqui você limparia o token (localStorage.clear())
    this.router.navigate(['/auth']);
  }
}