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
      productImageList : [
        {
          productDieName: "XS-BRACKET-HPDC-DIE",
          productDieImage: "/assets/Images/HPDC-Samples/1.XS-BRACKET-HPDC-DIE/XS-BRACKET-HPDC-DIE.jpg",
          productCastingImage : "/assets/Images/HPDC-Samples/1.XS-BRACKET-HPDC-DIE/XS-BRACKET.PNG",
          style : {
            aspectRatio: '2',
            right: '-5%'
          }
        },
        {
          productDieName: "INTAKE-MANIFOLD-DIE",
          productDieImage: "/assets/Images/HPDC-Samples/2.INTAKE-MANIFOLD-DIE/INTAKE-MANIFOLD-DIE.JPG",
          productCastingImage : "/assets/Images/HPDC-Samples/2.INTAKE-MANIFOLD-DIE/INTAKE-MANIFOLD.PNG",
          style : {
            aspectRatio: '4',
            right: '-5%',
            bottom: '5%'
          }
        },
        {
          productDieName: "MOTOR-STATOR-HPDC-DIE",
          productDieImage: "/assets/Images/HPDC-Samples/3.MOTOR-STATOR-DIE/MOTOR-STATOR-HPDC-DIE.jpg",
          productCastingImage : "/assets/Images/HPDC-Samples/3.MOTOR-STATOR-DIE/Motor-Stator.PNG",
          style : {
            aspectRatio: '1/1.2',
            right: '5%',
            height: '50%'
          }
        },
        {
          productDieName: "FRAME-END-HOUSING",
          productDieImage: "/assets/Images/HPDC-Samples/4.FRAME-END-HOUSING/FRAME-END-HOUSING.jpg",
          productCastingImage : ""
        },
        {
          productDieName: "PILLION-HANDLE-HPDC-DIE",
          productDieImage: "/assets/Images/HPDC-Samples/5.PILLION-HANDLE-HPDC-DIE/PILLION-HANDLE-HPDC-DIE.jpg",
          productCastingImage : "/assets/Images/HPDC-Samples/5.PILLION-HANDLE-HPDC-DIE/PILLION-HANDLE.PNG",
          style : {
            transform: 'rotate(90deg)',
            aspectRatio: 'unset',
            right: '8%',
            height: '75%',
            bottom: '-5%'
          }
        },
      ]
      
    },
    LPDC : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "LPDC (Low pressure die casting)",
      description : [
        "We Design and manufactures the We do Design and Manufactures the Casting Dies (GDC, LPDC & HPDC), Assemble dies & shell core boxes with finest quality.",
        "We use authenticated material like, Orvar, Dievar, Doosan, Bohler as a die material on customers choice , follow the standard cycle of roughing , drill & tapping, vacuum hardening cycle , finishing , EDM, wire cut , (in stage inspections) , die spotting , polishing , dismantling ,stress relieving final assembly and dispatch"
      ],
      productDieImage:"",
      productCastingImage : "",
      style : {
        aspectRatio: '3/2',
        right: '-15%'
      }
    },
    GDC : {
      heading: "OUR PRODUCTS AND SERVICES",
      title: "GDC (Gravity die casting)",
      description : [
        "We Design and manufactures the We do Design and Manufactures the Casting Dies (GDC, LPDC & HPDC), Assemble dies & shell core boxes with finest quality.",
        "We use authenticated material like, Orvar, Dievar, Doosan, Bohler as a die material on customers choice , follow the standard cycle of roughing , drill & tapping, vacuum hardening cycle , finishing , EDM, wire cut , (in stage inspections) , die spotting , polishing , dismantling ,stress relieving final assembly and dispatch"
      ],
      productDieImage:"",
      productCastingImage : ""
    },
       
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
