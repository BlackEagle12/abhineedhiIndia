import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { NgFor } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SectionComponent,NgFor,FontAwesomeModule,ObserveElementDirective],
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
      ],
      animation: 'animate__fadeInLeft'
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
      ],
      animation: 'animate__fadeInDown'
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
      ],
      animation: 'animate__fadeInRight'
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
      ],
      animation: 'animate__fadeInLeft'
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
      ],
      animation: 'animate__fadeInRight'
    }
  ]

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
