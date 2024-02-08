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
    descriptionHeader: "What We Do Actully ",
    storyHeading: null,
    story:`
    Abhinitee India Pvt. Ltd is a company that was established by a group of close colleagues who shared a common goal of working together at the same location. The company\'s board of directors comprises mechanical engineers with a wealth of experience, each with 14 years of industry experience. The objective was to create an organization that could design, manufacture, and assemble quality tools at a competitive cost and in a timely manner, while still providing clients with exceptional service.
    The company began its operations in 2009 with a single machine located in a modest 2500 sq tf area. Since then, ti has expanded significantly, and it now owns a sprawling premises ni Chakan MIDC, spanning over 20000 sq tf of land. The company has also upgraded its tool room facilities to ensure that ti can continue to provide excellent service to its clients.
    Abhinitee India Pvt. Ltd is dedicated to providing clients with high-quality tools that meet their needs, and it is committed to delivering them in a timely and cost-effective manner. The company\'s growth and success can be attributed to its unwavering focus on quality, innovation, and customer satisfaction.
    `
  }
}
