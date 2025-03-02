import {Component} from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {TagSelectorComponent} from '../tag-selector/tag-selector.component';

@Component({
  selector: 'app-main-page',
  imports: [
    NavBarComponent,
    TagSelectorComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  AsideToggle = true;
  PageWidth = document.body.offsetWidth;

  Toggle() {
    this.AsideToggle = !this.AsideToggle;
  }

  update() {
    this.PageWidth = document.body.offsetWidth;
  }
}
