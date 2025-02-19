import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output()
  public onToggle: EventEmitter<any> = new EventEmitter<any>();

  Toggle() {
    this.onToggle.emit()
  }
}
