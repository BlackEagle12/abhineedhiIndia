import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
