import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private userSvc: UsuarioService
    ) {}

  ngOnInit() {
  }

  sair() {
    this.userSvc.logout()
    this.router.navigateByUrl('/login')
  }
}
