import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dashboard=[
    {
      status:"IN TRANSIT",
      days:6,
      color:'orange'
    },
    {
      status:"WARNING",
      days:3,
      color:'red'
    },
    {
      status:"BOOKED",
      days:8,
      color:'blue'
    },
    {
      status:"ACTIVE QUOTATIONS",
      days:13,
      color:'pink'
    },
    {
      status:"OUTSTADING INVOICES",
      days:22,
      color:'violet'
    },

  ]

}
