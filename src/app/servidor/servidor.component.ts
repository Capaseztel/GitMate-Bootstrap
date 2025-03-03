import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-servidor',
  imports: [
    NavBarComponent
  ],
  templateUrl: './servidor.component.html',
  styleUrl: './servidor.component.css'
})
export class ServidorComponent {
  AsideToggle = true;
  PageWidth = document.body.offsetWidth;

  Toggle() {
    this.AsideToggle = !this.AsideToggle;
  }

  update() {
    this.PageWidth = document.body.offsetWidth;
  }
}
