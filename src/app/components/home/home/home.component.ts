import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { CastingSamplesComponent } from '../casting-samples/casting-samples.component';
import { TeamComponent } from '../team/team.component';
import { VideoComponent } from '../video/video.component';
import { ClientsComponent } from '../clients/clients.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,AboutComponent, NumbersComponent,CastingSamplesComponent,TeamComponent,VideoComponent,ClientsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  about: any = {
    title: "WE ARE Abhinitee india",
    imgUrl: "/assets/Images/MANUFACTURING-COMPETENCY/ASSEMBLY/DSC04646-updated.jpg",
    storyHeading: "THE BRAND STORY",
    story: "AbhiniteeIndia stands at the forefront of precision engineering, specializing in the manufacturing of a diverse range of dies tailored to meet the exacting needs of industries worldwide. With a focus on excellence and innovation, we take pride in our expertise in High-Pressure Die Casting (HPDC), delivering superior quality dies that elevate production efficiency and product integrity. While our proficiency in Low-Pressure Die Casting (LPDC) and other casting techniques remains unparalleled, it is our mastery of HPDC that truly sets us apart. Combining cutting-edge technology with meticulous craftsmanship, we strive to exceed industry standards and surpass client expectations at every turn. Partner with AbhiniteeIndia for precision, reliability, and innovation in die manufacturing, where HPDC takes center stage in our commitment to excellence"
  }
}
