import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { NgFor } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SectionComponent,NgFor,FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter)
  }

  team: any[] = [
    {
      name: "name",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta.",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        }
      ]
    },
    {
      name: "name",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta.",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        }
      ]
    },
    {
      name: "name",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta.",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        },
        {
          icon:"",
          url: ""
        }
      ]
    }
  ]
}
