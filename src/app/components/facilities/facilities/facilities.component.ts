import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [SectionComponent,NgFor,FooterComponent,ObserveElementDirective],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent {

    colours = ["#7aa9a0", "#847aa9", ]
    Machining: any[] =
    [
        {
            Name: "VMC M/C",
            varients : [
                {
                    make: "HURON make 3222",
                    table :"X3200 * Y2200* Z100",
                    capacity:"12000 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInLeft"
                },
                {
                    make: "PINNACLE -  QV 209",
                    table :"X2000 * Y910* Z850",
                    capacity:"2500 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInDown"
                },
                {
                    make: "BFW -CHAKRA BMV 60",
                    table :"X1050 * Y610 * Z610",
                    capacity:"1200 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInRight"
                },
                {
                    make: "BFW  - VAYU BMV 51",
                    table :"X810 * Y510 * Z610",
                    capacity:"800 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInLeft"
                },
                {
                    make:  "HASS  - USA VF2 YT",
                    table : "X800 * Y510 * Z610",
                    capacity: "1350 KG",
                    qty: "01 NO",
                    animation:"animate__fadeInDown"
                },
                {
                    make: "BFW  - AGNI BMV 45",
                    table :"X610 * Y450 * Z500",
                    capacity:"500 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInRight"
                },
                {
                    make: "BFW  - Sooraj BMV 60",
                    table :"X1350 * Y730 * Z600",
                    capacity:"1200 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInLeft"
                },
            ]
        },
        {
            Name: "HMC M/C",
            varients : [
                {
                    make: "Hass Make EC-1600",
                    table :"X1600 * Y850 * Z1100",
                    capacity:"4500 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "EDM",
            varients : [
                {
                    make: "SPARKONIX",
                    table :"TANK - 800 x 550",
                    capacity:"500 KG",
                    qty:"01 NO",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "RADIAL DRILLING M/C",
            varients : [
                {
                    make: "Etaly make",
                    table :"2  1/2”",
                    capacity:"Arm - 2 M",
                    qty:"02 NO",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "EOT Crane",
            varients : [
                {
                    make: "Excellent Make",
                    table :"12 Tons",
                    capacity:"12 Tons",
                    qty:"02 No",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "Milling With DRO",
            varients : [
                {
                    make: "AZAX-France Make",
                    table :"X1200 * Y 400 * Z 300",
                    capacity:"1500 KG",
                    qty:"01 No",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "Lathe",
            varients : [
                {
                    make: "MMT",
                    table :"Dia-200",
                    capacity:"5 Fit",
                    qty:"01 No",
                    animation:"animate__fadeInLeft"
                }
            ]
        },
        {
            Name: "Cylindrical Grinding Machine",
            varients : [
                {
                    make: "England Make",
                    table :"Dia-200*1000 mm",
                    capacity:"5 Fit",
                    qty:"01 No",
                    animation:"animate__fadeInLeft"
                }
            ]
        }
    ] 

    softwares : any[] = 
    [
        {
            Name : "3D Modeling",
            varients : [
                {
                    description : "Pro-e-creo-2",
                    qty: "01 NO"
                },
                {
                    description : "Power shap-11",
                    qty: "02 NO"
                },
                {
                    description : "Ideas , ug",
                    qty: "01 NO"
                }
            ]
        },
        {
            Name : "Cam - programming",
            varients : [
                {
                    description : "Delcam - 14",
                    qty : "05 NO"
                }
            ]
        },
        {
            Name : "Cam - surface",
            varients : [
                {
                    description : "Delcam - 1",
                    qty : "05 NO"
                }
            ]
        },
        {
            Name : "Operating Systems",
            varients : [
                {
                    description : "Windows 8 + MS   office",
                    qty : "10 No"
                }
            ]
        }
    ]

    onElementIntersecting(element: HTMLElement, cssClassName: string) {
        element.classList.add('animate__animated')
        element.classList.add(cssClassName)
      }
}
