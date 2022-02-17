import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steppercommon',
  templateUrl: './steppercommon.component.html',
  styleUrls: ['./steppercommon.component.css']
})
export class SteppercommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shipmentCommon=[
    {
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"MAA",
      'portEndPlace':'Savannah',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Chennai Airport ',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
      'shippingimage':"../../../assets/fonts/svgs/solid/ship.svg" ,
      'totaldays':"12 days"
    },
    {
      'portStart':"BOM",
      'portStartPlace':'Munbai',
      'startDate':"Tue,09 May'17",
      'portEnd':"DXB",
      'portEndPlace':'Dubai',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Actual Shedule ',
      'shipportone':'Mepz Lab ',
      'shipporttwo':"BOM",
      'shipportthree':'PNQ ',
      'shipportfour':"Zenth Fuzin",
      'shipportfiver':"PKG",
      'totaldays':"14 days"
    },
    {
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"SAV",
      'portEndPlace':'Savannah',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Chennai Airport ',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
      'totaldays':"11 days"
    },
    {
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"MAA",
      'portEndPlace':'Savannah',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Chennai Airport ',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
      'totaldays':"12 days"
    },
    {
      'portStart':"BOM",
      'portStartPlace':'Munbai',
      'startDate':"Tue,09 May'17",
      'portEnd':"DXB",
      'portEndPlace':'Dubai',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Actual Shedule ',
      'shipportone':'Mepz Lab ',
      'shipporttwo':"BOM",
      'shipportthree':'PNQ ',
      'shipportfour':"Zenth Fuzin",
      'shipportfiver':"PKG",
      'totaldays':"10 days"
    },
    {
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"SAV",
      'portEndPlace':'Savannah',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Chennai Airport ',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
      'totaldays':"18 days"
    },
  ]

}
