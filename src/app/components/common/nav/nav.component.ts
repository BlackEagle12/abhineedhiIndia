import { animate, style, transition, trigger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, RouterLink, FontAwesomeModule, ObserveElementDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  constructor(library: FaIconLibrary, private router: Router) {
    library.addIconPacks(fas)
  }

  responsiveHeaderDisplay: string = "none"
  responsiveSubMenuDisplay: string = "none"

  menuList: any[] = [
    {
      name: "Home",
      link: "/home",
      subMenuList: []
    },
    {
      name: "About us",
      link: "/about",
      subMenuList: []
    },
    {
      name: "Facalities",
      link: "/facilities",
      subMenuList: []
    },
    {
      name: "products & Services",
      link: "/service",
      queryParam: "HPDC",
      subMenuList: [
        {
          name: "HPDC (High pressure die casting)",
          link: "/service",
          queryParam: "HPDC",
          subMenuList: [{}]
        },
        {
          name: "LPDC (Low pressure die casting)",
          link: "/service",
          queryParam: "LPDC",
          subMenuList: [{}]
        },
        {
          name: "GDC (Gravity die casting)",
          link: "/service",
          queryParam: "GDC",
          subMenuList: [{}]
        },
        // {
        //   name: "Sand Casting",
        //   link: "/service",
        //   queryParam: "SAND",
        //   subMenuList: [{}]
        // },
        // {
        //   name: "Shell moulding",
        //   link: "/service",
        //   queryParam: "SHELL",
        //   subMenuList: [{}]
        // },
        // {
        //   name: "Mould base Manufacturing",
        //   link: "/service",
        //   queryParam: "Mould",
        //   subMenuList: [{}]
        // },
        // {
        //   name: "Plastic Moulding",
        //   link: "/service",
        //   queryParam: "Plastic",
        //   subMenuList: [{}]
        // },
        // {
        //   name: "Press Tool",
        //   link: "/service",
        //   queryParam: "Press",
        //   subMenuList: [{}]
        // },
      ]
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      subMenuList: []
    },
    {
      name: "Brochure",
      link: "/brchure",
      subMenuList: []
    }
  ]

  socialMediaUrl: string[] = [
    "/assets/Images/social-media-logo/insta_logo.svg",
    "/assets/Images/social-media-logo/facebook_logo.svg",
    "/assets/Images/social-media-logo/whatsapp_logo.svg",
    "/assets/Images/social-media-logo/linkedin_logo.svg"
  ]

  toggleResponsiveMenu = () => {
    if (this.responsiveHeaderDisplay === "none")
      this.responsiveHeaderDisplay = "block"
    else
      this.responsiveHeaderDisplay = "none"
  }

  handleResponsiveMenuClick = (url: string) => {

    console.log(url);
    
    if(url === '/service'){
      if(this.responsiveSubMenuDisplay === 'none')
        this.responsiveSubMenuDisplay = 'flex'
      else
        this.responsiveSubMenuDisplay = 'none'
      return;
    }

    this.router.navigateByUrl(url)
    this.responsiveHeaderDisplay = "none"
  }

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
