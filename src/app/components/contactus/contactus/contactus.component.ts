import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FontAwesomeModule,NgFor, FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  companyPhones: string[] = [
    "020 - 66310402",
    "+91 9767 448888",
    "+91 9503 186868"
  ]

  persons: any[] = [
    {
      name: "Mr. Jitendra Ingale(C.E.O. & Director)",
      email: "mudra.india@gmail.com",
      contactNo: "+91 9503 186868"
    },
    {
      name: "Mr. Niteen Jadhav (Managing Director)",
      email: "niteen@mudra-group.com",
      contactNo: "+91 9503 183838,  +91 9767448888"
    },
    {
      name: "Miss. Vidula Aher (Director)",
      email: "vidula@mudra-group.com",
      contactNo: "+91 9503 184848 , +91 9028 184848"
    },
    {
      name: "Mr. Harish Shrirao (Director)",
      email: "harish@mudra-group.com",
      contactNo: "+91 9503 185858"
    },
    {
      name: "Mr. Mangesh Thorat (Director)",
      email: "mangesh@mudra-group.com",
      contactNo: "+91 9503 187878 ,+91 8446 187878"
    },
  ]
}
