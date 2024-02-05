import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FooterComponent,NgFor, ObserveElementDirective],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{

  selectedProduct:any = {};

  products: any = {
    HPDC : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "HPDC (High pressure die casting)",
      description : [
        "We Design and manufactures the We do Design and Manufactures the Casting Dies (GDC, LPDC & HPDC), Assemble dies & shell core boxes with finest quality.",
        "We use authenticated material like, Orvar, Dievar, Doosan, Bohler as a die material on customers choice , follow the standard cycle of roughing , drill & tapping, vacuum hardening cycle , finishing , EDM, wire cut , (in stage inspections) , die spotting , polishing , dismantling ,stress relieving final assembly and dispatch"
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2525.PNG", animation: "animate__fadeInRight"}
      ]
    },
    LPDC : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "LPDC (Low pressure die casting)",
      description : [
        "We Design and manufactures the We do Design and Manufactures the Casting Dies (GDC, LPDC & HPDC), Assemble dies & shell core boxes with finest quality.",
        "We use authenticated material like, Orvar, Dievar, Doosan, Bohler as a die material on customers choice , follow the standard cycle of roughing , drill & tapping, vacuum hardening cycle , finishing , EDM, wire cut , (in stage inspections) , die spotting , polishing , dismantling ,stress relieving final assembly and dispatch"
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2541.PNG", animation: "animate__fadeInRight"}
      ]
    },
    GDC : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "GDC (Gravity die casting)",
      description : [
        "We Design and manufactures the We do Design and Manufactures the Casting Dies (GDC, LPDC & HPDC), Assemble dies & shell core boxes with finest quality.",
        "We use authenticated material like, Orvar, Dievar, Doosan, Bohler as a die material on customers choice , follow the standard cycle of roughing , drill & tapping, vacuum hardening cycle , finishing , EDM, wire cut , (in stage inspections) , die spotting , polishing , dismantling ,stress relieving final assembly and dispatch"
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2529.PNG", animation: "animate__fadeInRight"}
      ]
    },
    SAND : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "Sand Casting",
      description : [
        "We do Design and develop the sand Patterns and cold box core boxes for all kind of foundry lines like Arpa, Disa, Disa match, Tokyo, Sinto , Hans burg . Now a days it is trend of High pressure moulding line and we are experts in making this tooling.",
        "We have designed and developed the cold box core boxes & shell core boxes for all type of core shooters. We have developed core boxes for all core shooters manufacturer. (M/s SPAN, COMPAX, Galaxy, Lampe). In Shell moulding we have developed shouted mould cylinder block, center housing, turbine housing, manifolds, all critical performance oriented automobile items."
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2533.PNG", animation: "animate__fadeInRight"}
      ]
    },
    SHELL : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "Shell moulding",
      description : [
        "We do Design and develop the sand Patterns and cold box core boxes for all kind of foundry lines like Arpa, Disa, Disa match, Tokyo, Sinto , Hans burg . Now a days it is trend of High pressure moulding line and we are experts in making this tooling.",
        "We have designed and developed the cold box core boxes & shell core boxes for all type of core shooters. We have developed core boxes for all core shooters manufacturer. (M/s SPAN, COMPAX, Galaxy, Lampe). In Shell moulding we have developed shouted mould cylinder block, center housing, turbine housing, manifolds, all critical performance oriented automobile items."
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2543.PNG", animation: "animate__fadeInRight"}
      ]
    },
    Mould : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "Mould base Manufacturing",
      description : [
        "We do manufacture the customized mould base for HPDC and Plastic Molds by given customer data. We have manufactured the mould base up to 2500 ton capacity.",
        "We love to do compound degree slider operations and compound degree angular machining works within 20 microns with our HMC machine."
      ],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2540.PNG", animation: "animate__fadeInRight"}
      ]
    },
    Plastic : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "Plastic Moulding",
      description : ["We do labour job like machining of core and cavity with cooling work."],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/IMG_2545.PNG", animation: "animate__fadeInRight"}
      ]
    },
    Press : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "Press Tool",
      description : ["We do labour job like machining of casting and maching of casting fitted with hardened pieces profile work."],
      imageUrls: [
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInLeft"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInDown"},
        {url: "/assets/Images/HPDC-Samples/HPDC.JPG", animation: "animate__fadeInRight"}
      ]
    }    
  }
  constructor(private route:ActivatedRoute, private router: Router ){
  }

  ngOnInit() {
    const product = this.route.queryParams.subscribe(
      param => {
        let para = param['product']
        this.selectedProduct = this.products[para ? para : "HPDC"]
      }
    )    
  }

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
