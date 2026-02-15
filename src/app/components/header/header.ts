import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  @Input() isDarkTheme = false;
  @Output() themeToggle = new EventEmitter<boolean>();

  onThemeToggle(){
    this.isDarkTheme = !this.isDarkTheme;
    this.themeToggle.emit(this.isDarkTheme);
  }

}
