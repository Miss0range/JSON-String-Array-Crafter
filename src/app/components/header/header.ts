import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  //variables for theme control
  @Input() isDarkTheme = false;
  @Output() themeToggle = new EventEmitter<boolean>();

  //when user toggle theme, change theme and emit new theme value back to app.ts to notice the update
  onThemeToggle(){
    this.isDarkTheme = !this.isDarkTheme;
    this.themeToggle.emit(this.isDarkTheme);
  }

}
