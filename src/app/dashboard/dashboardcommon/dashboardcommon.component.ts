import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardcommon',
  templateUrl: './dashboardcommon.component.html',
  styleUrls: ['./dashboardcommon.component.css']
})
export class DashboardcommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dashboardCommon=[
    {  bookingno:120897001487,
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"MAA",
      'portEndPlace':'Chennai',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Changed Scheduled ',
      'departedfromplace':'Chennai Airport',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
       color:'red',
      'totaldays':"12 days",
       'image':"../../../assets/boat.png"
    },
    {   bookingno:120897001488,
      color:'pink',
      'portStart':"BOM",
      'portStartPlace':'Mumbai',
      'startDate':"Tue,09 May'17",
      'portEnd':"DXB",
      'portEndPlace':'Dubai',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Actual Shedule ',
      'departedfromplace':'Mumbai Airport',
      'shipportone':'Mepz Lab ',
      'shipporttwo':"BOM",
      'shipportthree':'PNQ ',
      'shipportfour':"Zenth Fuzin",
      'shipportfiver':"PKG",
      'totaldays':"14 days",
      'image':"../../../assets/flight (1).png"
    },
    {    bookingno:120897001488,
      color:'blue',
      'portStart':"SAV",
      'portStartPlace':'Savannah',
      'startDate':"Tue,09 May'17",
      'portEnd':"SAV",
      'portEndPlace':'Chennai',
      'EndDate':"Tue,09 May'17",
      'departedfrom':'Changed Scheduled ',
      'departedfromplace':'Chennai Airport',
      'shipportone':'Elantas PDG inc ',
      'shipporttwo':"SAV",
      'shipportthree':'Elantas PDG inc ',
      'shipportfour':"SIN",
      'shipportfiver':"PKG",
      'totaldays':"11 days",
      'image':"../../../assets/boat.png"
    },
   
  ]

}
