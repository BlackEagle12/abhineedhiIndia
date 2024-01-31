import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-arrow',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './right-arrow.component.html',
  styleUrl: './right-arrow.component.css'
})
export class RightArrowComponent {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }
  
}
