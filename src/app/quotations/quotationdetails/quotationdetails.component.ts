import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotationdetails',
  templateUrl: './quotationdetails.component.html',
  styleUrls: ['./quotationdetails.component.css']
})
export class QuotationdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quotationValues=[
    {
      'quoNumber':612081451,
      'status':"PENDING",
      'volume':22.5,
      'weight':2.145,
      'expires':"Expires in 9 days",
      color:'orange',
    },
    {
      'quoNumber':612081438,
      'status':"APPROVED",
      'volume':23.5,
      'weight':3.145,
      'expires':"Expires in 7 days",
      color:'green',
    },
    {
      'quoNumber':612081425,
      'status':"PENDING",
      'volume':20.5,
      'weight':4.145,
      'expires':"Expires in 6 days",
      color:'orange',
    },
    {
      'quoNumber':612081451,
      'status':"PENDING",
      'volume':22.5,
      'weight':2.145,
      'expires':"Expires in 9 days",
      color:'orange',
    },
    {
      'quoNumber':612081438,
      'status':"APPROVED",
      'volume':23.5,
      'weight':3.145,
      'expires':"Expires in 7 days",
      color:'green',
    },
    {
      'quoNumber':612081425,
      'status':"PENDING",
      'volume':20.5,
      'weight':4.145,
      'expires':"Expires in 6 days",
      color:'orange',
    },
  ]

}
