import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faS, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, RouterLink, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  constructor(library: FaIconLibrary, private router: Router) {
    library.addIconPacks(fas)
  }

  responsiveHeaderDisplay: string = "none"

  menuList: any[] = [
    {name : "Home", link:"/home"},
    {name : "About us", link:"/about"},
    {name : "Facalities", link:"/facilities"},
    {name : "Services", link:"/service"},
    {name : "Contact Us", link:"/contact-us"}
  ]

  socialMediaUrl: string[] = [
    "/assets/Images/social-media-logo/insta_logo.svg",
    "/assets/Images/social-media-logo/facebook_logo.svg",
    "/assets/Images/social-media-logo/whatsapp_logo.svg",
    "/assets/Images/social-media-logo/linkedin_logo.svg"
  ]

  toggleResponsiveMenu = () => {
    if(this.responsiveHeaderDisplay === "none")
      this.responsiveHeaderDisplay = "block"
    else
      this.responsiveHeaderDisplay = "none"
  }

  handleResponsiveMenuClick = (pageName:string) => {
    let url = "/home";
    this.menuList.forEach(menu => {
      if(menu.name === pageName)
        url = menu.link
    });
    this.router.navigateByUrl(url)
    this.responsiveHeaderDisplay = "none"
  }
}
