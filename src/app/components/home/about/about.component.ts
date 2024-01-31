import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  @Input() title: string = "";
  @Input() imgUrl: string = "";
  @Input() storyHeading: any = "";
  @Input() story: string = "";
}
